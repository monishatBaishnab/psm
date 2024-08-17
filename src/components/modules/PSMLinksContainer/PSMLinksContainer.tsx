import { useEffect, useState } from "react";
import { linksData } from "../../../constants/links";
const PSMLinksContainer = () => {
    const [keys, setKeys] = useState<number[]>([]);

    useEffect(() => {
        setKeys(linksData.map((_, key) => key + 1));
    }, []);

    const extendArray = (array: number[], divisor: number) => {
        const filtered = array.filter((key) => key % divisor === 0);
        const last = filtered[filtered.length - 1];
        return [...filtered, last + divisor, last + divisor * 2];
    };

    const getBottomBorderArray = (array: number[], count: number) => {
        const divisible = array.filter((num) => num % count === 0);
        const last = divisible[divisible.length - 1];
        return [last + 1, last + 2, last + 3];
    };

    const finalLargeKeysArray = extendArray(keys, 3);
    const largeBottomBorderKeyArray =
        finalLargeKeysArray[finalLargeKeysArray?.length-1] % 3 == 0
            ? keys.slice(-3)
            : getBottomBorderArray(keys, 2);
    const finalMediumKeysArray = extendArray(keys, 2);
    const mediumBottomBorderKeyArray =
        finalMediumKeysArray[finalMediumKeysArray?.length-1] % 2 == 0
            ? keys.slice(-2)
            : getBottomBorderArray(keys, 2);

    const getBorderClasses = (index: number) => {
        const lgRightBorder = !finalLargeKeysArray.includes(index);
        const lgBottomBorder = !largeBottomBorderKeyArray.includes(index);
        const mdRightBorder = !finalMediumKeysArray.includes(index);
        const mdBottomBorder = !mediumBottomBorderKeyArray.includes(index);

        return `${mdRightBorder ? "md:border-r" : "md:border-r-0"} ${
            mdBottomBorder ? "md:border-b" : "md:border-b-0"
        } ${lgRightBorder ? "lg:border-r" : "lg:border-r-0"} ${
            lgBottomBorder ? "lg:border-b" : "lg:border-b-0"
        }`.trim();
    };

    return (
        <div className="px-10 py-20">
            <div className="container shadow-md rounded-lg border border-gray-200 !p-0">
                <div className="p-5 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {linksData?.map((link, key) => {
                        // setKeys((prev) => [...prev, key]);
                        return (
                            <div
                                id={String(key + 1)}
                                key={`${link.image} ${key}`}
                                className={`border-b last:border-b-0 ${getBorderClasses(key + 1)} `}
                            >
                                <div className="p-4 sm:p-7 flex flex-col justify-center items-center space-y-2 transition-all hover:scale-105">
                                    <div className="w-16 h-16 overflow-hidden">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={link.image}
                                            alt={link.title}
                                        />
                                    </div>
                                    <h3 className="text-xl text-slate-800 font-semibold text-center">
                                        {link.title}
                                    </h3>
                                    <div>
                                        {link?.children?.map((section) => (
                                            <button
                                                key={section.label}
                                                className="text-slate-700 block text-center w-full transition-all hover:text-psm-success-500 border-b border-b-slate-200 border-dashed pb-1 mb-1 last:border-b-0"
                                            >
                                                {section.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PSMLinksContainer;
