import { HiHome } from "react-icons/hi";
import NavHeader from "./NavHeader";
import menuItems from "../../../constants/menuItems";
import NavItem from "./NavItem";
import { createContext, useState } from "react";
import SmallNav from "./SmallNav";

const initialData: Record<string, any> = {};

export const PSMNavbarContext = createContext(initialData);

const PSMNavbar = () => {
    const [showSmallNavbar, setShowSmallNavbar] = useState(false);
    return (
        <PSMNavbarContext.Provider value={{ showSmallNavbar, setShowSmallNavbar }}>
            <div className="bg-psm-success-700">
                <div className="container relative !pt-2 !pb-2 lg:!pb-0">
                    <NavHeader />
                    <div className="w-full mt-3 hidden lg:grid grid-cols-9 bg-psm-success-600/50 border-l border-t border-r border-psm-success-600">
                        <div className="py-2.5 px-4 border-r border-r-psm-success-600 text-psm-success-50 flex justify-center">
                            <button>
                                <HiHome className="text-2xl" />
                            </button>
                        </div>
                        {menuItems?.map((item) => (
                            <NavItem key={item.label} item={item} />
                        ))}
                    </div>
                    <SmallNav />
                </div>
            </div>
        </PSMNavbarContext.Provider>
    );
};

export default PSMNavbar;
