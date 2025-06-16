import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
} from "lucide-react"

export default function InstituteWebsite() {
  return (
    // <div className="min-h-screen bg-background">
    <div className="min-h-screen mx-auto px-8 bg-background">
      {/* <div className="w-full"> */}
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container px-8 lg:px-12 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Excellence Institute</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Courses
            </a>
            <a
              href="#faculty"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Faculty
            </a>
            <a
              href="#facilities"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Facilities
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button>Enroll Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-32 pt-8 lg:pt-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
        <div className="container px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Established 2010 • 15+ Years of Excellence
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Shape Your Future with
                <span className="text-blue-600"> Quality Education</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of successful students who have transformed their
                careers through our comprehensive offline programs. Expert
                faculty, modern facilities, and proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Courses
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Campus Visit
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-muted-foreground">
                    Students Graduated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-muted-foreground">
                    Placement Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Expert Faculty
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">ISO Certified</div>
                    <div className="text-sm text-muted-foreground">
                      Quality Assured
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">About Excellence Institute</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Empowering Students Since 2010
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to providing world-class education through
              innovative teaching methods, experienced faculty, and
              state-of-the-art facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Expert Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry-aligned curriculum designed by experts to meet
                  current market demands and future trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personalized attention with small batch sizes ensuring every
                  student gets individual focus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  95% placement rate with students placed in top companies
                  across various industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50 rounded-2xl">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Programs</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive courses designed to build strong foundations and
              practical skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Computer className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">6 Months</Badge>
                </div>
                <CardTitle>Computer Science & Programming</CardTitle>
                <CardDescription>
                  Master programming fundamentals, data structures, and software
                  development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">25 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹45,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Calculator className="h-8 w-8 text-green-600" />
                  <Badge variant="secondary">4 Months</Badge>
                </div>
                <CardTitle>Mathematics & Statistics</CardTitle>
                <CardDescription>
                  Advanced mathematics, statistics, and analytical problem
                  solving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">4 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">20 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹35,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Microscope className="h-8 w-8 text-purple-600" />
                  <Badge variant="secondary">8 Months</Badge>
                </div>
                <CardTitle>Science & Research</CardTitle>
                <CardDescription>
                  Laboratory techniques, research methodology, and scientific
                  analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">8 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">15 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹55,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="h-8 w-8 text-orange-600" />
                  <Badge variant="secondary">3 Months</Badge>
                </div>
                <CardTitle>English & Communication</CardTitle>
                <CardDescription>
                  Professional communication, presentation skills, and language
                  mastery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">3 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">30 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹25,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building className="h-8 w-8 text-red-600" />
                  <Badge variant="secondary">5 Months</Badge>
                </div>
                <CardTitle>Business & Management</CardTitle>
                <CardDescription>
                  Leadership skills, business strategy, and entrepreneurship
                  fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">5 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">25 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹40,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                  <Badge variant="secondary">12 Months</Badge>
                </div>
                <CardTitle>Competitive Exam Prep</CardTitle>
                <CardDescription>
                  Comprehensive preparation for entrance exams and competitive
                  tests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="text-sm font-medium">12 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Batch Size:</span>
                    <span className="text-sm font-medium">40 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Fee:</span>
                    <span className="text-sm font-medium">₹60,000</span>
                  </div>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Faculty</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced faculty brings real-world expertise and academic
              excellence to every classroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <CardTitle>Dr. Rajesh Kumar</CardTitle>
                <CardDescription>Head of Computer Science</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  PhD in Computer Science, 15+ years experience
                </p>
                <Badge variant="outline" className="text-xs">
                  Expert in AI/ML
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <CardTitle>Prof. Priya Sharma</CardTitle>
                <CardDescription>Mathematics Department</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  M.Sc Mathematics, 12+ years experience
                </p>
                <Badge variant="outline" className="text-xs">
                  Statistics Expert
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <CardTitle>Dr. Amit Singh</CardTitle>
                <CardDescription>Science & Research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  PhD in Physics, 18+ years experience
                </p>
                <Badge variant="outline" className="text-xs">
                  Research Specialist
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <CardTitle>Ms. Meera Gupta</CardTitle>
                <CardDescription>English & Communication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  MA English Literature, 10+ years experience
                </p>
                <Badge variant="outline" className="text-xs">
                  Communication Expert
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50 rounded-2xl">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Facilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              State-of-the-Art Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern facilities designed to enhance learning and provide the
              best educational experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Smart Classrooms"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Smart Classrooms</h3>
              <p className="text-muted-foreground">
                Interactive whiteboards, projectors, and modern seating
                arrangements
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Computer Lab"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Computer Labs</h3>
              <p className="text-muted-foreground">
                Latest computers with high-speed internet and software tools
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Science Lab"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Science Laboratory</h3>
              <p className="text-muted-foreground">
                Well-equipped labs for physics, chemistry, and biology
                experiments
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Library"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Digital Library</h3>
              <p className="text-muted-foreground">
                Extensive collection of books, journals, and digital resources
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Auditorium"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Auditorium</h3>
              <p className="text-muted-foreground">
                300-seat auditorium for seminars, presentations, and events
              </p>
            </div>

            <div className="text-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Cafeteria"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Cafeteria</h3>
              <p className="text-muted-foreground">
                Hygienic food court with variety of healthy meal options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">Student Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Rahul Kumar</CardTitle>
                    <CardDescription>Software Engineer at TCS</CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  "The computer science program here gave me the perfect
                  foundation. The faculty is excellent and the practical
                  approach helped me land my dream job."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>SP</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Sneha Patel</CardTitle>
                    <CardDescription>Data Analyst at Infosys</CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  "The mathematics and statistics course was comprehensive.
                  Small batch sizes meant I got personal attention from
                  professors."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Arjun Joshi</CardTitle>
                    <CardDescription>Research Scientist</CardDescription>
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
                <p className="text-sm text-muted-foreground">
                  "The research methodology course and lab facilities here are
                  top-notch. It prepared me well for my career in scientific
                  research."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">
              Our Achievements
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Outstanding Results & Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our consistent track record of excellence speaks for itself. Here
              are our achievements over the years.
            </p>
          </div>

          {/* Overall Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">
                  95%
                </CardTitle>
                <CardDescription>Overall Pass Rate</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">
                  92%
                </CardTitle>
                <CardDescription>Placement Success</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600">
                  150+
                </CardTitle>
                <CardDescription>Top Rankers</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-orange-600">
                  500+
                </CardTitle>
                <CardDescription>Company Tie-ups</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Year-wise Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Year-wise Performance
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-blue-600">
                    2023-24
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Students:</span>
                    <span className="font-bold">1,250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pass Rate:</span>
                    <span className="font-bold text-green-600">96%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Placements:</span>
                    <span className="font-bold text-blue-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Top Scorers:</span>
                    <span className="font-bold text-purple-600">65</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Avg. Package:</span>
                    <span className="font-bold text-orange-600">₹4.2L</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-blue-600">
                    2022-23
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Students:</span>
                    <span className="font-bold">1,180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pass Rate:</span>
                    <span className="font-bold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Placements:</span>
                    <span className="font-bold text-blue-600">91%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Top Scorers:</span>
                    <span className="font-bold text-purple-600">58</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Avg. Package:</span>
                    <span className="font-bold text-orange-600">₹3.8L</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold text-blue-600">
                    2021-22
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Students:</span>
                    <span className="font-bold">1,050</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Pass Rate:</span>
                    <span className="font-bold text-green-600">93%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Placements:</span>
                    <span className="font-bold text-blue-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Top Scorers:</span>
                    <span className="font-bold text-purple-600">52</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Avg. Package:</span>
                    <span className="font-bold text-orange-600">₹3.5L</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Recent Achievements & Awards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-sm">
                    Best Institute Award
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Education Excellence 2024
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-sm">ISO 9001:2015</CardTitle>
                  <CardDescription className="text-xs">
                    Quality Certification
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-sm">Top Placement</CardTitle>
                  <CardDescription className="text-xs">
                    Regional Recognition
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-sm">Innovation Award</CardTitle>
                  <CardDescription className="text-xs">
                    Teaching Excellence
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Top Performers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Star Performers 2023-24
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-yellow-600">
                      1st
                    </span>
                  </div>
                  <CardTitle>Priya Sharma</CardTitle>
                  <CardDescription>Computer Science Program</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Score: 98.5%
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    Placed at Google
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Package: ₹18 LPA
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-600">
                      2nd
                    </span>
                  </div>
                  <CardTitle>Rahul Kumar</CardTitle>
                  <CardDescription>Mathematics Program</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Score: 97.8%
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    Placed at Microsoft
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Package: ₹15 LPA
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      3rd
                    </span>
                  </div>
                  <CardTitle>Anita Singh</CardTitle>
                  <CardDescription>Science & Research</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Score: 96.9%
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    Research Position
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Package: ₹12 LPA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold mb-4">
                Be Part of Our Success Story
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who have achieved their
                dreams through our proven programs. Your success story could be
                next!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  View Detailed Results
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Result Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Visit Our Campus Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a campus tour or get in touch with our admissions team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Visit Our Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  123 Education Street
                </p>
                <p className="text-muted-foreground mb-4">
                  Knowledge City, State 560001
                </p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Admissions Helpline
                </p>
                <p className="font-semibold text-lg mb-4">+91 98765 43210</p>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">General Inquiries</p>
                <p className="font-semibold mb-4">
                  info@excellenceinstitute.edu
                </p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Course of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option value="">Select a course</option>
                    <option value="computer-science">
                      Computer Science & Programming
                    </option>
                    <option value="mathematics">
                      Mathematics & Statistics
                    </option>
                    <option value="science">Science & Research</option>
                    <option value="english">English & Communication</option>
                    <option value="business">Business & Management</option>
                    <option value="competitive">Competitive Exam Prep</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    rows={4}
                    placeholder="Tell us about your educational goals and any specific questions you have..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    I would like to receive updates about courses and events
                  </label>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours & Map */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-red-600 font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campus Location</CardTitle>
                  <CardDescription>
                    Find us on the map and plan your visit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 font-medium">
                        Interactive Campus Map
                      </p>
                      <p className="text-sm text-gray-400">
                        Google Maps integration
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a campus visit to explore our facilities, meet our
                faculty, and learn more about our programs. Our admissions team
                is here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule Campus Tour
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 rounded-t-2xl">
        <div className="container px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Excellence Institute</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students with quality education and practical skills
                for a successful future.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-white transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#faculty"
                    className="hover:text-white transition-colors"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="#facilities"
                    className="hover:text-white transition-colors"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Computer Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mathematics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Science & Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Exam Preparation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Education Street</li>
                <li>Knowledge City, State 560001</li>
                <li>+91 98765 43210</li>
                <li>info@excellenceinstitute.edu</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Excellence Institute. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
