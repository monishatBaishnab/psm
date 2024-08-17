/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Autocomplete, Chip } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { CgClose } from "react-icons/cg";

export const customAutocompleteProps = {
    size: "lg",
    radius: "sm",
    labelPlacement: "outside",
    className: "-mt-0.5",
    inputProps: {
        classNames: {
            inputWrapper: [
                "bg-white !transition-all border border-solid_border h-full !w-auto",
                "data-[hover=true]:bg-white data-[hover=true]:border-primary",
                "data-[focus-visible=true]:!outline-none group-data-[focus=true]:!bg-white",
                "group-data-[focus=true]:!ring-primary group-data-[focus=true]:!ring-2 group-data-[focus=true]:!ring-offset-2",
                "group-data-[focus-visible=true]:!ring-primary",
            ],
            helperWrapper: "mt-4",
            label: "!cursor-text !text-base font-medium !top-[20px]",
            input: "!w-auto",
        },
    },
    popoverProps: {
        classNames: {
            content: "!rounded-md",
        },
    },
};

/*
Props: 
- name: string;
- label: string;
- placeholder: string;
- description: string;
- children: ReactNode;
- handleChange: (value)=> void;
- handleInputChange: (value)=> void;
- initialSelectedKeys: string[];
- maxAllowedKeys: number;
- selectionMode: 'single'|'multiple'
*/

type TEvent = {
    target: {
        name: string;
        value: string[] | string;
    };
};

type TFTAutocomplete = {
    name: string;
    label: string;
    placeholder: string;
    description: string;
    children: unknown;
    handleInputChange: (value: string) => void;
    handleChange: (value: TEvent) => void;
    initialSelectedKeys: string[];
    maxAllowedKeys: number;
    selectionMode: "single" | "multiple";
};

const FTAutocomplete = ({
    name,
    label,
    placeholder,
    description,
    children,
    handleInputChange,
    handleChange,
    initialSelectedKeys = [],
    maxAllowedKeys,
    selectionMode = "single",
}: TFTAutocomplete) => {
    const [selectedKey, setSelectedKey] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(initialSelectedKeys);

    // Function for handle addition of a key
    const handleKeyAddition = (value: string) => {
        // If value is empty, do nothing
        if (!value) return;
        if (selectionMode === "single") {
            setSelectedKey(value);
            handleChange({
                target: {
                    name,
                    value: value,
                },
            });
            return;
        }
        if (selectionMode === "multiple") {
            setSelectedKeys((prev) => {
                // If the key already selected, do nothing
                if (prev.includes(value)) prev;

                // Determine if more key can be added
                const canAddMoreKeys = !maxAllowedKeys || prev.length < maxAllowedKeys;
                // Update the selected keys
                const updatedSelectedKeys = canAddMoreKeys ? [...prev, value] : prev;
                // Trigger the onchange event
                handleChange({
                    target: {
                        name,
                        value: updatedSelectedKeys,
                    },
                });
                // Finally return the updated state
                return updatedSelectedKeys;
            });
        }
    };

    // Function to handle the removal of a key
    const handleKeyRemoval = (key: string) => {
        setSelectedKeys((prev) => {
            return prev.filter((item) => item !== key);
        });
    };

    return (
        <div>
            <Autocomplete
                {...customAutocompleteProps}
                isClearable={false}
                name={name}
                label={label}
                placeholder={placeholder}
                description={description}
                selectedKey={selectedKey}
                onSelectionChange={handleKeyAddition}
                onInput={(e) => handleInputChange(e.target.value)}
                selectorButtonProps={{ className: "hidden" }}
                startContent={
                    <div className="w-auto py-2.5">
                        <div className="w-full flex flex-wrap items-center gap-2">
                            {selectedKeys?.map((item) => (
                                <Chip
                                    key={item}
                                    className="bg-psm-success-100 text-psm-success-500 max-w-full"
                                    radius="sm"
                                    endContent={
                                        <button onClick={() => handleKeyRemoval(item)}>
                                            <CgClose />
                                        </button>
                                    }
                                >
                                    {item}
                                </Chip>
                            ))}
                        </div>
                    </div>
                }
            >
                {/* Render the children inside the Autocomplete */}
                {children}
            </Autocomplete>
        </div>
    );
};

export default FTAutocomplete;
