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
    <section className="py-12 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 dark:bg-blue-900 dark:text-blue-200">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            What Our Students Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                    RK
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base dark:text-white">
                    Rahul Kumar
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Software Engineer at TCS
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                accusantium nesciunt per spiciatis mollitia dolorum at
                praesentium earum placeat qui consequuntur aspernatur nobis est
                ullam quaerat modi, voluptate dignissimos repellat! Dolor!"
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                    SP
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base dark:text-white">
                    Sneha Patel
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Data Analyst at Infosys
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore eveniet quis non s imilique reiciendis illum maiores,
                neque vero explicabo nesciunt facere quia hi c recusandae
                dolorem deleniti quae velit? Porro, consectetur.."
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base dark:text-white">
                    Arjun Joshi
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Research Scientist
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                "lorem ips um dolor sit amet consectetu r adipisicing elit."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
