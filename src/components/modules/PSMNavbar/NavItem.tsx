import { useState } from "react";

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
            <button className="">{item.label}</button>
            {
                item.children?.length ? (
                <div
                    className={`absolute z-50 flex left-0 top-full bg-psm-success-600 transition-all ${
                        !show ? "opacity-0 invisible" : "opacity-100 visible h-auto"
                    }`}
                >
                    {item?.children?.map((subItem) => (
                        <div key={subItem.label} className="cursor-auto text-left w-56">
                            <h5 className="px-4 py-3 block text-lg font-semibold">
                                {subItem.label}
                            </h5>
                            {subItem?.items?.map((text) => {
                                return (
                                    <button key={text} onClick={() => setShow(false)} className="text-left border-b last:border-b-0 border-b-psm-success-500/70 px-4 py-2 w-full hover:bg-psm-success-700/40">
                                        {text}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
                ) : null
            }
        </div>
    );
};

export default NavItem;
