import { useState } from "react";
import { Search, Phone, Shield, Users, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

// Inline type definition to make this component completely self-contained and independent
export interface CommitteeMember {
    id: string;
    nameEn: string;
    nameNp: string;
    roleEn: string;
    roleNp: string;
    phone: string;
    isExecutive: boolean;
    order: number;
    photoUrl?: string;
}

// You can manually add image/photo paths here in the 'photoUrl' attribute.
// Example: photoUrl: "/images/anup.jpg" or an online URL.
export const FSU_COMMITTEE: CommitteeMember[] = [
    {
        id: "1",
        nameEn: "Anup Ale Magar",
        nameNp: "अनुप आले मगर",
        roleEn: "President",
        roleNp: "अध्यक्ष",
        phone: "9804141256",
        isExecutive: true,
        order: 1,
        photoUrl: "/anup1.png"
    },
    {
        id: "2",
        nameEn: "Suman Khadka",
        nameNp: "सुमन खड्का",
        roleEn: "Vice President",
        roleNp: "उपाध्यक्ष",
        phone: "9826101579",
        isExecutive: true,
        order: 2,
        photoUrl: "/suman2.png"
    },
    {
        id: "3",
        nameEn: "Sagar Pandey",
        nameNp: "सागर पाण्डे",
        roleEn: "Secretary",
        roleNp: "सचिव",
        phone: "9804153425",
        isExecutive: true,
        order: 3,
        photoUrl: "/sagar.png"
    },
    {
        id: "4",
        nameEn: "Ankit Tiwari",
        nameNp: "अंकित तिवारी",
        roleEn: "Joint Secretary",
        roleNp: "सह-सचिव",
        phone: "9827133759",
        isExecutive: true,
        order: 4,
        photoUrl: "/ankit.png"
    },
    {
        id: "5",
        nameEn: "Roshan Ojha",
        nameNp: "रोशन ओझा",
        roleEn: "Treasurer",
        roleNp: "कोषाध्यक्ष",
        phone: "9806722586",
        isExecutive: true,
        order: 5,
        photoUrl: "/roshan.png"
    },
    {
        id: "6",
        nameEn: "Asim Bhandari",
        nameNp: "असीम भण्डारी",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9766602575",
        isExecutive: false,
        order: 6,
        photoUrl: "/asim.png"
    },
    {
        id: "7",
        nameEn: "Shishir Sunar",
        nameNp: "शिशिर सुनार",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9824112635",
        isExecutive: false,
        order: 7,
        photoUrl: "/sisir.png"
    },
    {
        id: "8",
        nameEn: "Iman Malla Thakuri",
        nameNp: "इमान मल्ल ठकुरी",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9806559252",
        isExecutive: false,
        order: 8,
        photoUrl: "/iman.png"
    },
    {
        id: "9",
        nameEn: "Roshni Kunwar",
        nameNp: "रोशनी कुँवर",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9828185669",
        isExecutive: false,
        order: 9,
        photoUrl: "/roshani.png"
    },
    {
        id: "10",
        nameEn: "Pramish Neupane",
        nameNp: "प्रमिश न्यौपाने",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9767279339",
        isExecutive: false,
        order: 10,
        photoUrl: "/pramish.png"
    },
    {
        id: "11",
        nameEn: "Anisha Pariyar",
        nameNp: "अनिशा परियार",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9817140789",
        isExecutive: false,
        order: 11,
        photoUrl: "/anisha.png"
    },
    {
        id: "12",
        nameEn: "Sadiksha Adhikari",
        nameNp: "सदिक्षा अधिकारी",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9815105797",
        isExecutive: false,
        order: 12,
        photoUrl: "/sadix.png"
    },
    {
        id: "13",
        nameEn: "Pramila Shrestha",
        nameNp: "प्रमिला श्रेष्ठ",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9825496647",
        isExecutive: false,
        order: 13,
        photoUrl: "/prami.png"
    },
    {
        id: "14",
        nameEn: "Amrut Baniya",
        nameNp: "अमृत बानिया",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9745456596",
        isExecutive: false,
        order: 14,
        photoUrl: "/amrit.png"
    },
    {
        id: "15",
        nameEn: "Krishna Rana",
        nameNp: "कृष्ण राना",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9707528635",
        isExecutive: false,
        order: 15,
        photoUrl: "/krish.png"
    },
    {
        id: "16",
        nameEn: "Sarita Sarki",
        nameNp: "सरिता सार्की",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9826651749",
        isExecutive: false,
        order: 16,
        photoUrl: "/sarita.png"
    },
    {
        id: "17",
        nameEn: "Sugam Shrestha",
        nameNp: "सुगम श्रेष्ठ",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9826164208",
        isExecutive: false,
        order: 17,
        photoUrl: "/sugam.png"
    },
    {
        id: "18",
        nameEn: "Edina Ruchal",
        nameNp: "एडिना रुचाल",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9804192736",
        isExecutive: false,
        order: 18,
        photoUrl: "/adina.png"
    },
    {
        id: "19",
        nameEn: "Omkala Shrestha",
        nameNp: "ओमकला श्रेष्ठ",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9815182475",
        isExecutive: false,
        order: 19,
        photoUrl: "/om.png"
    },
    {
        id: "20",
        nameEn: "Bibash Ranabhat",
        nameNp: "विवश रानाभाट",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9821517591",
        isExecutive: false,
        order: 20,
        photoUrl: "biwash.png"
    },
    {
        id: "21",
        nameEn: "Bishna Ale",
        nameNp: "विष्णा आले",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9828367332",
        isExecutive: false,
        order: 21,
        photoUrl: "/bis.png"
    },
    {
        id: "22",
        nameEn: "Bipin Adhikari",
        nameNp: "विपिन अधिकारी",
        roleEn: "Member",
        roleNp: "सदस्य",
        phone: "9762861361",
        isExecutive: false,
        order: 22,
        photoUrl: "/bipin.png"
    }
];

interface CommitteeSectionProps {
    language: "en" | "np";
}

interface MemberCardProps {
    member: CommitteeMember;
    language: "en" | "np";
    getInitials: (name: string) => string;
    key?: string;
}

function CommitteeMemberCard({ member, language, getInitials }: MemberCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-5 rounded-2xl border transition-all relative overflow-hidden group ${member.isExecutive
                ? "bg-gradient-to-br from-blue-50/40 via-white to-white border-blue-100 shadow-md hover:shadow-lg"
                : "bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow"
                }`}
        >
            {member.isExecutive && (
                <div className="absolute top-0 right-0 bg-blue-900 text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
                    FSU Board
                </div>
            )}

            <div className="flex items-center gap-4">
                {/* Avatar Frame (The square box) supporting custom manual photoUrl / images */}
                <div
                    className={`w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-slate-100/80 ${member.photoUrl && !imageError
                        ? "bg-slate-50"
                        : member.isExecutive
                            ? "bg-blue-900 text-white shadow font-bold text-lg select-none"
                            : "bg-red-500/10 text-red-600 font-bold text-lg select-none"
                        }`}
                >
                    {member.photoUrl && !imageError ? (
                        <img
                            src={member.photoUrl}
                            alt={language === "en" ? member.nameEn : member.nameNp}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover select-none"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <span>
                            {getInitials(member.nameEn)}
                        </span>
                    )}
                </div>

                {/* Identification info */}
                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-900 truncate">
                        {language === "en" ? member.nameEn : member.nameNp}
                    </h3>
                    <p className={`text-xs font-medium ${member.isExecutive ? "text-blue-950 font-bold" : "text-slate-500"}`}>
                        {language === "en" ? member.roleEn : member.roleNp}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a href={`tel:${member.phone}`} className="hover:text-blue-900 hover:underline inline-flex items-center gap-0.5">
                            {member.phone}
                            <ArrowUpRight className="w-2.5 h-2.5 text-slate-300 group-hover:text-blue-900 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Call Action Banner on Hover */}
            <div className="mt-4 pt-3 border-t border-slate-50 flex justify-end">
                <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-900 font-medium hover:underline group/btn"
                >
                    {language === "en" ? "Call Directly" : "फोन सम्पर्क"}
                    <Phone className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
}

export default function CommitteeSection({ language }: CommitteeSectionProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"all" | "executive" | "general">("all");

    const filteredMembers = FSU_COMMITTEE.filter((member) => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            member.nameEn.toLowerCase().includes(query) ||
            member.nameNp.includes(query) ||
            member.roleEn.toLowerCase().includes(query) ||
            member.roleNp.includes(query) ||
            member.phone.includes(query);

        const matchesTab =
            activeTab === "all" ||
            (activeTab === "executive" && member.isExecutive) ||
            (activeTab === "general" && !member.isExecutive);

        return matchesSearch && matchesTab;
    });

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .substring(0, 2);
    };

    return (
        <section id="committee" className="py-16 bg-white rounded-3xl border border-blue-50/10 shadow-xl overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="bg-red-500/10 text-red-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 mb-3">
                        <Shield className="w-3.5 h-3.5" />
                        {language === "en" ? "FSU Members" : "स्ववियु पदाधिकारीहरू"}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-devanagari tracking-tight sm:text-4xl">
                        {language === "en" ? "Student Union Committee" : "कार्यसमिति पदाधिकारी तथा सदस्यहरू"}
                    </h2>
                    <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
                        {language === "en"
                            ? "The democratic voice of Aadikavi Bhanubhakta Campus students. Meet our elected executive board and general committee members representing the batch of 2080-2082."
                            : "आदिकवि भानुभक्त क्याम्पसका विद्यार्थीहरूको लोकतान्त्रिक आवाज। हाम्रो निर्वाचित स्ववियु टिमलाई चिन्नुहोस्।"}
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="relative w-full md:w-96">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 text-slate-400 w-5" />
                        </span>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-800 placeholder:text-slate-400"
                            placeholder={language === "en" ? "Search by name, role or phone..." : "नाम, पद वा फोनबाट खोज्नुहोस्..."}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${activeTab === "all"
                                ? "bg-blue-900 text-white shadow-sm"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            {language === "en" ? "All Committee" : "सबै समिति"} ({FSU_COMMITTEE.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("executive")}
                            className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${activeTab === "executive"
                                ? "bg-blue-900 text-white shadow-sm"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            <span className="inline-flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                {language === "en" ? "Executives" : "पदाधिकारी"} (5)
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("general")}
                            className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${activeTab === "general"
                                ? "bg-blue-900 text-white shadow-sm"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            <span className="inline-flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {language === "en" ? "General Members" : "सदस्यहरू"} (17)
                            </span>
                        </button>
                    </div>
                </div>

                {/* Committee Directory Grid */}
                {filteredMembers.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMembers.map((member) => (
                            <CommitteeMemberCard
                                key={member.id}
                                member={member}
                                language={language}
                                getInitials={getInitials}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 text-sm">
                            {language === "en" ? "No committee members found matching your search." : "तपाईको खोज अनुरूप कुनै सदस्य भेटिएन।"}
                        </p>
                    </div>
                )}

                {/* Small Note */}
                <div className="mt-8 text-center text-xs text-slate-400 font-mono">
                    {language === "en"
                        ? "Free Students' Union, Aadikavi Bhanubhakta Campus. Registered office: Vyas-1, Vigyanchaur, Tanahun."
                        : "स्वतन्त्र विद्यार्थी युनियन, आदिकवि भानुभक्त क्याम्पस। व्याास-१, विज्ञानचौर, तनहुँ।"}
                </div>
            </div>
        </section>
    );
}
