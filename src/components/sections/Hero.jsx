import { useState } from 'react';
import { Download, ChevronDown, Star } from 'lucide-react';
import { SiReact, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientbg from '../backgrounds/RadialGradientbg';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden '>
      <RadialGradientbg variant="hero" />
      {/* Content Container */}

      <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Container */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className='w-4 h-4 text-white fill-white' />
                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-6 leading-tight'>
                Hi, I'm Jatin Kumar Mishra
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className='text-lg text-white/70 max-w-[550px] mb-8'>
                MERN Stack Developer passionate about building responsive, scalable, and user-focused web applications.
                Full-stack developer specializing in the MERN stack — building fast, scalable, and user-friendly web applications from frontend to backend.</p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-center gap-6 ">
                <button onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-0 mb-12 group">

                  <div className="relative z-10 bg-linear-to-r from-primary/80 via-primary/10 to-primary/20 text-black rounded-xl px-[26px] py-[13px] text-base font-medium border hover:bg-white/90 border-white cursor-pointer">
                    View My Work
                  </div>
                </button>
                <button className="inline-flex items-center gap-0 mb-12 group"
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}>
                    <div className="inline-flex gap-3 relative z-10 bg-linear-to-r from-primary/80 via-primary/10 to-primary/20 text-black rounded-xl px-[26px] py-[13px] text-base font-medium border hover:bg-white/90 border-white cursor-pointer">

                  <Download className='w-5 h-5' />
                  Resume
                    </div>
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">{stat.value}</div>
                    <p className="text-sm text-white leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Container */}

          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden  ">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-5px)] w-[calc(100%-5px)] items-center justify-center">
                  <img src="/developer-portrait.jpg" alt="Hero Image" className='w-full h-full object-cover' />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z-20">

                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">

                      <div className="w-6 h-6 flex items-center justify-centerhover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-centerhover:scale-110 transition-transform duration-300">
                        <SiExpress className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-centerhover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 flex items-center justify-centerhover:scale-110 transition-transform duration-300">
                        <SiNextdotjs className="w-full h-full text-primary" />
                      </div>

                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>


        </div>
      </div>

      {/* Scroll Indicator */}

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 animate-bounce -translate-x-1/2 z-10">
        <ChevronDown className='w-8 h-8 text-primary' />
      </button>
    </section>
  )
}

export default Hero
