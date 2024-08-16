import { useContext } from "react";
import { PSMNavbarContext } from "./PSMNavbar";
import menuItems from "../../../constants/menuItems";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowBack } from "react-icons/io";

const SmallNav = () => {
const { showSmallNavbar } = useContext(PSMNavbarContext);
    return (
        <div
            className={`container !py-5 absolute flex left-0 top-full bg-psm-success-600 transition-all w-full ${
                showSmallNavbar ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <Accordion>
                {menuItems?.map((menuItem) => (
                    <AccordionItem
                        classNames={{ title: "text-psm-success-50" }}
                        indicator={<IoIosArrowBack className="text-psm-success-50" />}
                        key={menuItem?.label}
                        aria-label={menuItem?.label}
                        title={menuItem?.label}
                    >
                        {menuItem?.children?.map((subItem) => (
                            <div className="cursor-auto text-left w-full">
                                <h5 className="px-4 py-3 block text-lg font-semibold text-psm-success-50">
                                    {subItem.label}
                                </h5>
                                {subItem?.items?.map((text) => {
                                    return (
                                        <button className="text-left border-b text-psm-success-50 last:border-b-0 border-b-psm-success-500/70 px-4 py-2 w-full hover:bg-psm-success-700/40">
                                            {text}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default SmallNav;
