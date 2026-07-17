'use client';
import { useState, useEffect } from "react";
import { Shield, Sparkles, MessageSquare, Bell, Images, BookOpen, Globe, Phone, MapPin, ChevronRight, Menu, X, ArrowRight, Users, GraduationCap, PartyPopper, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CampaignManifesto from "@/components/CampaignManifesto";
import NoticeBoard from "@/components/NoticeBoard";
import CommitteeSection from "@/components/CommitteeSection";
import PhotoGallery from "@/components/PhotoGallery";
import GrievanceForm from "@/components/GrievanceForm";
import FSUAssistant from "@/components/FSUAssistant";
import AboutSection from "@/components/AboutSection";
import PresidentMessage from "@/components/PresidentMessage";
import HistorySection from "@/components/HistorySection";
import JourneySection from "@/components/JourneySection";

export default function App() {
  const [language, setLanguage] = useState<"en" | "np">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy Logic
      const sections = [
        { id: "home", href: "#" },
        { id: "about", href: "#about" },
        { id: "vision", href: "#vision" },
        { id: "president", href: "#president" },
        { id: "manifesto", href: "#manifesto" },
        { id: "notices", href: "#notices" },
        { id: "history", href: "#history" },
        { id: "committee", href: "#committee" },
        { id: "gallery", href: "#gallery" },
        { id: "movements", href: "#movements" },
        { id: "grievances", href: "#grievances" }
      ];

      if (window.scrollY < 120) {
        setActiveLink("#");
        return;
      }

      let currentSection = "#";

      // Use getBoundingClientRect for absolute viewport coordinates accuracy
      for (const section of sections) {
        if (section.id === "home") continue;
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the top of the element is past the header offset, 
          // and the bottom of the element is still below the header offset
          if (rect.top <= 140 && rect.bottom > 140) {
            currentSection = section.href;
            break;
          }
        }
      }

      // Special fallback: bottom of the page highlights Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        currentSection = "#grievances";
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "np" : "en"));
  };

  const navLinks = [
    { href: "#", labelEn: "Home", labelNp: "गृहपृष्ठ" },
    { href: "#about", labelEn: "About", labelNp: "हाम्रो बारेमा" },
    { href: "#vision", labelEn: "Vision", labelNp: "दृष्टि" },
    { href: "#president", labelEn: "Message", labelNp: "सन्देश" },
    { href: "#notices", labelEn: "Notices", labelNp: "सूचना" },
    { href: "#manifesto", labelEn: "Manifesto", labelNp: "घोषणापत्र" },
    { href: "#history", labelEn: "History", labelNp: "इतिहास" },
    { href: "#committee", labelEn: "Committee", labelNp: "कार्यसमिति" },
    { href: "#gallery", labelEn: "Gallery", labelNp: "ग्यालेरी" },
    { href: "#movements", labelEn: "Journey", labelNp: "यात्रा" },
    { href: "#grievances", labelEn: "Contact", labelNp: "सम्पर्क" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans selection:bg-blue-900 selection:text-white antialiased">
      {/* Fixed White Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
          {/* Logo & Brand matching screenshot */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VyJwjk3U8Bmc9yTWYqUPrSDvWW3P-2s9TJKPxsRHkalC1ArG2tvmf7H5rIFRAdg-CFYudQYucNgzVVGxJkEAX7sHVZL3AA-f-pjeFXvxATKHZscjXuanNdBg63VU9RsNK-exGjH2L2lWjxkmE9ehLvin4HlaHU3srNjkMp_s8velzwMBLPfOJvvvaJEiJ1-WnvIWOgJ5FNFq5fQa3wiyWLNNu4tIlPJOXyTBdbt4fjCBJRgl6JTH22Vc0qB2YYNWGukAg6G4Ehc"
              alt="ANNFSU Logo"
              className="w-9 h-9 object-contain rounded-full border border-slate-100 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base font-black text-[#052855] tracking-wider leading-none uppercase">
                FSU
              </span>
              <span className="text-[9px] font-bold text-red-600 tracking-tight leading-normal font-devanagari mt-0.5">
                आदिकवि भानुभक्त क्याम्पस
              </span>
            </div>
          </div>

          {/* Desktop Navigation links matching screenshot with responsive text and spacing */}
          <nav className="hidden lg:flex items-center gap-x-2.5 xl:gap-x-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`text-[10px] xl:text-[11.5px] font-bold transition-all relative py-1.5 px-0.5 ${isActive
                    ? "text-red-600 border-b-2 border-red-600 font-extrabold"
                    : "text-slate-600 hover:text-[#052855]"
                    }`}
                >
                  {language === "en" ? link.labelEn : link.labelNp}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons matching screenshot */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Language Switch Globe */}
            <button
              onClick={toggleLanguage}
              className="p-1.5 text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-4.5 h-4.5" />
            </button>

            {/* Join Us Pill Button */}
            <a
              href="#grievances"
              className="bg-[#052855] hover:bg-blue-900 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all shadow-md uppercase"
            >
              {language === "en" ? "Join Us" : "हामीसँग जोडिनुहोस्"}
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="text-slate-600 p-2 rounded-xl text-xs font-medium cursor-pointer hover:bg-slate-50"
              title="Change Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-xl transition-colors cursor-pointer hover:bg-slate-50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[68px] bg-white border-b border-slate-200/80 z-30 p-6 flex flex-col gap-4 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveLink(link.href);
                  }}
                  className="text-sm font-semibold text-slate-800 hover:text-blue-900 py-1 transition-colors"
                >
                  {language === "en" ? link.labelEn : link.labelNp}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#grievances"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#052855] hover:bg-blue-900 text-white py-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <span>{language === "en" ? "Join Us" : "हामीसँग जोडिनुहोस्"}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Banner / Hero Section with exact design */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden text-white mt-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWW5sJJ_cYRhwOjpLtMuP3mNQ7ynEqagVJnI1OeHoVEoHbdjG50CLbyajjeAq0hfeh41ob9CesPNaUnmhXDCGYcrdUb1SvnGaEBG5QOBmHuTwoRZlqHSk4Kc2dMNr4BAwCwi0OrUWADdehuwZW9Hkm12Fsb_Ohi8Nusuw9DRIy4u2pMbvgrcTxSgbyoGpbvARoJWsbHBBUu9DnW6ddKkkSorZV9yvU3Uy9aBz_crXZGAdJvqgTet816AVUDBApeTdG7HF7dk4A-5c"
            alt="ANNFSU Students Gathering"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for high contrast, colorized blue-tint overlay matching photo */}
          <div className="absolute inset-0 bg-[#051c36]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-6">
            {/* Red Pill Badge */}
            <div>
              <span className="bg-[#b91c1c] text-white px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase inline-block shadow-md">
                OFFICIAL STUDENTS' UNION
              </span>
            </div>

            {/* Welcome Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-sans">
              Welcome to Free Students' Union, Aadikavi Bhanubhakta Campus |{" "}
              <span className="font-devanagari block mt-2 text-white font-semibold text-2xl sm:text-3xl lg:text-4xl leading-normal">
                आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियन (स्ववियु) मा स्वागत छ।
              </span>
            </h2>

            {/* Description Blocks */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                Join the vanguard of student leadership at Aadikavi Bhanubhakta Campus. We represent your voice, foster academic excellence, and build the future leaders of Nepal. Empowerment, Transparency, and Progress are our core pillars.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-devanagari font-light">
                आदिकवि भानुभक्त क्याम्पसको स्वतन्त्र विद्यार्थी युनियनमा स्वागत छ। हामी विद्यार्थीहरूको आवाजलाई प्रतिनिधित्व गर्छौं, शैक्षिक उत्कृष्टता प्रवर्द्धन गर्छौं र नेपालका भविष्यका नेताहरू निर्माण गर्छौं। सशक्तीकरण, पारदर्शिता र प्रगति हाम्रा मुख्य स्तम्भहरू हुन्।
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#grievances"
                className="bg-[#b91c1c] hover:bg-red-800 text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Join ANNFSU
              </a>

              <a
                href="#about"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Double Chevron down indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white cursor-pointer opacity-75 hover:opacity-100 flex flex-col items-center gap-0.5"
              onClick={() => {
                document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <svg
                className="w-5 h-5 -mt-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section underneath Hero */}
      <section id="stats" className="bg-white py-12 border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Students */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">5,000+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-sans">
                {language === "en" ? "Students Represented" : "विद्यार्थी प्रतिनिधित्व"}
              </div>
            </div>

            {/* Card 2: Academic Programs */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">12+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-sans">
                {language === "en" ? "Academic Programs" : "शैक्षिक कार्यक्रमहरू"}
              </div>
            </div>

            {/* Card 3: Annual Activities */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">50+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-sans">
                {language === "en" ? "Annual Activities" : "वार्षिक गतिविधिहरू"}
              </div>
            </div>

            {/* Card 4: Community Projects */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600">
                <Heart className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">20+</div>
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-sans">
                {language === "en" ? "Community Projects" : "सामुदायिक परियोजनाहरू"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Layout Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20 flex-1">
        {/* Section: About Us & Vision/Mission */}
        <AboutSection language={language} />

        {/* Section: Message from the President */}
        <PresidentMessage language={language} />

        {/* Section: Campaign vision / Manifesto */}
        <CampaignManifesto language={language} />

        {/* Section: Notice Board (Timeline feed) */}
        <NoticeBoard language={language} />

        {/* Section: History timeline */}
        <HistorySection language={language} />

        {/* Section: Committee Directory (Executives & General) */}
        <CommitteeSection language={language} />

        {/* Section: Photo Gallery of Student activities */}
        <PhotoGallery language={language} />

        {/* Section: Journey of Student Movements */}
        <JourneySection language={language} />

        {/* Section: Grievance Desk Box */}
        <GrievanceForm language={language} />

        {/* Section: AI helpdesk chat drawer */}
        <FSUAssistant language={language} />
      </main>

      {/* Elegant Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Column 1: FSU Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* Image Section for Logo */}
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-800 p-1 flex items-center justify-center shadow-inner overflow-hidden shrink-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_VyJwjk3U8Bmc9yTWYqUPrSDvWW3P-2s9TJKPxsRHkalC1ArG2tvmf7H5rIFRAdg-CFYudQYucNgzVVGxJkEAX7sHVZL3AA-f-pjeFXvxATKHZscjXuanNdBg63VU9RsNK-exGjH2L2lWjxkmE9ehLvin4HlaHU3srNjkMp_s8velzwMBLPfOJvvvaJEiJ1-WnvIWOgJ5FNFq5fQa3wiyWLNNu4tIlPJOXyTBdbt4fjCBJRgl6JTH22Vc0qB2YYNWGukAg6G4Ehc" // You can replace this src with your custom logo file path or URL
                    alt="FSU Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">Free Students' Union</h4>
                  <p className="text-[10px] text-slate-500 uppercase mt-0.5 font-mono">Aadikavi Bhanubhakta Campus</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-devanagari">
                {language === "en"
                  ? "We champion student rights, academic standards, modern digital resources, and sports excellence at Aadikavi Bhanubhakta Campus."
                  : "हामी आदिकवि भानुभक्त क्याम्पसको शैक्षिक विकास र विद्यार्थी एकताको रक्षाका लागि प्रतिबद्ध छौं।"}
              </p>
            </div>

            {/* Column 2: Direct Contact */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                {language === "en" ? "FSU Executive Office" : "स्ववियु मुख्य सचिवालय"}
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Vyas-1, Vigyanchaur, Tanahun, Nepal (व्यास-१, विज्ञानचौर, तनहुँ, नेपाल)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                  <a href="tel:9804141256" className="hover:text-white">9804141256 (Anup Ale Magar)</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                {language === "en" ? "Core Portals" : "मुख्य सुविधाहरू"}
              </h4>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                      <span>{language === "en" ? link.labelEn : link.labelNp}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Institutional Disclaimer */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                {language === "en" ? "Democratic Mandate" : "लोकतान्त्रिक जनादेश"}
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                {language === "en"
                  ? "This digital portal is fully managed by the elected FSU committee of Aadikavi Bhanubhakta Campus. Core data and contact listings are verified and approved for public circulation."
                  : "यो पोर्टल आदिकवि भानुभक्त क्याम्पसको निर्वाचित स्वतन्त्र विद्यार्थी युनियन कार्यसमिति द्वारा संचालित छ। सूचनाहरू आधिकारिक र प्रमाणित छन्।"}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
            <span>
              © {new Date().getFullYear()} Free Students' Union, Aadikavi Bhanubhakta Campus. All Rights Reserved.
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              Tanahun, Nepal
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
