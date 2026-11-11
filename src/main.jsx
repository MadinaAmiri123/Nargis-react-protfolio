import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Phone, Moon, Sun, Menu, X, Code2, Palette, GraduationCap, Sparkles, ExternalLink } from 'lucide-react';
import './style.css';

const skills = [
  { name: 'HTML5', level: 'Structure & semantics', icon: '01' },
  { name: 'CSS3', level: 'Responsive interfaces', icon: '02' },
  { name: 'JavaScript', level: 'Interactive experiences', icon: '03' },
  { name: 'React.js', level: 'Component-based UI', icon: '04' },
  { name: 'Figma', level: 'UI design & prototyping', icon: '05' },
  { name: 'GitHub', level: 'Version control', icon: '06' },
];
const education = [
  { year: '2022', title: 'High School Diploma', place: 'Graduated from high school', detail: 'Completed secondary education.' },
  { year: '2024', title: 'English Language Studies', place: 'Muslim English Language Institute (MELI)', detail: 'Completed English language studies.' },
  { year: 'Present', title: 'Medical Studies', place: 'Afghanistan Online Open University (AOU)', detail: 'Currently continuing medical studies.' },
];
function App(){
  const [dark,setDark]=useState(()=>localStorage.getItem('nargis-theme') !== 'light');
  const [menu,setMenu]=useState(false);
  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('nargis-theme',dark?'dark':'light')},[dark]);
  const links=[['Home','/'],['About','/about'],['Projects','/projects'],['Skills','/skills'],['Education','/education'],['Contact','/contact']];
  return <div className="app-shell">
    <header className="topbar"><NavLink to="/" className="brand" onClick={()=>setMenu(false)}><span className="brand-mark">N</span><span>NARGIS<span className="brand-dot">.</span></span></NavLink>
      <nav className={menu?'nav-links open':'nav-links'}>{links.map(([name,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setMenu(false)}>{name}</NavLink>)}</nav>
      <div className="nav-actions"><button className="icon-button theme-toggle" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><a className="nav-cta" href="mailto:nargisalizai45@gmail.com">Let's talk <ArrowUpRight size={15}/></a><button className="icon-button mobile-menu" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    </header>
    <main><AnimatePresence mode="wait"><Routes>
      <Route path="/" element={<Page><Home/></Page>}/><Route path="/projects" element={<Page><Projects/></Page>}/><Route path="/about" element={<Page><About/></Page>}/><Route path="/skills" element={<Page><Skills/></Page>}/><Route path="/education" element={<Page><Education/></Page>}/><Route path="/contact" element={<Page><Contact/></Page>}/>
    </Routes></AnimatePresence></main>
    <footer className="footer"><span>© {new Date().getFullYear()} Nargis Alizai</span><span>Designed with curiosity & code <span className="brand-dot">✦</span></span><div className="footer-social"><a href="mailto:nargisalizai45@gmail.com" aria-label="Email"><Mail size={16}/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16}/></a></div></footer>
  </div>
}
function Page({children}){const location=useLocation();useEffect(()=>window.scrollTo(0,0),[location.pathname]);return <motion.div key={location.pathname} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.3}}>{children}</motion.div>}
function Eyebrow({children}){return <div className="eyebrow"><span className="eyebrow-line"/>{children}</div>}
function Home(){return <><section className="hero section-wrap"><div className="hero-copy"><Eyebrow>FRONT-END DEVELOPER · KABUL, AFGHANISTAN</Eyebrow><h1>Building <span className="gradient-text">beautiful</span><br/>digital experiences<span className="brand-dot">.</span></h1><p className="hero-lead">Hi, I'm <strong>Nargis Alizai</strong> — a front-end developer focused on clean design, smooth interactions, and professional web experiences.</p><div className="hero-buttons"><NavLink className="primary-button" to="/contact">Let's work together <ArrowUpRight size={17}/></NavLink><NavLink className="text-button" to="/about">More about me <span>↗</span></NavLink></div><div className="hero-meta"><span><i className="status-dot"/> Open to learning & opportunities</span><span>HTML · CSS · JS · React</span></div></div><div className="hero-art portrait-art"><div className="portrait-backdrop"/><div className="portrait-frame"><img src="/nargis-portrait.png" alt="Portrait illustration for Nargis Alizai's portfolio"/><div className="portrait-caption"><span className="status-dot"/> WEB DEVELOPER</div></div><div className="floating-chip chip-top"><Sparkles size={15}/> Creative mindset</div><div className="floating-chip chip-bottom"><Code2 size={15}/> Design meets code</div><div className="portrait-orbit"/><div className="art-glow"/></div></section><section className="home-projects section-wrap"><div className="home-project-heading"><div><Eyebrow>SELECTED WORK</Eyebrow><h2>Ideas brought to <span className="gradient-text">life.</span></h2></div><NavLink className="inline-link" to="/projects">Explore all projects <ArrowUpRight size={16}/></NavLink></div><ProjectCards featured/></section></>}

