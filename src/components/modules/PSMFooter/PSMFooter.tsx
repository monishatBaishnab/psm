import { Image } from "@nextui-org/react";
import { BsDot } from "react-icons/bs";
const featuresArray = [
    "ওয়েবমেইল",
    "অভিযোগ প্রতিকার ব্যবস্থা",
    "Knowledge Repository",
    "e-Requisition",
    "Online Pay Bill",
    "মতামত / পরামর্শ",
];
const PSMFooter = () => {
    return (
        <div className="bg-psm-gray-50">
            <div className="container gap-5 grid grid-cols-1 md:grid-cols-3">
                <div>
                    <div className="flex flex-col items-left gap-3 justify-left md:justify-start">
                        <div className="bg-white p-2 rounded-md w-20">
                            <Image
                                alt="পানি সম্পদ অধিদপ্তর"
                                src="https://i.ibb.co/Tc4wF9S/psm-logo.png"
                            />
                        </div>
                        <div className="text-left">
                            <h5 className="text-psm-gray-700 text-base">
                                বাংলাদেশ জাতীয় তথ্য বাতায়ন
                            </h5>
                            <h2 className="text-psm-success-500 text-3xl font-medium -mb-1">
                                পানি সম্পদ অধিদপ্তর
                            </h2>
                            <h5 className="text-psm-gray-700 text-base">
                                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                            </h5>
                        </div>
                    </div>
                    <div className="space-y-1 mt-3">
                        <button className="block hover:text-psm-success-500">
                            'দুদক' হটলাইন '১০৬'
                        </button>
                        <button className="block hover:text-psm-success-500">সাইট ম্যাপ</button>
                        <button className="block hover:text-psm-success-500">
                            গোপনীয়তার নীতিমালা
                        </button>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl text-gray-800 font-bold">কারিগরি সহায়তায়:</h4>
                    <div className="w-full h-20 overflow-hidden">
                        <img
                            className="w-full h-full object-contain"
                            src="https://i.ibb.co/M60333X/66b2423e9b953976540551.png"
                            alt=""
                        />
                    </div>
                    <h4 className="text-xl text-gray-800 font-bold mt-5">
                        পরিকল্পনা ও বাস্তবায়নে:{" "}
                    </h4>
                    <div className="space-y-1 mt-3">
                        <button className="block hover:text-psm-success-500">
                            মন্ত্রিপরিষদ বিভাগ
                        </button>
                        <button className="block hover:text-psm-success-500">এটুআই, বিসিসি</button>
                        <button className="block hover:text-psm-success-500">
                            ডিওআইসিটি ও বেসিস
                        </button>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl text-gray-800 font-bold">
                    অভ্যন্তরীণ ই-সেবাসমূহ
                    </h4>
                    <div className="space-y-1 mt-5">
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
            <div className="container !py-3 border-t border-t-psm-gray-200">
                <span className="text-psm-gray-700 text-center block">সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৩ ১৫:৩০:৪৯</span>
            </div>
        </div>
    );
};

export default PSMFooter;
