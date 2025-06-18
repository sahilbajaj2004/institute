"use client";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2e3522] text-[#f9e98e] py-8 rounded-t-2xl dark:bg-[#20281a] dark:text-[#f9e98e] shadow-2xl border-t-4 border-[#4e9a6e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e]" />
              <span className="text-xl font-bold tracking-wide">
                Prerna Institution
              </span>
            </div>
            <p className="text-[#e2d47a] mb-4 dark:text-[#f9e98e]/80">
              Empowering students with quality education and practical skills
              for a successful future.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e] hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8 text-[#b94e6f] dark:text-[#f9e98e] hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e] hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#f9e98e]">Quick Links</h3>
            <ul className="space-y-2 text-[#e2d47a]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#f9e98e]">Programs</h3>
            <ul className="space-y-2 text-[#e2d47a]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  NEET
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  JEE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  NDA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Foundation Batch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#3b7a57] transition-colors dark:hover:text-yellow-300"
                >
                  Pre-University
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#f9e98e]">Contact Info</h3>
            <ul className="space-y-2 text-[#e2d47a]">
              <li>Kh. No. 877 B.K Ashram Road, Labour Chowk</li>
              <li>Sant Nagar, Burari, Delhi - 110084</li>
              <li>+91 87007 14570</li>
              <li>Prernainstitution@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3b7a57] mt-8 pt-6 text-center text-[#e2d47a] dark:border-[#f9e98e]/30">
          <p>
            &copy; 2024 Prerna Institution. All rights reserved. | Privacy
            Policy | Terms of Service | Designed and Developed by Sahil Bajaj{" "}
            <a
              href="tel:+919811057531"
              className="text-[#3b7a57] hover:underline dark:text-yellow-300"
              aria-label="Call Sahil Bajaj"
            >
              9811057531
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
