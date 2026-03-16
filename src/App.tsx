/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  ChevronLeft,
  ChevronRight,
  X,
  Menu
} from 'lucide-react';

export default function App() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lifePosts = [
    {
      id: 1,
      title: "Taste of Asia: Hosting 80 Guests",
      date: "January 2025",
      image: "/life4.jpg",
      fallback: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1200",
      content: "Representing Korea at 'Taste of Asia', I had the pleasure of hosting 80 Duke students at my home. It was an incredible evening of sharing authentic Korean flavors, culture, and community. Seeing everyone enjoy Kimbap and Japchae while learning about our traditions was a highlight of my time at Duke."
    },
    {
      id: 2,
      title: "Asian Business Club Trip",
      date: "November 2025",
      image: "/life1.jpg",
      fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      content: "A weekend trip to Asheville with friends from Duke's Asian Business Club. The trip was a chance to step away from the intensity of the MBA program and connect with a community that celebrates Asian heritage, shared experiences, and global perspectives. Surrounded by the Blue Ridge Mountains, it was a reminder that some of the most meaningful conversations and connections in business school happen outside the classroom."
    },
    {
      id: 3,
      title: "Gameday at Duke",
      date: "March 2025",
      image: "/life2.jpg",
      fallback: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200",
      content: "The energy at a Duke game is unlike anything else. Being part of the Cameron Crazies (or just tailgating nearby!) is a highlight of the MBA experience. It's not just about the basketball; it's about the community, the school spirit, and the lifelong friendships being forged in the heat of competition."
    },
    {
      id: 4,
      title: "Rhythms of New Orleans",
      date: "March 2025",
      image: "/life3.jpg",
      fallback: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200",
      content: "Exploring New Orleans felt like discovering a living blend of culture, music, and history. Walking through the streets filled with brass bands and historic architecture offered a glimpse into the rich traditions that shape the city. Experiences like this remind me how much there is to learn from exploring different places, cultures, and stories."
    },
    {
      id: 5,
      title: "Exploring the Tech Ecosystem",
      date: "October 2025",
      image: "/life5.jpg",
      fallback: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      content: "In October, I joined Fuqua's Tech Trek across San Francisco, San Jose, and Seattle to explore the heart of the global technology ecosystem. Visiting companies like Google, Amazon, Adobe, Chime, Microsoft, Netflix, and Uber offered a rare opportunity to see how different organizations approach product development, innovation, and scale. Hearing directly from product leaders and engineers deepened my interest in building technology products and reinforced my goal of working at the intersection of finance, platforms, and emerging technologies."
    }
  ];

  const [selectedLifePost, setSelectedLifePost] = useState<null | typeof lifePosts[0]>(null);
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.6 
        : scrollLeft + clientWidth * 0.6;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const toggleExp = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  const navLinks = ['about', 'experience', 'education', 'life', 'contact'];

  return (
    <div className="min-h-screen bg-brand-paper text-brand-ink font-sans selection:bg-brand-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-paper/80 backdrop-blur-md z-50">
        <div className="w-full px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <span className="font-serif text-xl md:text-2xl tracking-tight">Z won Yim</span>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
            {navLinks.map(link => (
              <a key={link} href={`#${link}`} className="hover:text-blue-800 hover:font-bold transition-all capitalize">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-ink/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-paper/95 backdrop-blur-md border-t border-brand-ink/5 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <a
                    key={link}
                    href={`#${link}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-sm font-medium uppercase tracking-widest hover:text-blue-800 transition-colors capitalize border-b border-brand-ink/5 last:border-0"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] bg-brand-paper flex items-center px-6 md:px-12 py-12 md:py-0">
          <div className="w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Photo - shows first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="order-1 md:order-2 relative flex items-center justify-center"
            >
             <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-none mx-auto aspect-[3/4] overflow-hidden rounded-[3rem] md:rounded-[6rem] shadow-2xl cursor-pointer group relative">
                <img 
                  src="/profile.jpg" 
                  alt="Z-won Yim" 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsImageExpanded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div 
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  onClick={() => setIsImageExpanded(true)}
                >
                  <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Hi, I'm <br />
                <span className="text-blue-800">Z-won Yim</span>
              </h1>
              <div className="text-base md:text-xl opacity-80 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed space-y-2">
                <p>MBA Candidate at Duke University's Fuqua School of Business.</p>
                <p>I build digital products at the intersection of finance, data, and AI.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="w-full px-6 md:px-12 py-16 md:py-32">
          {/* About Me Section */}
          <section id="about" className="mb-24 md:mb-48 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 md:mb-16 text-blue-800">👩🏻‍💻 About Me</h2>
            <div className="w-full">
              <div className="space-y-5 text-xl md:text-2xl font-serif leading-relaxed opacity-90">
                <p>
                  I am a product-focused MBA candidate at Duke Fuqua with 6+ years of experience building digital platforms in financial services.
                </p>
                <p>
                  At Hana Bank, I worked on payments infrastructure, AI-enabled compliance tools, and digital banking features used by millions of customers.
                </p>
                <p>
                  I enjoy turning complex problems into simple product experiences through data, experimentation, and cross-functional collaboration.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 md:mb-48 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 md:mb-16 text-blue-800">💼 Experience</h2>

            <div className="space-y-16 md:space-y-24">
              {[
                {
                  id: 'pm',
                  period: 'Jan 2023 — Jun 2025',
                  location: 'Seoul, Korea',
                  title: 'Product Manager',
                  company: 'Hana Bank',
                  summary: 'Led internal platform transformations and AI-enabled product initiatives to improve operational efficiency.',
                  bullets: [
                    "Led a $227M internal platform transformation, defining requirements and coordinating UAT across 30+ cross-functional teams to improve operational visibility and speed analytics turnaround by 20%.",
                    "Gathered feedback from teller teams and analyzed data to identify workflow gaps, translating outside-in and inside-out insights into system improvements that cut handling time by 10%.",
                    "Owned an AI-enabled employee chatbot end-to-end, translating workflow pain points into product requirements and leading cross-functional rollout and adoption, reducing help desk tickets by 15%.",
                    "Led global system rollout across 5 Southeast Asia markets, defining regional requirements and aligning cross-functional teams to execute GTM plans and improve operational consistency across markets."
                  ],
                  label: 'Key Contributions'
                },
                {
                  id: 'pgm',
                  period: 'Jan 2022 — Jan 2023',
                  location: 'Seoul, Korea',
                  title: 'Program Manager',
                  company: 'Hana Bank',
                  summary: 'Directed large-scale compliance system rebuilds and optimized CRM workflows through data-driven insights.',
                  bullets: [
                    "Led a $600K SOX compliance system rebuild, defining requirements, authoring BRDs, and coordinating UAT and GTM execution across 30+ cross-functional teams, reducing compliance incidents by 20%.",
                    "Gathered and prioritized feedback from 20 teams, translating operational needs into a system enhancement roadmap that reduced manual workflows by 10% and improved efficiency.",
                    "Analyzed CRM workflows and tooling using performance data to identify process gaps, translating findings into business cases that informed tooling decisions and reduced manual work by 8%.",
                    "Built KPI dashboards and executive reporting to surface risks and track milestones, improving leadership visibility and enabling faster decision-making across 30+ cross-functional stakeholders."
                  ],
                  label: 'Key Contributions'
                },
                {
                  id: 'ldp',
                  period: 'Jul — Dec 2021',
                  location: 'Daejeon, Korea',
                  title: 'IT Leadership Development Program',
                  company: 'KAIST x Hana Bank',
                  summary: "Company-sponsored, full-time six-month advanced IT training at KAIST, Korea's top tech university.",
                  bullets: [
                    "Selected from 12,000 employees (top 0.3%) for advanced IT training focused on data analytics, process automation, and digital innovation to improve operational efficiency and customer experience."
                  ],
                  label: 'Highlights'
                },
                {
                  id: 'cea',
                  period: 'Feb 2019 — Jul 2021',
                  location: 'Seoul, Korea',
                  title: 'Customer Experience (CX) Analyst',
                  company: 'Hana Bank',
                  summary: 'Translated frontline customer insights into prioritized problem statements and redesigned branch workflows.',
                  bullets: [
                    "Built a structured feedback loop between frontline teams and HQ, translating service pain points into prioritized problem statements that informed process and tooling improvements.",
                    "Conducted 100+ structured interviews to identify unmet needs and translate insights into actionable solutions, onboarding 50+ new SME clients.",
                    "Improved branch operations by analyzing service-performance metrics and feedback, redesigning workflows that raised satisfaction from the bottom quartile to the top 5% nationwide.",
                    "Developed weekly performance reports and trend analyses for HQ stakeholders, translating service data into recommendations that improved operational consistency across branches."
                  ],
                  label: 'Key Contributions'
                }
              ].map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0">
                  <div className="md:col-span-3">
                    <span className="text-sm md:text-base font-mono opacity-80 font-medium uppercase tracking-[0.1em] block">
                      {exp.period}
                    </span>
                    <p className="text-xs font-mono opacity-40 uppercase tracking-widest mt-1">{exp.location}</p>
                  </div>
                  <div className="md:col-span-9">
                    {/* Title row - stacks on mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 md:mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg md:text-xl italic opacity-60 font-serif">{exp.company}</p>
                      </div>
                      <button 
                        onClick={() => toggleExp(exp.id)}
                        className="self-start sm:self-auto text-xs md:text-sm font-bold uppercase tracking-widest text-blue-800 hover:opacity-70 transition-opacity flex items-center gap-1 md:gap-2 whitespace-nowrap flex-shrink-0 mt-1"
                      >
                        {expandedExp === exp.id ? 'Close' : 'View Details'}
                        <motion.span animate={{ rotate: expandedExp === exp.id ? 180 : 0 }}>↓</motion.span>
                      </button>
                    </div>
                    
                    <p className="text-base md:text-lg opacity-80 leading-relaxed mb-4 md:mb-6">
                      {exp.summary}
                    </p>

                    <AnimatePresence>
                      {expandedExp === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 md:pt-8 pb-4 border-t border-brand-ink/10 mt-4 space-y-4 md:space-y-6">
                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] opacity-40">{exp.label}</h4>
                            <ul className="space-y-3 md:space-y-4">
                              {exp.bullets.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm md:text-base opacity-80 leading-relaxed">
                                  <span className="text-blue-800 flex-shrink-0 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 md:mb-48 scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 md:mb-16 text-blue-800">🎓 Education</h2>
            <div className="space-y-10 md:space-y-16">
              {[
                {
                  period: '2025 — 2027',
                  degree: 'Master of Business Administration',
                  school: 'Duke University, The Fuqua School of Business',
                  note: 'Forte Foundation Fellow | Merit Scholarship Recipient | Cabinet, Tech Club & Asian Business Club'
                },
                {
                  period: '2013 — 2018',
                  degree: 'Bachelor of Information Systems',
                  school: 'Kookmin University, School of Business',
                  note: 'Honors: Award for Excellence, IT Project & Idea Award | VP, Media Arts Club'
                }
              ].map((edu, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0">
                  <div className="md:col-span-3">
                    <span className="text-sm md:text-base font-mono opacity-80 font-medium uppercase tracking-[0.1em] block">
                      {edu.period}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{edu.degree}</h3>
                    <p className="text-lg md:text-xl italic opacity-60 font-serif mb-3 md:mb-4">{edu.school}</p>
                    <p className="text-xs md:text-sm opacity-40 leading-relaxed">{edu.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Beyond the Desk Section */}
          <section id="life" className="mb-16 md:mb-24 scroll-mt-20">
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-blue-800">✨ Beyond the Desk</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full border border-brand-ink/10 hover:bg-brand-ink/5 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full border border-brand-ink/10 hover:bg-brand-ink/5 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto pb-6 gap-4 md:gap-6 no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
            >
              {lifePosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="flex-none w-[160px] sm:w-[200px] md:w-[260px] cursor-pointer snap-start"
                  onClick={() => setSelectedLifePost(post)}
                >
                  <div className="aspect-square overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] bg-brand-ink/5 shadow-sm border border-brand-ink/5 relative group">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      whileHover={{ x: -20, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-[120%] h-full max-w-none object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = post.fallback;
                      }}
                    />
                  </div>
                  <div className="mt-2 md:mt-3 px-1">
                    <h3 className="text-sm md:text-base font-serif font-medium opacity-80 truncate">{post.title}</h3>
                    <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest mt-0.5">{post.date}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex-none w-px h-1 md:w-[10vw]" />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-20">
            <div className="text-center pt-16 md:pt-20 pb-12 border-t border-brand-ink/10">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-blue-800">Let's connect!</h2>
              <div className="flex justify-center gap-6 md:gap-8">
                <a 
                  href="mailto:zwon.yim@duke.edu" 
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-800 text-white rounded-full hover:scale-110 transition-all shadow-md"
                  title="Email me"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/zwonyim/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-800 text-white rounded-full hover:scale-110 transition-all shadow-md"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 md:py-12 px-6 md:px-12 border-t border-brand-ink/5 text-center">
        <p className="text-sm uppercase tracking-[0.4em] opacity-30">
          © {new Date().getFullYear()} Z won Yim
        </p>
      </footer>

      {/* Life Post Modal */}
      <AnimatePresence>
        {selectedLifePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-brand-paper/95 backdrop-blur-xl"
              onClick={() => setSelectedLifePost(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-5xl bg-white rounded-t-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedLifePost(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 md:p-3 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-52 md:h-auto overflow-hidden flex-shrink-0">
                <img 
                  src={selectedLifePost.image} 
                  alt={selectedLifePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = selectedLifePost.fallback;
                  }}
                />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-800 mb-3 md:mb-4">
                  {selectedLifePost.date}
                </p>
                <h2 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8 leading-tight">
                  {selectedLifePost.title}
                </h2>
                <div className="prose prose-base md:prose-lg text-brand-ink/80 leading-relaxed italic font-serif">
                  <p>"{selectedLifePost.content}"</p>
                </div>
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-brand-ink/10">
                  <p className="text-xs md:text-sm opacity-40">
                    Exploring the world beyond the screen.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageExpanded(false)}
            className="fixed inset-0 z-[100] bg-brand-paper/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsImageExpanded(false)}
                className="absolute -top-10 right-0 md:-top-12 md:-right-12 text-brand-ink hover:opacity-60 transition-opacity p-2"
              >
                <X size={28} />
              </button>
              <img 
                src="/profile.jpg" 
                alt="Z-won Yim" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
