import React from "react";
import { BookOpen } from "lucide-react";

interface HistorySectionProps {
    language: "en" | "np";
}

export default function HistorySection({ language }: HistorySectionProps) {
    const historyItems = [
        {
            year: "1965",
            titleEn: "Foundation of the Union",
            titleNp: "युनियनको स्थापना र सुरुआत",
            descEn: "ANNFSU was founded with the aim of mobilizing students to struggle for educational rights and the restoration of democracy in Nepal.",
            descNp: "नेपालमा विद्यार्थी अधिकार, वैज्ञानिक शिक्षा प्रणाली र लोकतन्त्र बहालीका लागि विद्यार्थीहरू संगठित भई अनेरास्ववियुको ऐतिहासिक स्थापना भएको वर्ष।",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzGhqZQWLVbHeS6vWLj3yA3Q7s6xWSOJ9FNhVKDlj-_gwrLUly-gxCu5JrkvGa1lvtP3rv61zgUTgAUjL4oAKgXijlCqh33BFSLZ7yvAa3LDDgii9SBzy3mFkapyULMjQ7m7EiSoSe8-boCsVrqPLByGXiU2vWezstwRhxAqGq9yoV1Klht9_BDKZIXzBKww1LeXsLbRNAMMDbWryhDKzUj6eKVBJQ8mYzhk96FNsV9Aa5tTCW8r_2HidDzRUWtUclN1KG-YheLKs"
        },
        {
            year: "1990",
            titleEn: "People's Movement I",
            titleNp: "ऐतिहासिक जनआन्दोलन १",
            descEn: "The organization played a crucial role in the movement for restoration of democracy, mobilizing thousands of students across the country.",
            descNp: "पञ्चायती निरंकुशता अन्त्य गरी बहुदलीय प्रजातन्त्र पुनर्स्थापनाको लागि देशभर हजारौं विद्यार्थी परिचालन गर्दै गौरवमय भूमिका खेलिएको क्षण।",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVgthnIVJ07FRensz8GNGP0OGM2padajDN3tOFUyv-lXEONCyx6RHFcNR_Y9hfIhMmhNm6QVlZR9gZ64WtNqsFyfKI1Xm8EqOUUR7FTgyUUm6GH4ALbY7_BYuF7d_UUtLXXHamZ5T-4Cae5zs7f9-vB1tGTnX02D-B0bbtnP7cMEOxVj8uQ38ttwOaAoPOJB693QrrWt0rSkDjDenYjUmyvcVeApJCGL-ZGlfeSRczzKuCqVRv3AmSoGQ8xeOARRKOf5V8vcTx0Mw"
        },
        {
            year: "Modern Era",
            titleEn: "21st General Convention",
            titleNp: "२१औं राष्ट्रिय महाधिवेशन र आधुनिक युग",
            descEn: "Continuing the legacy of leadership and advocacy in a new democratic republic Nepal, focusing on educational reform and social justice.",
            descNp: "संघीय लोकतान्त्रिक गणतन्त्र नेपालमा सर्वसुलभ, व्यावसायिक र उत्कृष्ट शिक्षा नीतिका लागि निरन्तर वकालत गर्दै नयाँ नेतृत्व निर्माणको युग।",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPvS77y6RiQ1u1pscHrpqnp2YNHaXojc1oWyw2Gb0sLGS3WmqeMgLKPMsCKtWyHP5y3ckjSVG8eS9oa9XctWDRbzrrkQhMGrDyIvXIQW_DvW1e2RJmLz6OYIU8M-n7n0XQ44fR8z-EQvRsx3AHOLZFutFRO7axY6g0tlqV7cA3YeKWH6zr28fOQalwsE7GoVN1rSRcnSwkANYjYRy1Yjcwepg24p-hUAkZlAhq9yGL7wJIJXTZrVt2ULi-szYBUvnPwR2rOMXrADw"
        }
    ];

    return (
        <section id="history" className="py-20 bg-slate-50/30 border-y border-slate-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header matching screenshot exactly */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-700 uppercase flex items-center gap-2">
                        <span>History of ANNFSU In Nepal</span>
                        <span className="text-slate-300">|</span>
                        <span className="font-devanagari font-bold">{language === "en" ? "इतिहास" : "इतिहास"}</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#b91c1c] rounded-full mt-3.5"></div>
                </div>

                {/* Timeline container */}
                <div className="relative">
                    {/* Central Vertical Line (Desktop only) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-red-600/20 hidden md:block" />

                    {/* Timeline Items */}
                    <div className="space-y-16 md:space-y-24">
                        {historyItems.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative">
                                    {/* Timeline Dot (Desktop only) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#b91c1c] border-[3.5px] border-white shadow z-10 hidden md:block" />

                                    {/* Desktop Grid Layout */}
                                    <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-16 items-center">
                                        {/* Left Column */}
                                        <div className={isEven ? "flex justify-end" : "flex justify-start"}>
                                            {isEven ? (
                                                /* Text Card on Left */
                                                <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-100/80 border-r-4 border-r-[#b91c1c] shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col items-end text-right space-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
                                                    <span className="text-xs sm:text-sm font-black text-[#b91c1c] tracking-wider uppercase font-sans">
                                                        {item.year}
                                                    </span>
                                                    <h3 className="text-lg sm:text-xl font-extrabold text-[#052855] tracking-tight leading-snug">
                                                        {language === "en" ? item.titleEn : item.titleNp}
                                                    </h3>
                                                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-sans font-medium">
                                                        {language === "en" ? item.descEn : item.descNp}
                                                    </p>
                                                </div>
                                            ) : (
                                                /* Image on Left */
                                                <div className="w-full max-w-md aspect-[16/10] rounded-3xl overflow-hidden shadow-md border border-slate-100">
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={language === "en" ? item.titleEn : item.titleNp}
                                                        referrerPolicy="no-referrer"
                                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column */}
                                        <div className={!isEven ? "flex justify-start" : "flex justify-end"}>
                                            {!isEven ? (
                                                /* Text Card on Right */
                                                <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-100/80 border-l-4 border-l-[#b91c1c] shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col items-start text-left space-y-2.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
                                                    <span className="text-xs sm:text-sm font-black text-[#b91c1c] tracking-wider uppercase font-sans">
                                                        {item.year}
                                                    </span>
                                                    <h3 className="text-lg sm:text-xl font-extrabold text-[#052855] tracking-tight leading-snug">
                                                        {language === "en" ? item.titleEn : item.titleNp}
                                                    </h3>
                                                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-sans font-medium">
                                                        {language === "en" ? item.descEn : item.descNp}
                                                    </p>
                                                </div>
                                            ) : (
                                                /* Image on Right */
                                                <div className="w-full max-w-md aspect-[16/10] rounded-3xl overflow-hidden shadow-md border border-slate-100">
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={language === "en" ? item.titleEn : item.titleNp}
                                                        referrerPolicy="no-referrer"
                                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mobile Layout (Stacked) */}
                                    <div className="md:hidden flex flex-col space-y-6 relative pl-6 border-l-2 border-red-600/20">
                                        {/* Mobile Dot */}
                                        <div className="absolute left-0 -translate-x-[9px] top-6 w-4 h-4 rounded-full bg-[#b91c1c] border-[3px] border-white shadow z-10" />

                                        {/* Image First on Mobile */}
                                        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow border border-slate-100">
                                            <img
                                                src={item.imageUrl}
                                                alt={language === "en" ? item.titleEn : item.titleNp}
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Text Card Second on Mobile */}
                                        <div className="w-full bg-white p-6 rounded-2xl border-l-4 border-l-[#b91c1c] shadow-sm border border-slate-100/80 flex flex-col items-start text-left space-y-2">
                                            <span className="text-xs font-black text-[#b91c1c] tracking-wider uppercase font-sans">
                                                {item.year}
                                            </span>
                                            <h3 className="text-base sm:text-lg font-bold text-[#052855] tracking-tight">
                                                {language === "en" ? item.titleEn : item.titleNp}
                                            </h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">
                                                {language === "en" ? item.descEn : item.descNp}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
