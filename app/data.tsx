/**
 * Next.js self-contained Data & Type Definitions
 * File: data-next.tsx (or data.ts / data.tsx in your Next.js project)
 * 
 * This file is completely independent and contains all types and structured data
 * for Committee Members, Notices, Manifesto Items, and Gallery Images.
 * You can copy/paste this file directly into your Next.js project (App Router or Pages Router).
 */

// --- 1. TYPE DEFINITIONS (Self-contained, no external dependencies) ---

export interface CommitteeMember {
    id: string;
    nameEn: string;
    nameNp: string;
    roleEn: string;
    roleNp: string;
    phone: string;
    isExecutive: boolean;
    order: number;
    photoUrl?: string; // Add your image paths here (e.g., "/images/member.jpg" or "https://...")
}

export interface Notice {
    id: string;
    titleEn: string;
    titleNp: string;
    date: string;
    category: string;
    isUrgent: boolean;
    contentEn: string;
    contentNp: string;
}

export interface ManifestoItem {
    id: string;
    titleEn: string;
    titleNp: string;
    descEn: string;
    descNp: string;
    iconName: string;
}

export interface GalleryImage {
    id: string;
    titleEn: string;
    titleNp: string;
    category: string;
    descriptionEn: string;
    descriptionNp: string;
    placeholderBg: string;
    symbolicEmoji: string;
    imageUrl: string;
}

// --- 2. DATA LISTS WITH CUSTOM IMAGE SUPPORT ---

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
        photoUrl: "" // Set manually: e.g. "/images/committee/anup.jpg"
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
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
        photoUrl: "" // Set manually
    }
];

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
        contentNp: "स्ववियु अध्यक्ष अनुप आले मगरको नेतृत्वमा क्याम्पस प्रमुख र स्थानीय जनप्रतिनिधिहरू (तिल बहादुर थापा लगायत) समक्ष पुस्तकालय डिजिटलाईजेसन, प्राविधिक कार्यशाला, निःशुल्क करियर परामर्श र स्टार्टअप संस्कृति प्रवर्द्धनका लागि १५ बुँदे मागपत्र पेस गरिएको छ। "
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

