import { Dispatch, SetStateAction, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

type TSubItem = {
    label: string;
    items: string[];
};

const NestedIMenu = ({
    subItem,
    setShow
}: {
    subItem: TSubItem;
    setShow: Dispatch<SetStateAction<boolean>>;
}) => {
    const [showNestedMenu, setShowNestedMenu] = useState(false);
    return (
        <div key={subItem.label} className="cursor-auto text-left w-56 relative">
            <button
                onMouseEnter={() => setShowNestedMenu(true)}
                onMouseLeave={() => setShowNestedMenu(false)}
                key={subItem.label}
                className="flex items-center justify-between text-left border-b last:border-b-0 border-b-psm-success-500/70 pl-4 pr-2 py-2 w-full hover:bg-psm-success-700/40"
            >
                {subItem.label}
                <LiaAngleRightSolid />
                <div
                    className={`absolute z-50 left-full top-0 bg-psm-success-600 transition-all w-56 ${
                        !showNestedMenu ? "opacity-0 invisible" : "opacity-100 visible h-auto"
                    }`}
                >
                    {subItem?.items?.map((text) => {
                        return (
                            <button
                                key={text}
                                onClick={() => setShow(false)}
                                className="text-left border-b last:border-b-0 border-b-psm-success-500/70 px-4 py-2 w-full hover:bg-psm-success-700/40"
                            >
                                {text}
                            </button>
                        );
                    })}
                </div>
            </button>
        </div>
    );
};

export default NestedIMenu;
