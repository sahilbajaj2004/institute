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
    <footer className="bg-[#0a101a] text-white py-12 rounded-t-2xl dark:bg-black dark:text-gray-100 shadow-2xl border-t-4 border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400 dark:text-blue-400" />
              <span className="text-xl font-bold">Bajaj Institute</span>
            </div>
            <p className="text-gray-400 mb-4 dark:text-gray-300">
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
                <Facebook className="h-8 w-8 text-blue-400 dark:text-blue-400 hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8 text-pink-500 dark:text-pink-400 hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-8 w-8 text-blue-700 dark:text-blue-500 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Programs</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Computer Science
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Mathematics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Science & Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Business Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors dark:hover:text-blue-400"
                >
                  Exam Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li>E-5/99, gali no 2</li>
              <li>india delhi</li>
              <li>+91 98110 57531</li>
              <li>sahilbajaj0941@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:border-gray-700 dark:text-gray-400">
          <p>
            &copy; 2024 Prerna institution. All rights reserved. | Privacy
            Policy | Terms of Service | Designed and Developed by Sahil Bajaj |{" "}
            <a
              href="tel:+919811057531"
              className="text-blue-400 hover:underline"
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
