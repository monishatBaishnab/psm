import { Image } from "@nextui-org/react";
import pms_logo from "../../../assets/images/psm_logo.png";
import FTInput from "../../ui/FTInput";
import { CiSearch } from "react-icons/ci";
import PSMButton from "../../ui/PSMButton";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { SlEnvolope } from "react-icons/sl";
import { FaBars, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { PSMNavbarContext } from "./PSMNavbar";
const NavHeader = () => {
    const { setShowSmallNavbar } = useContext(PSMNavbarContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                <div className="bg-psm-success-50 p-2 rounded-md">
                    <Image alt="পানি সম্পদ অধিদপ্তর" src={pms_logo} />
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-psm-success-100 text-base">বাংলাদেশ জাতীয় তথ্য বাতায়ন</h5>
                    <h2 className="text-psm-success-50 text-3xl font-medium -mb-1">
                        পানি সম্পদ অধিদপ্তর
                    </h2>
                    <h5 className="text-psm-success-100 text-base">
                        গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                    </h5>
                </div>
            </div>
            {/*             
            <div className="flex flex-col items-end gap-2">
                <div className="max-w-72 flex items-center gap-2">
                    <FTInput name="Search" size="md" placeholder="কি খুজতে চান লিখুন..." />
                    <PSMButton
                        size="md"
                        className="bg-psm-success-800 hover:!bg-psm-success-800 active:!bg-psm-success-800"
                        isIconOnly
                    >
                        <CiSearch className="text-2xl" />
                    </PSMButton>
                </div>
                <div className="w-72">
                    <FTSelect size="md" name="type_of_office" placeholder="অফিসের ধরন">
                        {[0, 1, 2, 3, 4, 5].map((item) => (
                            <FTSelectItem key={item}>মন্ত্রনালয়/বিভাগ</FTSelectItem>
                        ))}
                    </FTSelect>
                </div>
                <div className="w-72">
                    <FTSelect size="md" name="language" placeholder="ভাষা নির্বাচন করুন">
                        <FTSelectItem key='bangla'>বাংলা</FTSelectItem>
                        <FTSelectItem key='english'>ইংরেজি</FTSelectItem>
                        <FTSelectItem key='hindi'>হিন্দি</FTSelectItem>
                    </FTSelect>
                </div>
            </div> 
            */}
            <div className="flex flex-col items-center md:items-end gap-2.5">
                <div className="flex items-center gap-2 text-psm-success-100">
                    <div className="flex items-center gap-1">
                        <TbDeviceLandlinePhone />
                        <span>০১০৭২৮০৯২৮১০৮</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <SlEnvolope />
                        <span>mowr.gov@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 bg-psm-success-800 text-psm-success-50 rounded-md hover:rounded-sm transition-all">
                        <FaFacebook />
                    </button>
                    <button className="p-2 bg-psm-success-800 text-psm-success-50 rounded-md hover:rounded-sm transition-all">
                        <FaTwitter />
                    </button>
                    <button className="p-2 bg-psm-success-800 text-psm-success-50 rounded-md hover:rounded-sm transition-all">
                        <FaLinkedin />
                    </button>
                    <button className="p-2 bg-psm-success-800 text-psm-success-50 rounded-md hover:rounded-sm transition-all">
                        <FaYoutube />
                    </button>
                </div>
                <div className="max-w-72 flex items-center gap-2">
                    <FTInput name="Search" size="sm" placeholder="কি খুজতে চান লিখুন..." />
                    <PSMButton
                        size="sm"
                        className="bg-psm-success-800 hover:!bg-psm-success-800 active:!bg-psm-success-800"
                        isIconOnly
                    >
                        <CiSearch className="text-lg" />
                    </PSMButton>
                    <PSMButton
                        onPress={() => setShowSmallNavbar((prev: boolean) => !prev)}
                        size="sm"
                        className="bg-psm-success-800 hover:!bg-psm-success-800 active:!bg-psm-success-800 lg:hidden"
                        isIconOnly
                    >
                        <FaBars className="text-lg" />
                    </PSMButton>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;
