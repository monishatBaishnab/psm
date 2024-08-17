import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

import { Image } from "@nextui-org/react";
import imageOne from "../../../assets/images/Banner-2023.jpg";
import imageTwo from "../../../assets/images/Bogura-Khal-2023.jpg";
import imageTree from "../../../assets/images/teesta-2023.jpg";
import emergencyOne from "../../../assets/images/emergency/National-portal_bn.gif";
import emergencyTwo from "../../../assets/images/emergency/e-directory.jpg";
import emergencyThree from "../../../assets/images/emergency/internal_eservice2.gif";
import FTSelect from "../../ui/FTSelect";
import FTSelectItem from "../../ui/FTSelectItem";

const PSMBanner = () => {
    return (
        <div
            className={`bg-[url(https://i.ibb.co/cLMqsBy/asif-rahman-F5-U1hup-KYgw-unsplash-1-min.jpg)] bg-no-repeat bg-cover bg-bottom`}
        >
            <div className="md:py-20 bg-white/40 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-start gap-2 container">
                    <div className="w-full md:w-[calc(100%_-_256px)] h-full bg-white p-2 border border-slate-400">
                        <Swiper
                            effect={"fade"}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectFade]}
                            className="psm_banner h-full"
                        >
                            <SwiperSlide className="h-full">
                                <div className="h-[300px] w-full overflow-hidden relative">
                                    <div className="absolute px-4 backdrop-blur-sm py-3 left-0 right-0 bottom-10 flex object-center justify-center text-psm-success-50 bg-psm-success-600/50 border border-psm-success-500">
                                        <h1 className="text-3xl  font-bold">
                                            পানি সম্পদ মন্ত্রণালয়
                                        </h1>
                                    </div>
                                    <img className="w-full h-full object-cover" src={imageOne} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="h-full">
                                <div className="h-[300px] w-full overflow-hidden relative">
                                    <div className="absolute px-4 backdrop-blur-sm py-3 left-0 right-0 bottom-10 flex object-center justify-center text-psm-success-50 bg-psm-success-600/50 border border-psm-success-500">
                                        <h1 className="text-3xl  font-bold">
                                            পানি সম্পদ মন্ত্রণালয়
                                        </h1>
                                    </div>
                                    <img className="w-full h-full object-cover" src={imageTwo} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="h-full">
                                <div className="h-[300px] w-full overflow-hidden relative">
                                    <div className="absolute px-4 backdrop-blur-sm py-3 left-0 right-0 bottom-10 flex object-center justify-center text-psm-success-50 bg-psm-success-600/50 border border-psm-success-500">
                                        <h1 className="text-3xl  font-bold">
                                            পানি সম্পদ মন্ত্রণালয়
                                        </h1>
                                    </div>
                                    <img className="w-full h-full object-cover" src={imageTree} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-full md:w-64 space-y-3">
                        <div className="w-full h-full">
                            <FTSelect
                                aria-label="type_of_office"
                                radius="none"
                                size="lg"
                                name="type_of_office"
                                placeholder="অফিসের ধরন"
                            >
                                {[0, 1, 2, 3, 4, 5].map((item) => (
                                    <FTSelectItem key={item}>মন্ত্রনালয়/বিভাগ</FTSelectItem>
                                ))}
                            </FTSelect>{" "}
                        </div>
                        <button className="w-full h-full overflow-hidden bg-white p-1 border-slate-400">
                            <Image
                                radius="none"
                                className="h-full w-full object-cover"
                                src={emergencyOne}
                            />
                        </button>
                        <button className="w-full h-full overflow-hidden bg-white p-1 border-slate-400">
                            <Image
                                radius="none"
                                className="h-full w-full object-cover"
                                src={emergencyTwo}
                            />
                        </button>
                        <button className="w-full h-full overflow-hidden bg-white p-1 border-slate-400">
                            <Image
                                radius="none"
                                className="h-full w-full object-cover"
                                src={emergencyThree}
                            />
                        </button>
                        <div className="w-full h-full">
                            <audio controls={true} className="w-full">
                                <source
                                    src="https://mowr.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/e5f25d4e_f0a7_4b2a_a07c_3ec69a793516/bd_national_anthem.mp3"
                                    type="audio/mp3"
                                />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PSMBanner;
