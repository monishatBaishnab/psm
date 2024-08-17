import PSMBanner from "../components/modules/PSMBanner/PSMBanner";
import PSMNavbar from "../components/modules/PSMNavbar/PSMNavbar";
import PSMCard from "../components/ui/PSMCard";
import PSMButton from "../components/ui/PSMButton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PSMLinksContainer from "../components/modules/PSMLinksContainer/PSMLinksContainer";
import { BsDot } from "react-icons/bs";
const featuresArray = [
    "ওয়েবমেইল",
    "অভিযোগ প্রতিকার ব্যবস্থা",
    "Knowledge Repository",
    "e-Requisition",
    "Online Pay Bill",
    "মতামত / পরামর্শ",
];

const noticeData = [
    {
        title: "অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)",
        date: "১৬-০৮-২০২৪",
    },
    {
        title: "ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।",
        date: "১৬-০৮-২০২৪",
    },
    {
        title: "অফিস আদেশ সচিব মহোদয়ের রুটিন দায়িত্ব পালন",
        date: "১৬-০৮-২০২৪",
    },
    {
        title: "অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন )",
        date: "১৬-০৮-২০২৪",
    },
    {
        title: "নিয়োগ পত্রঃ পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর...",
        date: "১৬-০৮-২০২৪",
    },
];

const hotlineImages = [
    "https://i.ibb.co/hZPfX2Q/hotline-1.png",
    "https://i.ibb.co/QvxKtX8/hotline-2.png",
    "https://i.ibb.co/2j8dcnS/hotline-3.png",
    "https://i.ibb.co/5M6Xtw0/hotline-4.png",
    "https://i.ibb.co/pJQDfvb/hotline-5.png",
    "https://i.ibb.co/9Gsr7rb/hotline-6.png",
    "https://i.ibb.co/x852SGj/hotline-7.png",
    "https://i.ibb.co/nrCrNQT/hotline-8.png",
    "https://i.ibb.co/L0mS9RG/hotline-9.png",
    "https://i.ibb.co/k1kCg0X/hotlin-10.png",
    "https://i.ibb.co/pyHG71G/hotlin-11.png",
    "https://i.ibb.co/31kJWNZ/hotlin-12.png",
    "https://i.ibb.co/grVkfV2/hotline-10.png",
    "https://i.ibb.co/j3R91cB/hotline-11.png",
    "https://i.ibb.co/m5kK01c/hotline-12.png",
    "https://i.ibb.co/1nk2514/hotline-13.png",
    "https://i.ibb.co/nbvXJb7/hotline-14.png",
    "https://i.ibb.co/P5fT9tw/hotline-15.png",
]?.reverse();

const Home = () => {
    return (
        <div>
            <PSMNavbar />
            <PSMBanner />

            <div className="bg-psm-gray-50">
                <div className="container">
                    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 lg:grid-cols-4">
                        <div>
                            <PSMCard
                                name="ড. মুহাম্মদ ইউনূস"
                                designation="মাননীয় প্রধান উপদেষ্টা"
                                image="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/0282161a_25ca_4114_aebb_3a7cf937700f/Dr.%20Muhammad%20Yunus.jpg.jpg"
                            />
                        </div>
                        <div>
                            <PSMCard
                                name="নাজমুল আহসান"
                                designation="সচিব"
                                image="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/cd5856a3_6f55_4e58_95c4_ee9b41441670/WhatsApp-Image-2022-12-26-a.jpg"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <div className="bg-white rounded overflow-hidden">
                                <div className="bg-psm-success-500 py-3 px-5">
                                    <h4 className="text-psm-primary-50 text-lg font-semibold">
                                        নোটিশ বোর্ড
                                    </h4>
                                </div>
                                <div className="px-5 py-3 space-y-1">
                                    {noticeData?.map((data) => (
                                        <div
                                            key={data.title}
                                            className="border-b border-dashed last:border-b-0 border-b-psm-gray-100 mb-1 pb-1"
                                        >
                                            <div className="relative py-0.5 after:absolute after:-left-2 after:top-0 after:bottom-0 after:w-[3px] after:rounded-sm after:bg-psm-gray-200 hover:after:bg-psm-success-500">
                                                <h6 className="cursor-pointer transition-all hover:underline hover:underline-offset-2 hover:text-psm-success-500">
                                                    {data.title?.length > 70
                                                        ? `${data?.title?.slice(0, 70)} ...`
                                                        : data.title}
                                                </h6>
                                            </div>
                                            <small className="">{data.date}</small>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-5 py-2 flex items-center justify-between border-t border-t-psm-gray-50">
                                    <div className="flex items-center gap-1.5">
                                        <PSMButton size="sm" color="secondary" isIconOnly>
                                            <IoIosArrowDown />
                                        </PSMButton>
                                        <PSMButton size="sm" color="secondary" isIconOnly>
                                            <IoIosArrowUp />
                                        </PSMButton>
                                    </div>
                                    <PSMButton size="sm">সকল নোটিশ</PSMButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PSMLinksContainer />

            <div className="container !pt-3">
                <div className=" grid grid-cols-1 md:grid-cols-6 gap-5">
                    <div className="md:col-span-4 overflow-hidden">
                        <div className="bg-psm-primary-500 py-3 px-5 rounded-t">
                            <h4 className="text-psm-primary-50 text-lg font-semibold">
                                জরুরি হটলাইন
                            </h4>
                        </div>
                        <div className="flex items-center justify-center gap-x-5 flex-wrap mt-5">
                            {hotlineImages?.map((image) => (
                                <div key={image} className="w-28 h-full cursor-pointer">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={image}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <div className="bg-white rounded overflow-hidden">
                            <div className="bg-psm-success-500 py-3 px-5">
                                <h4 className="text-psm-success-50 text-lg font-semibold">
                                    অভ্যন্তরীণ ই-সেবাসমূহ
                                </h4>
                            </div>
                            <div className="space-y-1 p-5">
                                {featuresArray?.map((feature) => (
                                    <div key={feature} className="flex items-center gap-1">
                                        <BsDot />
                                        <button className="block transition-all hover:underline hover:underline-offset-2 hover:text-psm-success-500">
                                            {feature}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
