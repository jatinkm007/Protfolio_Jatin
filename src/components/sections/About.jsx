import React, { useState } from 'react';
import { Download, Code2, Sparkles } from 'lucide-react';
import { SiReact, SiExpress, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiSupabase  } from 'react-icons/si';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientbg from '../backgrounds/RadialGradientbg';


const About = () => {

    // Skills
    const skills = [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#3178C6' },
        { name: 'Supabase', icon: SiSupabase , color: '#3178C6' },
    ];

    return (
        <section className='relative py-20 bg-black overflow-hidden' id='about'>
            <RadialGradientbg variant="about" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                    <Code2 className='w-4 h-4 text-primary' />
                                    <span className='text-sm text-primary font-medium'>MERN Stack Developer</span>
                                    <Sparkles className='w-4 h-4 text-primary' />
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight   ">
                                    Crafting Digital Experiences that matter.
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {PERSONAL_INFO.bio.map((paragraph, index) => (
                                        <p key={index} className="text-base text-white/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                        <FadeIn delay={300}>
                            <div className="grid grid-cols-3 gap-8">
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                                        <div className="text-3xl font-normal text-white mb-2 font-mono">{stat.value}</div>
                                        <p className="text-sm text-white/60 leading-snug">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-30-0 w-fit group"
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}>
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300 ' />
                                Let's Work Together
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column - Image Placeholder     */}

                    <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Code2 className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className='text-lg font-semibold text-white mb-2'>Expertise</h3>
                                            <p className='text-sm text-white/70 leading-relaxed'>
                                                Specialized in building modern, responsive, and scalable web applications using React.js, Node.js, Express.js, and MongoDB. Focused on creating intuitive user experiences and clean, maintainable code.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Sparkles className='w-5 h-5 text-primary' />
                                    </div>
                                    <h3 className='text-base font-semibold text-white mb-2'>Clean Code</h3>
                                    <p className='text-sm text-white/70 leading-relaxed'>Writing clean, reusable, and well-structured code following industry best practices. Focused on readability, performance, and long-term maintainability.
                                    </p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Download className='w-5 h-5 text-primary' />
                                    </div>
                                    <h3 className='text-base font-semibold text-white mb-2'>Performance</h3>
                                    <p className='text-sm text-white/70 leading-relaxed'>Optimizing applications for speed, accessibility, and responsiveness to deliver seamless experiences across all devices and browsers.
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 "></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">React</div>
                                            <div className="text-sm text-white/60">Frontend Development</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">Node.js</div>
                                            <div className="text-sm text-white/60">Backend Development</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">MongoDB</div>
                                            <div className="text-sm text-white/60">Database Management</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Skills grid section */}

                <FadeIn delay={500}>
                    <div className="flex flex-col gap-12 items-center">
                        <div className="text-center">
                            <h3 className="text-2xl font-normal text-white mb-2   ">
                                Tech Stack & Expertise
                            </h3>
                            <p className="text-white/60 text-sm">
                                I specialize in building modern web applications with a focus on performance and user experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 w-full max-w-5xl">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover:scale-105 transition-all duration-300 h-full"
                                >
                                 <skill.icon className='text-3xl text-primary   ' />   
                                 <div className="text-sm text-white/80 font-medium text-center">
                                    {skill.name}
                                 </div>
                                 {/* Hover effect */}

                                    <div className="absolute inset-0 bg-linear-to-r from-primary/0 to-primary/0 rounded-2xl group-hover:from-primary/10 group-hover:to-primary/10 transition-all duration-300 "></div>

                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    )
}

export default About
