"use client";

import { useState } from "react";
import { BookOpen, Cpu, Lightbulb, Briefcase, HelpCircle, CheckCircle } from "lucide-react";

// --- 1. LOCAL INTERFACES ---
interface CampaignManifestoProps {
    language: "en" | "np";
}

interface ManifestoItem {
    id: string;
    titleEn: string;
    titleNp: string;
    descEn: string;
    descNp: string;
    iconName: string;
}

// --- 2. LOCAL STATIC DATA ---
const CAMPAIGN_MANIFESTO: ManifestoItem[] = [
    {
        id: "m1",
        titleEn: "Quality Education & Policy Reforms",
        titleNp: "गुणस्तरीय शिक्षा र व्यावहारिक नीति",
        descEn: "Implementing student-centric policies, continuous learning evaluation, and practical training modules to prepare students for international standards.",
        descNp: "विद्यार्थी केन्द्रित नीति, निरन्तर शैक्षिक मूल्यांकन र व्यावहारिक तालीम मोड्युलहरू लागू गरी विद्यार्थीहरूलाई राष्ट्रिय तथा अन्तर्राष्ट्रिय स्तरमा प्रतिस्पर्धात्मक बनाउने।",
        iconName: "BookOpen"
    },
    {
        id: "m2",
        titleEn: "Technology & Digitalization",
        titleNp: "सूचना र प्रविधिको विकास",
        descEn: "Equipping classrooms with smart projectors, high-speed campus Wi-Fi, digital library search, and accessible online student services.",
        descNp: "क्याम्पसभर उच्च गतिको वाइफाइ, डिजिटल पुस्तकालय, प्रविधिमैत्री कक्षाकोठा र अनलाइन विद्यार्थी सेवाहरूको सहज पहुँच सुनिश्चित गर्ने।",
        iconName: "Cpu"
    },
    {
        id: "m3",
        titleEn: "Startup Culture & Innovation",
        titleNp: "स्टार्टअप र उद्यमशीलता",
        descEn: "Establishing an entrepreneurial incubation hub, seed funding advocacy, and annual youth innovation hackathons to turn ideas into ventures.",
        descNp: "क्याम्पस भित्र स्टार्टअप इन्क्युबेशन हब स्थापना गर्ने र विद्यार्थीहरूका नवप्रवर्तनात्मक सोचहरूलाई उद्यममा बदल्न सघाउने।",
        iconName: "Lightbulb"
    },
    {
        id: "m4",
        titleEn: "Career & Skill Opportunities",
        titleNp: "करियर र रोजगारीका अवसर",
        descEn: "Direct linkages with local enterprises, skill development courses, resume building seminars, and on-campus placement drives.",
        descNp: "रोजगारदाता कम्पनीहरूसँग प्रत्यक्ष समन्वय, सीप विकास तालिम, बायोडाटा लेखन कार्यशाला र क्याम्पस प्लेसमेन्ट पहलहरू सञ्चालन गर्ने।",
        iconName: "Briefcase"
    }
];

const iconMap: Record<string, any> = {
    BookOpen: BookOpen,
    Cpu: Cpu,
    Lightbulb: Lightbulb,
    Briefcase: Briefcase,
};

export default function CampaignManifesto({ language }: CampaignManifestoProps) {
    return (
        <section id="manifesto" className="py-16 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Absolute grid background design accent */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {language === "en" ? "FSU Agenda" : "स्ववियु चुनावी एजेन्डा"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-white font-devanagari tracking-tight sm:text-4xl">
                        {language === "en" ? "Core Vision & Manifesto" : "हाम्रा मुख्य कार्यदिशा र एजेन्डाहरू"}
                    </h2>
                    <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm">
                        {language === "en"
                            ? "We believe in a modern campus environment where academic excellence is supported by technology, career guidance, and progressive student rights."
                            : "हामी विश्वास गर्छौं कि प्रविधि, व्यावहारिक शैक्षिक नीति र उद्यमशीलताको माध्यमबाट मात्र आदिकवि भानुभक्त क्याम्पसको चौतर्फी विकास सम्भव छ।"}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CAMPAIGN_MANIFESTO.map((item) => {
                        const IconComponent = iconMap[item.iconName] || HelpCircle;
                        return (
                            <div
                                key={item.id}
                                className="bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 p-6 rounded-2xl hover:bg-slate-800/80 transition-all flex gap-5 group"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0 group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-6 h-6" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {language === "en" ? item.titleEn : item.titleNp}
                                    </h3>
                                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                                        {language === "en" ? item.descEn : item.descNp}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Action Button linking to AI bot */}
                <div className="mt-12 text-center bg-slate-800/40 border border-slate-700/30 p-6 rounded-2xl max-w-2xl mx-auto">
                    <p className="text-sm text-slate-300">
                        {language === "en"
                            ? "Want to ask how we plan to achieve these goals? Ask our AI helpdesk!"
                            : "हामी यी एजेन्डाहरू कसरी पुरा गर्छौं भन्ने जान्न चाहनुहुन्छ? स्ववियु एआई असिस्टेन्टसँग सोध्नुहोस्!"}
                    </p>
                    <a
                        href="#assistant"
                        className="mt-3 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-5 py-2.5 rounded-xl transition-all shadow"
                    >
                        {language === "en" ? "Chat with FSU AI" : "स्ववियु एआईसँग कुरा गर्नुहोस्"}
                    </a>
                </div>
            </div>
        </section>
    );
}