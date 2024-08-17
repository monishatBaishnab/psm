import { useState } from "react";
import NestedIMenu from "./NestedIMenu";

type TNavItem = {
    label: string;
    isSubMenu?: boolean;
    children: {
        label: string;
        items: string[];
    }[];
};

const NavItem = ({ item }: { item: TNavItem }) => {
    const [show, setShow] = useState(false);

    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="py-2.5 cursor-pointer relative px-4 border-r border-r-psm-success-600 last:border-0 text-psm-success-50 text-center text-sm"
        >
            <button>{item.label}</button>
            {item.children?.length ? (
                <div
                    className={`absolute z-50 left-0 top-full bg-psm-success-600 transition-all pt-1 ${
                        !show ? "opacity-0 invisible" : "opacity-100 visible h-auto"
                    }`}
                >
                    {item?.children?.map((subItem) =>
                        subItem?.label ? (
                            <NestedIMenu
                                key={`${subItem.label} ${subItem.items?.length}`}
                                setShow={setShow}
                                subItem={subItem}
                            />
                        ) : (
                            subItem?.items?.map((text) => {
                                return (
                                    <button
                                        onClick={() => setShow(false)}
                                        key={text}
                                        className="text-left w-56 border-b last:border-b-0 border-b-psm-success-500/70 px-4 py-2 hover:bg-psm-success-700/40"
                                    >
                                        {text}
                                    </button>
                                );
                            })
                        )
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default NavItem;
