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



import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  GraduationCap,
  Building,
  Microscope,
  Computer,
  Calculator,
  Globe,
  ChevronRight,
} from "lucide-react";

export default function InstituteWebsite() {



  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.currentTarget;
    const data = {
      access_key: "c81553c7-6bd2-4c55-80c7-fa95e009c1fc",
      first_name: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      last_name: (form.elements.namedItem("lastName") as HTMLInputElement)
        .value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      course: (form.elements.namedItem("course") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      newsletter: (form.elements.namedItem("newsletter") as HTMLInputElement)
        .checked
        ? "Yes"
        : "No",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setSuccess("Message sent successfully!");
      form.reset();
    } else {
      setSuccess("Failed to send message. Please try again.");
    }
  }


  
  
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
      {/* Footer */}
      
    </div>
  );
}
