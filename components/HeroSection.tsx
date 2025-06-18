"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
    return (
        <section id="hero" className="relative pt-2 lg:pt-6 pb-10 lg:pb-16 bg-[#F9E88D] dark:bg-[#23231a] rounded-b-2xl">
            <div className="max-w-full mx-auto px-4 sm:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Badge className="mb-4 bg-[#BFC6A2] text-black font-semibold hover:bg-[#d6dbb8] dark:bg-[#3a3e2a] dark:text-[#F9E88D] dark:hover:bg-[#4a4e3a]">
                            Established 2018 • 7+ Years of Prerna
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-[#1a2a1a] dark:text-[#F9E88D]">
                            Shape Your Future with
                            <span className="text-[#B22222] dark:text-[#ff6b6b]"> Quality Education</span>
                        </h1>
                        <p className="text-xl text-[#2d2d2d] mb-8 leading-relaxed dark:text-[#d6dbb8]">
                            Join thousands of successful students who have transformed their
                            careers through our comprehensive offline programs. Expert
                            faculty, modern facilities, and proven results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#courses" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[#BFC6A2] to-[#F9E88D] text-[#1a2a1a] border border-[#B22222] hover:from-[#F9E88D] hover:to-[#BFC6A2] font-bold w-full sm:w-auto dark:from-[#3a3e2a] dark:to-[#23231a] dark:text-[#F9E88D] dark:border-[#ff6b6b] dark:hover:from-[#23231a] dark:hover:to-[#3a3e2a]"
                                >
                                    Explore Courses
                                    <ChevronRight className="ml-2 h-4 w-4 text-[#B22222] dark:text-[#ff6b6b]" />
                                </Button>
                            </a>
                            <a href="tel:8700714570" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-[#B22222] text-[#B22222] font-bold dark:border-[#ff6b6b] dark:text-[#ff6b6b]"
                                >
                                    Schedule Campus Visit
                                </Button>
                            </a>
                        </div>
                        <div className="flex items-center gap-8 mt-8 pt-8 border-t border-[#BFC6A2] dark:border-[#3a3e2a]">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#B22222] dark:text-[#ff6b6b]">
                                    5000+
                                </div>
                                <div className="text-sm text-[#2d2d2d] dark:text-[#d6dbb8]">
                                    Students Graduated
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#B22222] dark:text-[#ff6b6b]">
                                    95%
                                </div>
                                <div className="text-sm text-[#2d2d2d] dark:text-[#d6dbb8]">
                                    Placement Rate
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#B22222] dark:text-[#ff6b6b]">
                                    50+
                                </div>
                                <div className="text-sm text-[#2d2d2d] dark:text-[#d6dbb8]">
                                    Expert Faculty
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Prerna Institution Logo"
                            className="rounded-full shadow-2xl border-4 border-[#BFC6A2] bg-white dark:border-[#3a3e2a] dark:bg-[#23231a]"
                        />
                        <div
                            className="absolute -bottom-3 left-1/2 bg-[#BFC6A2] p-4 rounded-xl shadow-lg
                    sm:-bottom-6 sm:-left-5
                    -translate-x-1/2 sm:translate-x-0
                    w-[90vw] max-w-xs sm:w-auto
                    border border-[#F9E88D] dark:bg-[#3a3e2a] dark:border-[#23231a]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-[#F9E88D] p-2 rounded-full dark:bg-[#23231a]">
                                    <Award className="h-5 w-5 text-[#B22222] dark:text-[#ff6b6b]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#1a2a1a] dark:text-[#F9E88D]">
                                        ISO Certified
                                    </div>
                                    <div className="text-sm text-[#2d2d2d] dark:text-[#d6dbb8]">
                                        Quality Assured
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}