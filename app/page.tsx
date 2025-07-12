"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FacultySection from "@/components/FacultySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function InstituteWebsite() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <FacilitiesSection />
      <TestimonialsSection />
      {<ResultsSection />}
      <ContactSection />
      <Footer />
    </div>
  );
}
