"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.currentTarget;
    const data = {
      access_key: "48a4933e-6e49-4e97-ba91-33fe9c899d32",
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
    <section
      id="contact"
      className="py-20 bg-[#f9e98e]/60 dark:bg-[#2d3a2e]/90 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            Visit Our Campus Today
          </h2>
          <p className="text-xl text-[#3b7a57] max-w-3xl mx-auto dark:text-yellow-100 font-medium">
            Schedule a campus tour or get in touch with our admissions team
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <Card className="text-center transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-[#3b7a57]">
                <MapPin className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e]">
                Visit Our Campus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] mb-2 dark:text-yellow-100">
                Kh. No. 877 B.K Ashram Road, Labour Chowk
              </p>
              <p className="text-[#3b7a57] mb-4 dark:text-yellow-100">
                Sant Nagar, Burari, Delhi - 110084
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
              >
                <a
                  href="https://maps.app.goo.gl/cyMKARvPjknSuas67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-[#3b7a57]">
                <Phone className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e]">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] mb-2 dark:text-yellow-100">
                Admissions Helpline
              </p>
              <p className="font-semibold text-lg mb-4 text-[#2d3a2e] dark:text-[#f9e98e]">
                +91 87007 14570
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
              >
                <a href="tel:+918700714570">Call Now</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center transition-transform cursor-pointer hover:scale-105 hover:shadow-lg duration-200 bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <div className="mx-auto bg-[#f9e98e] w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-[#3b7a57]">
                <Mail className="h-8 w-8 text-[#3b7a57] dark:text-[#f9e98e]" />
              </div>
              <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e]">
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#3b7a57] mb-2 dark:text-yellow-100">
                General Inquiries
              </p>
              <p className="font-semibold mb-4 text-[#2d3a2e] dark:text-[#f9e98e]">
                Prernainstitution@gmail.com
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
              >
                <a href="mailto:Prernainstitution@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2d3a2e] dark:text-[#f9e98e]">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Fill out the form below and we'll get back to you within 24
                hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 py-4">
              <div className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-2">
                    <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                      Course of Interest
                    </label>
                    <select
                      name="course"
                      className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all"
                    >
                      <option value="">Select a course</option>
                      <option value="neet">NEET</option>
                      <option value="jee">JEE</option>
                      <option value="nda">NDA</option>
                      <option value="foundation">
                        Foundation (11th 12th + NEET JEE)
                      </option>
                      <option value="pre-university">
                        Pre-University (11th 12th)
                      </option>
                      <option value="primary-secondary">
                        Primary and secondary (1st to 10th)
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2 mt-2">
                    <label className="text-sm font-medium text-[#3b7a57] dark:text-yellow-100">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-[#f9e98e] dark:border-[#3b7a57] dark:bg-[#2d3a2e] dark:text-[#f9e98e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b7a57] focus:border-transparent transition-all resize-none"
                      rows={4}
                      placeholder="Tell us about your educational goals and any specific questions you have..."
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="rounded border-[#f9e98e] dark:bg-[#2d3a2e] dark:border-[#3b7a57]"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-[#3b7a57] dark:text-yellow-100"
                    >
                      I would like to receive updates about courses and events
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold py-3 text-lg mt-4 dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Mail className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  {success && (
                    <div className="mt-4 text-center text-green-600 font-semibold dark:text-green-400">
                      {success}
                    </div>
                  )}
                </form>
                <div className="text-xs text-[#3b7a57] text-center dark:text-yellow-100">
                  We respect your privacy. Your information will not be shared.
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Office Hours & Map */}
          <div className="space-y-6">
            <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2d3a2e] dark:text-[#f9e98e]">
                  <Clock className="h-5 w-5 text-[#3b7a57] dark:text-[#f9e98e]" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#f9e98e] dark:border-[#3b7a57]">
                  <span className="font-medium text-[#3b7a57] dark:text-yellow-100">
                    Monday - Friday
                  </span>
                  <span className="text-[#3b7a57] dark:text-yellow-100">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#f9e98e] dark:border-[#3b7a57]">
                  <span className="font-medium text-[#3b7a57] dark:text-yellow-100">
                    Saturday
                  </span>
                  <span className="text-[#3b7a57] dark:text-yellow-100">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-[#3b7a57] dark:text-yellow-100">
                    Sunday
                  </span>
                  <span className="text-red-600 font-medium dark:text-red-400">
                    Closed
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#2d3a2e] dark:text-[#f9e98e]">
                  Campus Location
                </CardTitle>
                <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                  Find us on the map and plan your visit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-[#f9e98e] rounded-lg h-64 flex items-center justify-center mb-4 dark:bg-[#3b7a57]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1605664258354!2d77.1989644!3d28.7446226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff2b01cd3c91%3A0x4c34557e7fd25079!2sPrerna%20institutions%20%7C%20NEET%20COACHING%20IN%20DELHI%20%7C%20JEE%20COACHING%20IN%20DELHI!5e0!3m2!1sen!2sin!4v1750173096705!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      borderRadius: "0.5rem",
                      minHeight: "16rem",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Campus Location Map"
                  ></iframe>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
                  >
                    <a
                      href="https://maps.app.goo.gl/cyMKARvPjknSuas67"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
                  >
                    <a href="tel:+918700714570">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#2d3a2e] dark:text-[#f9e98e]">
              Ready to Start Your Journey?
            </h3>
            <p className="text-[#3b7a57] mb-6 max-w-2xl mx-auto dark:text-yellow-100">
              Schedule a campus visit to explore our facilities, meet our
              faculty, and learn more about our programs. Our admissions team is
              here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#3b7a57] hover:bg-[#2d3a2e] text-[#f9e98e] font-bold dark:bg-[#f9e98e] dark:text-[#2d3a2e] dark:hover:bg-yellow-200"
              >
                <a href="tel:+918700714570">Schedule Campus Tour</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#3b7a57] text-[#3b7a57] dark:border-[#f9e98e] dark:text-[#f9e98e]"
              >
                <a
                  href="/Brochure.jpg"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
