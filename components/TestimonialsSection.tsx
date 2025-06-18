"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f9e98e]/60 dark:bg-[#2d3a2e]/90 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-[#3b7a57] text-[#f9e98e] dark:bg-[#f9e98e] dark:text-[#2d3a2e] font-semibold text-base px-4 py-2 rounded-full tracking-wide shadow">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#2d3a2e] dark:text-[#f9e98e] tracking-wide drop-shadow">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md text-center">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  RK
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-bold text-[#2d3a2e] dark:text-[#f9e98e]">
                Rahul Kumar
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Software Engineer at TCS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                accusantium nesciunt perspiciatis mollitia dolorum at
                praesentium earum placeat qui consequuntur aspernatur nobis est
                ullam quaerat modi, voluptate dignissimos repellat! Dolor!"
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md text-center">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  SP
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-bold text-[#2d3a2e] dark:text-[#f9e98e]">
                Sneha Patel
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Data Analyst at Infosys
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore eveniet quis non similique reiciendis illum maiores,
                neque vero explicabo nesciunt facere quia hic recusandae dolorem
                deleniti quae velit? Porro, consectetur."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#fffde7] border-[#f9e98e] dark:bg-[#324233] dark:border-[#3b7a57] shadow-md text-center">
            <CardHeader>
              <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-[#3b7a57] dark:border-[#f9e98e]">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#f9e98e] text-[#3b7a57] dark:bg-[#3b7a57] dark:text-[#f9e98e] font-bold">
                  AJ
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-bold text-[#2d3a2e] dark:text-[#f9e98e]">
                Arjun Joshi
              </CardTitle>
              <CardDescription className="text-[#3b7a57] dark:text-yellow-100">
                Research Scientist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-[#3b7a57] dark:text-yellow-100">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