const projects = [
  { number:'01', title:'Nargis Alizai Portfolio', type:'Personal brand website', description:'A complete personal portfolio website designed to showcase my story, skills, education, and contact details with a clean professional presentation.', tags:['React.js','CSS','Framer Motion'], tone:'violet', icon:'✦', status:'Featured website', preview:'portfolio' },
  { number:'02', title:'Kabul Community Support', type:'Information & services website', description:'A responsive website created to help people access community information, support resources, and useful service listings in one place.', tags:['HTML','CSS','JavaScript'], tone:'teal', icon:'◈', status:'Community website', preview:'community' },
  { number:'03', title:'Study Planner Dashboard', type:'Productivity website', description:'A student-focused web dashboard for planning tasks, managing study routines, and tracking progress in a simple and organized layout.', tags:['JavaScript','CSS','UI Design'], tone:'orange', icon:'▣', status:'Planning website', preview:'dashboard' },
  { number:'04', title:'Medical Care Landing Page', type:'Healthcare website', description:'A healthcare landing page focused on trust, service clarity, and patient-friendly communication through a clean modern website structure.', tags:['HTML','CSS','UX Design'], tone:'pink', icon:'✚', status:'Healthcare website', preview:'healthcare' },
  { number:'05', title:'Boutique Storefront', type:'E-commerce website', description:'A boutique shopping website concept made to highlight products, categories, and brand identity in a stylish and customer-friendly way.', tags:['React.js','CSS','Brand Design'], tone:'sky', icon:'▤', status:'Storefront website', preview:'store' },
  { number:'06', title:'Learning Hub', type:'Educational website', description:'An educational website concept for online learning, course discovery, progress tracking, and student engagement across different subjects.', tags:['Figma','HTML','CSS'], tone:'gold', icon:'◎', status:'Education website', preview:'education' },
];
function ProjectCards({featured=false}){
  const items=featured?projects.slice(0,3):projects;
  return <div className={featured?'project-grid featured-project-grid':'project-grid'}>{items.map((project,i)=><motion.article className={`project-card ${project.tone}`} key={project.number} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
    <div className="project-visual">
      <div className={`project-media mockup-${project.preview}`}>
        <div className="browser-shell">
          <div className="browser-bar"><i/><i/><i/><span>{project.type}</span></div>
          <div className="browser-body">
            <div className="browser-topbar"><span className="brand-mini">{project.title.split(' ')[0]}</span><div className="nav-mini"><span/><span/><span/></div></div>
            <div className="browser-hero"><div className="hero-copy-mini"><b/><b/><i/></div><div className="hero-visual-mini"/></div>
            <div className="browser-cards"><span/><span/><span/></div>
          </div>
        </div>
        <div className="project-video-overlay"><div className="project-preview-copy"><span>{project.type}</span><strong>{project.title}</strong></div><span className="play-indicator">▶</span></div>
      </div>
      <span className="project-index">{project.number}</span>
    </div>
    <div className="project-info">
      <div className="project-meta"><span>{project.type}</span><span className="project-status">{project.status}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    </div>
  </motion.article>)}</div>;
}
function Projects(){return <section className="section-wrap inner-page projects-page"><Eyebrow>SELECTED WORK</Eyebrow><div className="page-heading"><h1>Projects built with<br/><span className="gradient-text">purpose and creativity.</span></h1><p className="section-intro">A selection of responsive interfaces and front-end work I developed while improving my design thinking, coding skills, and user-focused approach.</p></div><ProjectCards/><div className="projects-note"><Code2 size={20}/><p><strong>My focus:</strong> creating clean, practical, and user-friendly experiences that are easy to navigate and visually engaging.</p></div><div className="project-cta"><div><h2>Have a project in mind?</h2><p>I'd love to learn, collaborate and build something useful.</p></div><NavLink className="primary-button" to="/contact">Get in touch <ArrowUpRight size={17}/></NavLink></div></section>}
function About(){return <section className="section-wrap inner-page"><Eyebrow>A LITTLE INTRODUCTION</Eyebrow><div className="page-heading"><h1>Curious by nature.<br/><span className="gradient-text">Developer by passion.</span></h1><p className="section-intro">I enjoy blending design thinking with practical front-end development to create experiences that feel polished, clear, and memorable.</p></div><div className="about-grid"><div className="about-photo-card"><div className="about-photo-wrap"><img src="/nargis-portrait.png" alt="Nargis Alizai portrait"/></div><div className="about-badges"><span>Front-End Developer</span><span>UI Enthusiast</span></div></div><div className="about-copy"><h3>Hello, I'm Nargis.</h3><p>I'm a passionate front-end developer from Kabul, Afghanistan, focused on building responsive and user-friendly web experiences with HTML, CSS, JavaScript, and React.js.</p><p>My work combines creativity, problem-solving, and a strong eye for design. I enjoy transforming ideas into thoughtful interfaces that are both beautiful and practical.</p><p>I am also continuing my education while learning and growing in technology, and I am always open to new opportunities, collaborations, and creative projects.</p><div className="about-stats"><div className="about-stat"><strong>2+</strong><span>Years learning</span></div><div className="about-stat"><strong>6</strong><span>Projects</span></div><div className="about-stat"><strong>100%</strong><span>Growth mindset</span></div></div><NavLink className="inline-link" to="/education">Explore my education <ArrowUpRight size={16}/></NavLink></div></div></section>}
function Skills(){return <section className="section-wrap inner-page"><Eyebrow>WHAT I WORK WITH</Eyebrow><div className="page-heading"><h1>Tools for ideas.<br/><span className="gradient-text">Skills in progress.</span></h1><p className="section-intro">The technologies and creative tools I use while learning and building for the web.</p></div><div className="skills-grid">{skills.map((s,i)=><motion.div className="skill-card" key={s.name} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><span className="skill-number">{s.icon}</span><div className="skill-icon">{i===4?<Palette/>:i===5?<Github/>:<Code2/>}</div><h3>{s.name}</h3><p>{s.level}</p><span className="skill-arrow"><ArrowUpRight size={17}/></span></motion.div>)}</div><div className="learning-note"><Sparkles size={19}/><p><strong>Always learning.</strong> I'm continuously improving my skills and exploring new ways to create better digital experiences.</p></div></section>}
function Education(){return <section className="section-wrap inner-page"><Eyebrow>MY LEARNING JOURNEY</Eyebrow><div className="page-heading"><h1>Education &<br/><span className="gradient-text">growth.</span></h1><p className="section-intro">A path shaped by learning, curiosity and the desire to keep moving forward.</p></div><div className="timeline">{education.map((e,i)=><motion.div className="timeline-item" key={e.year} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}}><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-content"><span className="timeline-year">{e.year}</span><h3>{e.title}</h3><h4>{e.place}</h4><p>{e.detail}</p></div></motion.div>)}</div></section>}
function Contact(){return <section className="section-wrap inner-page contact-page"><Eyebrow>LET'S CONNECT</Eyebrow><div className="contact-layout"><div><h1>Have an idea?<br/><span className="gradient-text">Let's talk.</span></h1><p className="section-intro">Whether it's a project, a collaboration or simply a hello — I'd be happy to hear from you.</p><a className="email-link" href="mailto:nargisalizai45@gmail.com">nargisalizai45@gmail.com <ArrowUpRight size={19}/></a></div><div className="contact-card"><h3>Contact details</h3><a href="mailto:nargisalizai45@gmail.com"><span className="contact-icon"><Mail/></span><span><small>Email</small><strong>nargisalizai45@gmail.com</strong></span><ArrowUpRight className="contact-arrow"/></a><a href="tel:0747527815"><span className="contact-icon"><Phone/></span><span><small>Phone</small><strong>0747527815</strong></span><ArrowUpRight className="contact-arrow"/></a><div className="social-row"><span>Find me online</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a></div></div><p className="social-hint">Replace the social links with your personal profile URLs when ready.</p></div></div></section>}

createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
