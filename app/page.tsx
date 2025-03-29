import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Users,
  BarChart3,
  Handshake,
  Calendar,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Healthmour Logo" width={150} height={40} className="h-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-primary">
              Programs
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-primary">
              Our Impact
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Volunteer
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Donate Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#e6f7e6] to-[#e6f7ff]">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Monitoring. Organization. <span className="text-[#2a9dd1]">Understanding.</span>{" "}
              <span className="text-[#8cc63f]">Resolution.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Empowering communities through healthcare initiatives, education, and sustainable development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#2a9dd1] hover:bg-[#2a9dd1]/90">
                Our Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Healthcare workers helping communities"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#2a9dd1]">15+</span>
              <span className="text-sm text-muted-foreground">Years of Service</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#2a9dd1]">50k+</span>
              <span className="text-sm text-muted-foreground">Lives Impacted</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#2a9dd1]">120+</span>
              <span className="text-sm text-muted-foreground">Communities Served</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-[#2a9dd1]">200+</span>
              <span className="text-sm text-muted-foreground">Volunteers</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Healthmour</h2>
            <p className="text-muted-foreground max-w-[800px]">
              We are dedicated to improving health outcomes and quality of life in underserved communities through
              monitoring, organization, understanding, and resolution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our mission in action"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide accessible healthcare solutions and education to communities in need, while building
                  sustainable systems for long-term health improvement.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every person has access to quality healthcare, regardless of their socioeconomic status
                  or geographic location.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[#8cc63f]" />
                    <span>Compassion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#8cc63f]" />
                    <span>Community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[#8cc63f]" />
                    <span>Accountability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-[#8cc63f]" />
                    <span>Integrity</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="mt-4">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Programs</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Discover how we're making a difference through our various initiatives and programs.
            </p>
          </div>
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="community">Community Development</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="healthcare" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Mobile Health Clinics</h3>
                    <p className="text-muted-foreground">
                      Bringing essential healthcare services directly to remote and underserved communities.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Maternal & Child Health</h3>
                    <p className="text-muted-foreground">
                      Supporting mothers and children with prenatal care, nutrition, and early childhood development.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Disease Prevention</h3>
                    <p className="text-muted-foreground">
                      Implementing vaccination campaigns and preventive health measures to reduce disease burden.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="education" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">Health Education</h3>
                    <p className="text-muted-foreground">
                      Providing communities with knowledge about preventive healthcare and healthy living practices.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">Healthcare Training</h3>
                    <p className="text-muted-foreground">
                      Training local healthcare workers to provide sustainable medical services in their communities.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">School Health Programs</h3>
                    <p className="text-muted-foreground">
                      Implementing health education and screening programs in schools to promote child wellbeing.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="community" className="space-y-4">
              {/* Community Development Content */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Water & Sanitation</h3>
                    <p className="text-muted-foreground">
                      Improving access to clean water and sanitation facilities to prevent waterborne diseases.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Nutrition Programs</h3>
                    <p className="text-muted-foreground">
                      Addressing malnutrition through food security initiatives and nutrition education.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#2a9dd1]" />
                    </div>
                    <h3 className="text-xl font-bold">Economic Empowerment</h3>
                    <p className="text-muted-foreground">
                      Supporting income-generating activities to improve household finances and health outcomes.
                    </p>
                    <Link href="#" className="text-[#2a9dd1] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="research" className="space-y-4">
              {/* Research Content */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">Health Monitoring</h3>
                    <p className="text-muted-foreground">
                      Collecting and analyzing health data to identify trends and inform intervention strategies.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">Impact Assessment</h3>
                    <p className="text-muted-foreground">
                      Evaluating the effectiveness of our programs to ensure they meet community needs.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#8cc63f]/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-bold">Collaborative Studies</h3>
                    <p className="text-muted-foreground">
                      Partnering with academic institutions to conduct research on community health challenges.
                    </p>
                    <Link href="#" className="text-[#8cc63f] font-medium flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-[800px]">
              See how our work has made a difference in communities around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Healthcare Access</h3>
                  <span className="text-[#2a9dd1] font-bold">85%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2a9dd1] rounded-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Increase in healthcare access in our target communities</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Child Vaccination</h3>
                  <span className="text-[#2a9dd1] font-bold">92%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2a9dd1] rounded-full" style={{ width: "92%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Vaccination coverage for children under 5 years</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Maternal Health</h3>
                  <span className="text-[#2a9dd1] font-bold">78%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2a9dd1] rounded-full" style={{ width: "78%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Reduction in maternal mortality in program areas</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Clean Water Access</h3>
                  <span className="text-[#2a9dd1] font-bold">65%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2a9dd1] rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Increase in access to clean water sources</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg">
                <blockquote className="text-lg italic mb-4">
                  "Healthmour's mobile clinic program has transformed healthcare access in our village. Children who
                  previously had no medical care now receive regular check-ups and vaccinations."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Community Leader, El Salvador</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                <blockquote className="text-lg italic mb-4">
                  "The health education program has empowered our community with knowledge about disease prevention.
                  We've seen a significant decrease in preventable illnesses."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-medium">John Mwangi</p>
                    <p className="text-sm text-muted-foreground">Health Worker, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Join us at our upcoming events and be part of our mission to improve global health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Health Fair" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="h-4 w-4 inline-block mr-1" />
                    Apr 15, 2025
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Annual Health Fair</h3>
                  <p className="text-muted-foreground">
                    Join us for free health screenings, educational workshops, and family activities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">New York, USA</span>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Fundraising Gala"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="h-4 w-4 inline-block mr-1" />
                    May 20, 2025
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Fundraising Gala</h3>
                  <p className="text-muted-foreground">
                    An evening of celebration and fundraising to support our global health initiatives.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">London, UK</span>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Health Conference"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="h-4 w-4 inline-block mr-1" />
                    Jun 10, 2025
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Global Health Conference</h3>
                  <p className="text-muted-foreground">
                    A gathering of health professionals to discuss challenges and innovations in global health.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Geneva, Switzerland</span>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Have questions or want to get involved? Reach out to us today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center mt-1">
                  <MapPin className="h-5 w-5 text-[#2a9dd1]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Our Headquarters</h3>
                  <p className="text-muted-foreground">Mangalagiri, Andra Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center mt-1">
                  <Mail className="h-5 w-5 text-[#2a9dd1]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <p className="text-muted-foreground">info@healthmour.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2a9dd1]/10 flex items-center justify-center mt-1">
                  <Phone className="h-5 w-5 text-[#2a9dd1]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Call Us</h3>
                  <p className="text-muted-foreground">+91 123-456789</p>
                </div>
              </div>
              <div className="pt-6">
                <iframe
                  className="w-full h-[300px] rounded-lg border"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1648482801994!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#2a9dd1] hover:bg-[#2a9dd1]/90">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-[#2a9dd1]/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Stay Updated</h2>
              <p className="text-muted-foreground max-w-[500px]">
                Subscribe to our newsletter to receive updates on our work, events, and ways to get involved.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full sm:w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-[#8cc63f] hover:bg-[#8cc63f]/90">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/logo.png"
                alt="Healthmour Logo"
                width={150}
                height={60}
                className="h-auto bg-white p-2 rounded-md"
              />
              <p className="text-slate-400">
                Dedicated to improving health outcomes and quality of life in underserved communities worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2a9dd1]"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2a9dd1]"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2a9dd1]"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2a9dd1]"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-slate-400 hover:text-white">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-slate-400 hover:text-white">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-slate-400 hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Community Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#8cc63f] mt-0.5" />
                  <span className="text-slate-400">123 Mangalagiri, Andra Pradesh, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#8cc63f] mt-0.5" />
                  <span className="text-slate-400">info@healthmour.org</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-[#8cc63f] mt-0.5" />
                  <span className="text-slate-400">+91 123-456789</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Healthmour. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

