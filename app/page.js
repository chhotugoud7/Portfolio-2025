'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{

    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-colors-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Skills isDarkMode={isDarkMode} />
    <Projects isDarkMode={isDarkMode}  />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    
    </>
  );
}