export const CAMPAIGN_MANIFESTO: ManifestoItem[] = [
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

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: "g1",
        titleEn: "In Solidarity with INISHA BK",
        titleNp: "इनिसा विकको न्यायको लागि ऐक्यवद्धता र्याली",
        category: "Solidarity",
        descriptionEn: "Justice for Inisha BK Solidarity Rally - unified student march demanding safety and student protection at Aadikavi Campus.",
        descriptionNp: "इनिसा विकको तत्काल न्यायका लागि क्याम्पस गेट बाहिर आयोजित वृहत दीप प्रज्वलन र शान्तिपूर्ण ऐक्यवद्धता प्रदर्शन।",
        placeholderBg: "from-red-900 to-slate-950",
        symbolicEmoji: "🕯️",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAksN2E8SO-SCYxbxsL3-1fFyBxZf7RIxGpt7Lc3eYL0ylMmXMT4SkOkp1Z9D2CiLc2DZAWrvvdd8v9kEGk2cNAsBbSSe1w1b881WW8qiSfrg4Jv_XCXT00jEfVaeqA7bLGconvve6QlS0vaqJDG_bKp8YZ8yjh2UmcBdOPo8-2IRydX1VROUZrfwd_2LaNMPFYa1p2L8NgrJyg6_MjvMiduUpvQ80_bE9za6ZNJ7jqmP5npGQRtOWuCbL9o3BvevLe3xTpaNMAHBE"
    },
    {
        id: "g2",
        titleEn: "Awareness Campaign",
        titleNp: "क्याम्पस सचेतना कार्यक्रम",
        category: "Interaction",
        descriptionEn: "Standing in solidarity during campus awareness and leadership workshops, encouraging participation.",
        descriptionNp: "विद्यार्थी सचेतना तथा व्यावहारिक नेतृत्व विकास कार्यक्रमको एक सुखद क्षण।",
        placeholderBg: "from-blue-900 to-indigo-950",
        symbolicEmoji: "🤝",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlvvb0LCIVCAukEfkgZgxQSSxw4IIfqCdrVHKGfJqVPtmzkxCxH3mzQLezKl2J8ylK7Gc9DTMNWJWTUUVr84GlJCfTbzDSR3b-WSG075tWrqMs-Yz_lj0F9_IU4nFoLO72PDjCAApI9OLEUOZlU3f4x8OfJuzymYmFG-SntWOshd2tUqEw_Eou7Eas382Bi7nVMnYP-EK89lAmiuk437CF8hkzS2SBaJTa2SCv0Le5rXbx6i_Q3UweH5AxomaPmOsY6ckKv4LaSVw"
    },
    {
        id: "g3",
        titleEn: "Official Jersey Launch",
        titleNp: "आधिकारिक फुटबल जर्सी अनावरण",
        category: "Sports",
        descriptionEn: "Supporting Sports: President Anup Ale Magar presenting the official team jerseys to our campus players.",
        descriptionNp: "खेलकुद प्रवर्द्धन: स्ववियु अध्यक्ष अनुप आले मगरद्वारा क्याम्पस फुटबल टोलीलाई नयाँ जर्सी हस्तान्तरण।",
        placeholderBg: "from-rose-700 to-slate-900",
        symbolicEmoji: "👕",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6q3cSxdk7d2zHNtiD3s11_hlQ9Wrkl1JWEYtJn9O0DgR1XPhVpkYoy3OgBm9nZ4mq3pRPxjxcQR6bYeCqvwjh7EeLJFymWnv-qXNaIcm-8Kh9z3RpYMiQJdirDn4lBPak341uCuNsF9GfudjE8E-K_9naBdJMqwzq5kmZZLzn59ky2Rz-Fw-yxI1VAXgD3gaCtU9jWn7oUQ04sdCNBCTyRhBbhRTHXw8T68GR5IMdbS-YwHhZCfagMbhShdDGT9fYqTQKCd8fbmM"
    },
    {
        id: "g4",
        titleEn: "Promoting Student Athletics",
        titleNp: "खेलकुद विकास तथा सामग्री",
        category: "Sports",
        descriptionEn: "Promoting Student Athletics: Union members with the new campus sports kits preparing for the league.",
        descriptionNp: "खेलाडीहरू र स्ववियु पदाधिकारीहरू नयाँ फुटबल जर्सी तथा खेलकुद सामग्रीका साथ एकीकृत।",
        placeholderBg: "from-blue-800 to-red-800",
        symbolicEmoji: "⚽",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHRGr0byt0RazILvtKq_VaYaNGnQ3iTCsCRjd4O8NWrZwISIaiPJVrMwMvZEogNg_uFcHjswGZeDt25YK66ekIiTomvpclbjhfnDKzBQ0B2l3g85ONUFJW75GFOtbgxPXp4h7w1CeBucLOMqCLX0y157cFluw-_T2M2NpS892bLtz3_cCmPQGBZBJgfv2fU6PW-2qN5MdCs4pDAO-q6L8MjhWuF-rBc2GUoJVR0Cz1r5MW-FsSgs0L3oXGTPD8O8chuHHeuqRrHek"
    },
    {
        id: "g5",
        titleEn: "Academic Guidance",
        titleNp: "शैक्षिक सहजीकरण र सहयोग",
        category: "Academic",
        descriptionEn: "Academic Support: Facilitating student resources and college administrative assistance.",
        descriptionNp: "विद्यार्थीहरूलाई शैक्षिक सामग्री वितरण र फारम दर्ता प्रक्रियामा सहजीकरण।",
        placeholderBg: "from-teal-800 to-slate-900",
        symbolicEmoji: "📚",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfCXM1NoWc-dm6Xj3L--lgEIqK2LR_smXxIkQmDNNgZGQiIYwzgzv9lSPSkEJfheICrzHqHEX0cZituVm7gQ4rlSKJdYSh9ADpY5XX3Ua0wbhFGHCcdkKQMvBGuwJUU2iY1yV0ygkshtlwkK_RRgz1nMuuGiOPUYUig1VZ7mhdPZ2K3TMyV7ORUGNj1MWRwU_h6ObSd8Xft5DDlgLJKW6sR2US0PhQ9FTSuy6FCWSgvXKbNOvStcQfe2-rkZhwQADLuz2qD7TP_kE"
    },
    {
        id: "g6",
        titleEn: "Advocating for Student Rights",
        titleNp: "प्रशासन समक्ष ज्ञापन पत्र पेस",
        category: "Campaign",
        descriptionEn: "Advocating for Student Rights: Submitting official memorandums and 15-point charter to the campus administration.",
        descriptionNp: "विद्यार्थी हकहित र शैक्षिक सुधारका विषय समेटिएको ज्ञापन पत्र क्याम्पस प्रशासनलाई बुझाउँदै स्ववियु प्रतिनिधि।",
        placeholderBg: "from-slate-800 to-sky-950",
        symbolicEmoji: "📄",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMvuMH8oI78mwRLTJ4q6AHQJhFnx5NgWddp7wHTp_HOEQi69a7yr2WG8OFL297bOMJi-SeyfUEPOBIGVA-Ohb2UT1mo_nNpTdZDY8RL1K-s4msizCzU8WUJ1nSoibRS4WYNIw9f9H8KvkWof79_ELebM1FjogbXrXmriKbMktyIoorVRPtzJSR1dE0gzMdY7CxDON3HnZ7S4fxg7wbd0qlYccXwDzj6mzGLrilyhnBlByh3h3pm6ydSfpKoXKWOLfKAPZk5j_XFqY"
    },
    {
        id: "g7",
        titleEn: "Union Proposals Submission",
        titleNp: "विद्यार्थी प्रस्ताव दर्ता",
        category: "Campaign",
        descriptionEn: "Strengthening Communication: Official handover of student union proposals for library digitalization.",
        descriptionNp: "सुदृढ संचार तथा डिजिटल पुस्तकालय सम्बन्धी प्रस्तावहरू आधिकारिक रूपमा दर्ता गरिँदै।",
        placeholderBg: "from-emerald-800 to-slate-900",
        symbolicEmoji: "🤝",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuZpmjZPrc5edvicae321om5mpkYm8kNVcyakJBiN0F-TsuwJnPj6tU62ExHqE5J_R4E4XG3AC5Nli5yE1sRGil6X-DmoR_9NhQyeSUraiuiXDAI6d6pbew0tRkfAtgolYmolC4DbLju-cUerbM9C7UJ8hGPePaR3tNBWnqugwQNp-8MbJ5iZx6PtyO3SzM4GRvWV-rRXLHmdpLwa6Sil9Rqj-5UPm8g4-ILRES8QAD2qcgFXGioPKHGj7IC1t4WZefVRG3uk3B7U"
    },
    {
        id: "g8",
        titleEn: "Annual Student Gathering",
        titleNp: "स्ववियु वार्षिक भेला तथा स्वागत",
        category: "Solidarity",
        descriptionEn: "ANNFSU Annual Gathering: Celebrating student unity, academic excellence, and progressive leadership.",
        descriptionNp: "अनेरास्ववियु वार्षिक भेलामा विद्यार्थी एकता, सहभागिता र लोकतान्त्रिक प्रतिबद्धता प्रदर्शन।",
        placeholderBg: "from-amber-800 to-indigo-950",
        symbolicEmoji: "🎉",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWW5sJJ_cYRhwOjpLtMuP3mNQ7ynEqagVJnI1OeHoVEoHbdjG50CLbyajjeAq0hfeh41ob9CesPNaUnmhXDCGYcrdUb1SvnGaEBG5QOBmHuTwoRZlqHSk4Kc2dMNr4BAwCwi0OrUWADdehuwZW9Hkm12Fsb_Ohi8Nusuw9DRIy4u2pMbvgrcTxSgbyoGpbvARoJWsbHBBUu9DnW6ddKkkSorZV9yvU3Uy9aBz_crXZGAdJvqgTet816AVUDBApeTdG7HF7dk4A-5c"
    },
    {
        id: "g9",
        titleEn: "Inclusive Leadership Desk",
        titleNp: "स्ववियु अध्यक्ष र सरोकारवाला छलफल",
        category: "Interaction",
        descriptionEn: "Inclusive Leadership: Engaging directly with students, faculty, and delegates at the Union office.",
        descriptionNp: "समावेशी नेतृत्व: स्ववियु कार्यालयमा विद्यार्थी र प्राध्यापकहरूसँग निरन्तर संवाद तथा सर-सल्लाह।",
        placeholderBg: "from-blue-900 to-neutral-900",
        symbolicEmoji: "💼",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxw4OEaf0ywzL5WCRSx8i18jc78l1vbhsecgg6f6yAg-XFrP0wY5M7Ax5eszap7PHbsHD2B4g68FpixEgtrYrlqV2dH0lI6ZESBJZ11CvDDsHSxMA2e5uhzc3pY2sJr6kNknQaD9-aaWdbXGsAkI44JTQAimvpqK6xFvsODoNpTHRZZuQywub5txQea87VcbpjILvk2LQ6ZbfPu8kfLnkpiCgYLpX1tPr_cmxAgLSoRa157bPTfn92kw3ecMZGf0yZo4WuxmD54qw"
    },
    {
        id: "g10",
        titleEn: "Student Empowerment Seminars",
        titleNp: "विद्यार्थी सशक्तीकरण र अन्तर्क्रिया",
        category: "Interaction",
        descriptionEn: "Empowering Students: Interactive academic seminars and leadership bootcamps to build soft skills.",
        descriptionNp: "नेतृत्व विकास, सकारात्मक सोच र अन्तर्क्रिया कार्यक्रममा सहभागी विद्यार्थीहरूको तस्बिर।",
        placeholderBg: "from-sky-800 to-slate-900",
        symbolicEmoji: "🎓",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Q01x6-mzL-244XuX2Pdws4h7QFWJOtnIVGOyuNWGlXZ192wbPHIKuzm2g8VdCfZqknUbtEmJQpnDd9AWxZygR19diQ7PrXZ_wyBRtyktTQ1_nwfnmjtzt7Il06vP7kt9R4tehoudTAYUinnBm71G0fmnDbxy55jwGs09Bt5mEKNJEbHUYupl-lx8dWqvX64PcZuq6UPe9bc5hCracqpG2xgSCHe3-_WWjFXJ0pFF2uEdiKL_H-yMy22v6Wj62xY0qJ3CSKXRpuU"
    },
    {
        id: "g11",
        titleEn: "Skills Development Session",
        titleNp: "सीप विकास र प्रस्तुतीकरण तालिम",
        category: "Interaction",
        descriptionEn: "Skills Development: Student-led presentation modules and academic workshops inside Aadikavi Campus.",
        descriptionNp: "विद्यार्थीहरूद्वारा सञ्चालित सीप विकास कार्यशाला र प्रस्तुतीकरणको सुन्दर दृश्य।",
        placeholderBg: "from-blue-950 to-slate-900",
        symbolicEmoji: "💡",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5tTzzmeCTjP3GuQKGYkCEHPhldE81__Ks4qi-kCmcb05LhRrwxvkCko0JvbfydIyE44i2vdQwNEjET4zc56m6aBQjT_YcCyiDBMGyN1vlzjj0yFdlAk8_YMyr2KyGmk1hPbK2S_0LOFTdxZtyoOOlIiSVk1H6k2k3ZfT37EgV8Gm6ozxIuUwV9XCAbyn7N27J4uKjKYcFOd8I9u55brqMd-QGOyTuTfJ7fXlt6P8qoWNdUrB44tSVFCqvlb8FtzGn4uOH46u9g1s"
    },
    {
        id: "g12",
        titleEn: "Extracurricular Athletics",
        titleNp: "अतिरिक्त खेलकुद गतिविधि",
        category: "Sports",
        descriptionEn: "Fostering Teamwork: Supporting dynamic campus sports leagues and extracurricular participation.",
        descriptionNp: "क्याम्पसमा अतिरिक्त क्रियाकलाप र खेलकुद सहभागिताको विकासका लागि खेल आयोजना।",
        placeholderBg: "from-red-700 to-indigo-950",
        symbolicEmoji: "🏆",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoSMvngG7vbAZMDyNwp62Ks75Tb4GLsnvSWMiNZWksPRb_K-pRriQKrybupiIx7vvRzWjB0SQGEq2Dqla4x2HeWQdoBqIQafpN_8z4d7aMMVK6fPtofxe12xl-q4gtxzX3Jru8PHAn60k_iJk8JDFs0e9YCnwcgHJkMnr6KPEzZe1Pp5DImjdUWMM3Rt55Vw5j1uFl_-3iKUrUmu5vPbZrLKLjuHmuUdfYBWe3IKJpUVrhp6_D-tWqaz_CW7s2KcpbFeqHWN04OHs"
    },
    {
        id: "g13",
        titleEn: "Supportive Learning Environment",
        titleNp: "प्रविधिमैत्री र सहज शैक्षिक वातावरण",
        category: "Academic",
        descriptionEn: "Quality Education: Advocating for updated computer labs and better learning facilities for students.",
        descriptionNp: "शैक्षिक गुणस्तर सुधार, भौतिक पूर्वाधार व्यवस्थापन र पठनपाठन सुनिश्चित गर्ने प्रतिबद्धता।",
        placeholderBg: "from-sky-950 to-slate-900",
        symbolicEmoji: "🏫",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-fO2pLh-O9BTa0Ip6ATV8SIKCH3lmzaS5u0aeF9DnU2M_RmLSLtIosCk9pp2OBGjNS9Wjucsy-MskTjNwhlPOrHPD89hjLTwEIEnCYgBtEz997ktIQ5FDq6cR4WYIUYtyuD0K8ALivpPaKIUyKME24f4MfRhN9qY6sSTNxTbWmp4ENc6acS-X85Iwe9R2xtBzLpOKn0hUvpg6rsqVPZ01a340kAfxMmh7tw-hFDA9P7gzFYVLZeeBinDbPAOKILSfVPdpssnHWZg"
    }
];
