import { useState } from "react";
import { Calendar, Bell, ChevronRight, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export interface Notice {
    id: string;
    titleEn: string;
    titleNp: string;
    date: string;
    category: "Urgent" | "Academic" | "Sports" | "Solidarity" | "General" | string;
    contentEn: string;
    contentNp: string;
    isUrgent: boolean;
    imageDesc?: string;
}

export const FSU_NOTICES: Notice[] = [
    {
        id: "n1",
        titleEn: "Solidarity Vigil & Seek Justice for Inisha BK",
        titleNp: "इनिसा विकको लागि न्याय र ऐक्यवद्धता कार्यक्रम",
        date: "2026-07-15",
        category: "Solidarity",
        isUrgent: true,
        contentEn: "Free Students' Union Aadikavi Bhanubhakta Campus has organized a solidarity movement seeking immediate justice for student Inisha BK under the slogan 'JUSTICE DELAYED, JUSTICE DENIED'. A peaceful candlelit vigil and assembly will be held at the campus entrance. All students are requested to join in solidarity.",
        contentNp: "स्ववियु आदिकवि भानुभक्त क्याम्पसद्वारा 'JUSTICE DELAYED, JUSTICE DENIED' नारा अन्तर्गत विद्यार्थी इनिसा विकको लागि तत्काल न्याय माग गर्दै ऐक्यवद्धता र दीप प्रज्वलन कार्यक्रम आयोजना गरिएको छ। सम्पूर्ण विद्यार्थी साथीहरूलाई उपस्थितिका लागि हार्दिक अनुरोध गरिन्छ।"
    },
    {
        id: "n2",
        titleEn: "Annual Sports Week and Jersey Distribution",
        titleNp: "वार्षिक खेलकुद सप्ताह तथा जर्सी वितरण कार्यक्रम",
        date: "2026-07-12",
        category: "Sports",
        isUrgent: false,
        contentEn: "FSU President Anup Ale Magar, along with the sports committee, successfully distributed custom football jerseys to our collegiate soccer team representing Aadikavi Bhanubhakta Campus, Vyas-1, Tanahun. The matches begin tomorrow. Let's support our players in red!",
        contentNp: "स्ववियु अध्यक्ष अनुप आले मगर तथा खेलकुद उपसमितिद्वारा आदिकवि भानुभक्त क्याम्पसको प्रतिनिधित्व गर्ने फुटबल टोलीका खेलाडीहरूलाई जर्सी तथा खेलकुद सामग्री हस्तान्तरण गरिएको छ। प्रतियोगिता भोलिदेखि सुरु हुनेछ।"
    },
    {
        id: "n3",
        titleEn: "Submission of 15-Point Academic Demand Sheet",
        titleNp: "क्याम्पस प्रशासन र स्थानीय तहमा १५ बुँदे मागपत्र पेस",
        date: "2026-07-06",
        category: "Academic",
        isUrgent: true,
        contentEn: "A formal delegation led by FSU President Anup Ale Magar has submitted a 15-point memorandum to Campus Chief and local political heads (including Til Bahadur Thapa). The demands focus on library digitalization, technology-focused workshops, free career guidance, and promoting a vibrant startup culture among students.",
        contentNp: "स्ववियु अध्यक्ष अनुप आले मगरको नेतृत्वमा क्याम्पस प्रमुख र स्थानीय जनप्रतिनिधिहरू (तिल बहादुर थापा लगायत) समक्ष पुस्तकालय डिजिटलाईजेसन, प्राविधिक कार्यशाला, निःशुल्क करियर परामर्श र स्टार्टअप संस्कृति प्रवर्द्धनका लागि १५ बुँदे मागपत्र पेस गरिएको छ।"
    },
    {
        id: "n4",
        titleEn: "Classroom Interaction & Student Feedback Survey",
        titleNp: "कक्षाकोठा अन्तरक्रिया र विद्यार्थी प्रतिक्रिया सर्वेक्षण",
        date: "2026-06-28",
        category: "General",
        isUrgent: false,
        contentEn: "Our members are visiting classes to gather feedback on facilities, curriculum, and exam management. FSU is committed to voicing your concerns directly to the campus board. Share your suggestions with any of our visiting members or submit online through the portal.",
        contentNp: "भौतिक पूर्वाधार, पाठ्यक्रम र परीक्षा व्यवस्थापनका विषयमा विद्यार्थी प्रतिक्रिया संकलन गर्न स्ववियु सदस्यहरू विभिन्न कक्षाकोठाहरूमा पुगिरहनुभएको छ। तपाईंका समस्या र सुझावहरू हाम्रो अनलाइन पोर्टल मार्फत पनि पेस गर्न सक्नुहुन्छ।"
    }
];

interface NoticeBoardProps {
    language: "en" | "np";
}

export default function NoticeBoard({ language }: NoticeBoardProps) {
    const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
    const [filter, setFilter] = useState<string>("all");

    const categories = ["all", "Solidarity", "Sports", "Academic", "General"];

    const filteredNotices = FSU_NOTICES.filter((n) => {
        if (filter === "all") return true;
        return n.category.toLowerCase() === filter.toLowerCase();
    });

    return (
        <section id="notices" className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <span className="bg-blue-900/10 text-blue-950 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                            <Bell className="w-3.5 h-3.5 animate-bounce" />
                            {language === "en" ? "Announcements" : "सूचना तथा गतिविधि"}
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                            {language === "en" ? "FSU Notice Board" : "स्ववियु सूचना बोर्ड"}
                        </h2>
                        <p className="mt-2 text-slate-500 max-w-xl text-sm">
                            {language === "en"
                                ? "Stay informed on active student issues, administrative submissions, campaigns, and upcoming college events organized by the FSU."
                                : "स्ववियुले सञ्चालन गरेका आन्दोलन, मागपत्र पेस, जर्सी वितरण तथा महत्वपूर्ण निर्णयहरूका सूचनाहरू प्राप्त गर्नुहोस्।"}
                        </p>
                    </div>

                    {/* Categorized Tabs */}
                    <div className="flex gap-1.5 overflow-x-auto pb-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all capitalize shrink-0 ${filter === cat
                                        ? "bg-blue-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat === "all"
                                    ? language === "en"
                                        ? "All"
                                        : "सबै"
                                    : language === "en"
                                        ? cat
                                        : cat === "Solidarity"
                                            ? "ऐक्यवद्धता"
                                            : cat === "Sports"
                                                ? "खेलकुद"
                                                : cat === "Academic"
                                                    ? "शैक्षिक"
                                                    : "सामान्य"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notices list & details split view */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* List of Notices */}
                    <div className="lg:col-span-3 space-y-4">
                        {filteredNotices.map((notice) => (
                            <div
                                key={notice.id}
                                onClick={() => setSelectedNotice(notice)}
                                className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${selectedNotice?.id === notice.id
                                        ? "bg-blue-50/30 border-blue-200 ring-1 ring-blue-100"
                                        : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
                                    }`}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold tracking-wider uppercase ${notice.isUrgent
                                                    ? "bg-red-500/10 text-red-600 animate-pulse"
                                                    : "bg-slate-100 text-slate-600"
                                                }`}
                                        >
                                            {notice.category}
                                        </span>
                                        {notice.isUrgent && (
                                            <span className="flex h-2 w-2 rounded-full bg-red-600 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {notice.date}
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
                                    {language === "en" ? notice.titleEn : notice.titleNp}
                                </h3>
                                <p className="mt-2 text-slate-500 text-xs line-clamp-2 leading-relaxed">
                                    {language === "en" ? notice.contentEn : notice.contentNp}
                                </p>

                                <div className="mt-4 flex items-center justify-between text-xs text-blue-900 font-medium">
                                    <span className="inline-flex items-center gap-1">
                                        <FileText className="w-3.5 h-3.5" />
                                        {language === "en" ? "Read Details" : "विस्तृत विवरण"}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedNotice?.id === notice.id ? "translate-x-1" : ""}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Notice Detail Frame */}
                    <div className="lg:col-span-2">
                        {selectedNotice ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gradient-to-b from-blue-950 to-slate-950 text-white p-6 rounded-2xl border border-blue-900/40 sticky top-6 shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                                    <span className="bg-white/10 text-blue-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                        {selectedNotice.category} Notice
                                    </span>
                                    <div className="text-xs text-slate-300 font-mono flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {selectedNotice.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                                    {selectedNotice.titleEn}
                                </h3>
                                <h4 className="text-base text-blue-300 font-medium font-devanagari mt-2 pb-4 border-b border-white/5">
                                    {selectedNotice.titleNp}
                                </h4>

                                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-200">
                                    <p className="font-sans">{selectedNotice.contentEn}</p>
                                    <p className="font-devanagari text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                                        {selectedNotice.contentNp}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                    <span>Issued By: FSU Secretariate</span>
                                    <button
                                        onClick={() => {
                                            const text = `${selectedNotice.titleEn}\n\n${selectedNotice.contentEn}`;
                                            navigator.clipboard.writeText(text);
                                            alert("Copied to clipboard!");
                                        }}
                                        className="bg-white/10 text-white px-3 py-1 rounded-lg hover:bg-white/20 transition-all font-mono text-[10px]"
                                    >
                                        Copy Notice
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center border border-dashed border-slate-200 bg-slate-50 rounded-2xl p-6 text-center text-slate-400">
                                <FileText className="w-12 h-12 text-slate-300 mb-3 animate-pulse" />
                                <p className="text-sm font-medium">
                                    {language === "en" ? "Select a notice to view details" : "विवरण हेर्नको लागि सूचना चयन गर्नुहोस्"}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    {language === "en"
                                        ? "Click on any item on the notice list to see full English and Nepali descriptions."
                                        : "नेपाली र अंग्रेजी विवरणहरू हेर्न सूचीमा क्लिक गर्नुहोस्।"}
                                </p>
                                {filteredNotices.length > 0 && (
                                    <button
                                        onClick={() => setSelectedNotice(filteredNotices[0])}
                                        className="mt-4 text-xs text-blue-900 font-medium hover:underline inline-flex items-center gap-1"
                                    >
                                        {language === "en" ? "Open first notice" : "पहिलो सूचना खोल्नुहोस्"}
                                        <ArrowUpRight className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
