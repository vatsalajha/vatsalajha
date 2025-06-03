"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Download, Menu, X, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", "AWS", 
    "Docker", "GraphQL", "PostgreSQL", "MongoDB", "Jenkins", "Kubernetes",
    "JavaScript", "Java", "C++", "Go", "HTML/CSS", "Kotlin", "Express", "Flask", "FastAPI", "GitHub Actions", "Grafana", "Prometheus", "VS Code", "CI/CD", "Linux", "Git", "Kafka", "GenAI", "ML", "Flan-T5", "LoRA", "FAISS", "SBERT", "spaCy", "scikit-learn", "HuggingFace", "MySQL", "DynamoDB", "AWS Lambda", "S3", "API Gateway", "EC2", "GCP", "Algorithms", "Data Structures", "Operating Systems", "Software Engineering Principles", "OOP", "MVC"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* About Section - Now the first section */}
      <section id="about" className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-2xl text-jet-black mb-8">
                The Vatsala Jha Story
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">Curious Engineer</h3>
                <p className="text-gray-charcoal leading-relaxed">Self-taught since age 12, I discovered my passion for creating digital solutions that make technology accessible to everyone. My journey spans from backend infrastructure to AI-powered applications.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">Accessibility Champion</h3>
                <p className="text-gray-charcoal leading-relaxed">Currently focused on building inclusive digital experiences at Rutgers University, where I've automated accessibility improvements for 5000+ images and developed process automation tools.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">Performance Advocate</h3>
                <p className="text-gray-charcoal leading-relaxed">Reduced deployment lag by 73% and optimized CI/CD pipelines across enterprise environments. I believe in building systems that scale beautifully while maintaining exceptional user experiences.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">Lifelong Learner</h3>
                <p className="text-gray-charcoal leading-relaxed">Pursuing my MS in Computer Science at Rutgers while exploring cutting-edge technologies like RAG-based AI assistants and real-time pose estimation systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-jet-black mb-12">Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-subtle-light shadow-subtle p-8 flex flex-col justify-between h-full group transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-8 transform rotate-45 overflow-hidden rounded-sm border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/minimal-line-illustration-of-modern-univ-f973cd14-20250603165355.jpg?"
                  alt="Rutgers University"
                  fill
                  className="object-cover transform -rotate-45 scale-150"
                />
              </div>
              <CardContent className="p-0 text-center flex-1 flex flex-col justify-between">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-4">Masters of Science</h3>
                <p className="text-gray-charcoal mb-4 leading-relaxed">Rutgers University, Computer Science - GPA: 3.8/4</p>
                <p className="text-sm text-gray-charcoal mb-6 leading-relaxed">January 2024 - December 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-subtle-light shadow-subtle p-8 flex flex-col justify-between h-full group transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-8 transform rotate-45 overflow-hidden rounded-sm border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/modern-european-campus-scene-illustratio-1af132ca-20250603165405.jpg?"
                  alt="PES University"
                  fill
                  className="object-cover transform -rotate-45 scale-150"
                />
              </div>
              <CardContent className="p-0 text-center flex-1 flex flex-col justify-between">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-4">Bachelor of Science</h3>
                <p className="text-gray-charcoal mb-4 leading-relaxed">PES University, Computer Science - GPA: 3.7/4</p>
                <p className="text-sm text-gray-charcoal mb-6 leading-relaxed">July 2017 - July 2021</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-subtle-light shadow-subtle p-8 flex flex-col justify-between h-full group transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto mb-8 transform rotate-45 overflow-hidden rounded-sm border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/stack-of-certification-documents-illustr-0137f85a-20250603165414.jpg?"
                  alt="Certifications"
                  fill
                  className="object-cover transform -rotate-45 scale-150"
                />
              </div>
              <CardContent className="p-0 text-center flex-1 flex flex-col justify-between">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm text-gray-charcoal mb-6">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Generative AI with AWS - Udacity</p>
                      <p className="text-xs">Issued May 2025 • AI, LLM, ML, AWS</p>
                    </div>
                    <div>
                      <p className="font-medium">Data Structures & Algorithms - CodePath</p>
                      <p className="text-xs">Issued May 2025 • Python, DSA</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Coding Assessment 600/600 - CodeSignal</p>
                      <p className="text-xs">Issued Mar 2025 • C++, DSA</p>
                    </div>
                    <div>
                      <p className="font-medium">Algorithmic Challenge 96% - CodeToJapan</p>
                      <p className="text-xs">Issued Jan 2021 • C++, Competitive Programming</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-jet-black mb-12">Industry Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rutgers University */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/rutgers-university-logo-rendered-on-circ-d23a1446-20250603165424.jpg?"
                  alt="Rutgers University"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Rutgers University</h3>
                <div className="text-left space-y-3 text-xs text-gray-charcoal">
                  <div>
                    <p className="font-medium text-accents-gold">Senior Accessibility Developer</p>
                    <p>Jan 2025 - Present</p>
                    <p>Python, Drupal, React.js, HTML/CSS</p>
                  </div>
                  <div>
                    <p className="font-medium text-accents-gold">Computer Science Grader</p>
                    <p>Jan 2025 - May 2025</p>
                    <p>Java, Android Studio, Flutter</p>
                  </div>
                  <div>
                    <p className="font-medium text-accents-gold">Accessibility Assistant</p>
                    <p>Jan 2024 - Jan 2025</p>
                    <p>Python, Data Visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blueprint */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cohesity-logo-rendered-on-circular-ceram-ca65f3c3-20250603165434.jpg?"
                  alt="Blueprint"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Frontend Education Director</h3>
                <p className="text-accents-gold font-medium mb-2 text-sm">Blueprint</p>
                <p className="text-xs text-gray-charcoal mb-3">Sep 2024 - Present</p>
                <div className="text-left text-xs text-gray-charcoal space-y-1">
                  <p>• Mentored students on React, TypeScript, JavaScript</p>
                  <p>• Led lectures on state management & API integration</p>
                  <p>• Coached project development & presentations</p>
                </div>
              </CardContent>
            </Card>

            {/* Cohesity */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cohesity-logo-rendered-on-circular-ceram-ca65f3c3-20250603165434.jpg?"
                  alt="Cohesity"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Software Engineer 2</h3>
                <p className="text-accents-gold font-medium mb-2 text-sm">Cohesity</p>
                <p className="text-xs text-gray-charcoal mb-3">Jul 2021 - 2023</p>
                <div className="text-left text-xs text-gray-charcoal space-y-1">
                  <p>• Built developer productivity tools & dashboards</p>
                  <p>• Modernized Jenkins CI/CD automation</p>
                  <p>• Improved debugging & release tracking</p>
                </div>
              </CardContent>
            </Card>

            {/* Hermitcrabs */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cohesity-logo-rendered-on-circular-ceram-ca65f3c3-20250603165434.jpg?"
                  alt="Hermitcrabs"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Web Development Intern</h3>
                <p className="text-accents-gold font-medium mb-2 text-sm">Hermitcrabs</p>
                <p className="text-xs text-gray-charcoal mb-3">Feb 2021 - Apr 2021</p>
                <div className="text-left text-xs text-gray-charcoal space-y-1">
                  <p>• Built web pages with HTML, CSS, JavaScript</p>
                  <p>• Developed interactive marketing features</p>
                </div>
              </CardContent>
            </Card>

            {/* JPMorgan Chase */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cohesity-logo-rendered-on-circular-ceram-ca65f3c3-20250603165434.jpg?"
                  alt="JPMorgan Chase"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Software Developer Virtual Intern</h3>
                <p className="text-accents-gold font-medium mb-2 text-sm">JPMorgan Chase</p>
                <p className="text-xs text-gray-charcoal mb-3">Apr 2020 - May 2020</p>
                <div className="text-left text-xs text-gray-charcoal space-y-1">
                  <p>• Financial Data Feeds</p>
                  <p>• Frontend Web Development</p>
                  <p>• Data Visualization with Perspective</p>
                </div>
              </CardContent>
            </Card>

            {/* Other Internships */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border border-subtle-light">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cohesity-logo-rendered-on-circular-ceram-ca65f3c3-20250603165434.jpg?"
                  alt="Other Internships"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-0 text-center">
                <h3 className="font-sans font-semibold text-base uppercase tracking-wide text-indigo-dark mb-2">Early Internships</h3>
                <div className="text-left text-xs text-gray-charcoal space-y-2">
                  <div>
                    <p className="font-medium text-accents-gold">IdealVillage</p>
                    <p>Software Engineer Intern</p>
                    <p>Mar 2020 - Apr 2020</p>
                  </div>
                  <div>
                    <p className="font-medium text-accents-gold">Tvish</p>
                    <p>Frontend Engineer</p>
                    <p>Oct 2019 - Jan 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/halftone-network-diagram-of-interconnect-69aaecd6-20250603165443.jpg?"
            alt="Network background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-jet-black mb-8">
              EXPLORE <em className="font-normal">my</em> PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fan Fiction Generator - NEW */}
            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">Fan Fiction Generator</h3>
                <p className="text-gray-charcoal mb-4">Innovative fan fiction generator using Llama 4 API with 1M token context window for interactive alternate-universe stories</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Python</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Flask</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Streamlit</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Llama 4 API</Badge>
                </div>
                <p className="text-xs text-gray-charcoal mb-4">Llama 4 Hackathon, NYC • June 2025</p>
                <div className="flex gap-4">
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Demo <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Code <Github className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">HerMaps</h3>
                <p className="text-gray-charcoal mb-4">Campus Facility Tracker with Google Maps API, WebSocket, and RAG-based Groq AI assistant</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">React</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Node.js</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">MongoDB</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Demo <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Code <Github className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">MoveMend</h3>
                <p className="text-gray-charcoal mb-4">AI Physiotherapy Assistant with real-time pose estimation using BlazePose and WebGL</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">TensorFlow.js</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">WebGL</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">Groq AI</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Demo <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Code <Github className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-subtle-light shadow-subtle p-6 group transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="font-sans font-semibold text-lg uppercase tracking-wide text-indigo-dark mb-3">SkillForge</h3>
                <p className="text-gray-charcoal mb-4">LLM-Powered Resume Enhancer with Flan-T5, deployed on AWS Lambda with serverless architecture</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">FastAPI</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">AWS Lambda</Badge>
                  <Badge className="bg-subtle-light text-gray-charcoal text-xs">LoRA</Badge>
                </div>
                <div className="flex gap-4">
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Demo <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="link" size="sm" className="text-accents-gold p-0 h-auto">
                    Code <Github className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-2xl text-jet-black mb-4">Core Skillset</h2>
              <p className="text-gray-charcoal mb-8">A snapshot of languages & tools I use daily.</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill} className="bg-white text-gray-charcoal border border-subtle px-4 py-2 text-sm font-medium rounded-full">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="rounded-full bg-accents-gold hover:bg-gold-dark text-black px-8">
                VIEW FULL STACK <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/cute-minimalist-line-art-of-smiling-lapt-03d20f73-20250603165454.jpg?"
                  alt="Laptop mascot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/female-developer-giving-conference-talk--3d4ae639-20250603165505.jpg?"
                alt="Conference speaking"
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/close-up-of-hands-mentoring-junior-coder-ddcda88c-20250603165514.jpg?"
                alt="Mentoring"
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/67067dcc-c7a7-4ce9-ba3e-fde3a5d59f71/generated_images/team-celebrating-hackathon-win-raising-t-1f33aa87-20250603165523.jpg?"
                alt="Hackathon wins"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-subtle">
              <div className="mb-4 md:mb-0">
                <h3 className="font-sans font-medium text-lg text-indigo-dark mb-2">Email</h3>
                <p className="text-gray-charcoal">jha.vatsala@rutgers.edu</p>
              </div>
              <a href="mailto:jha.vatsala@rutgers.edu" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-accents-gold hover:bg-gold-dark text-black px-6">
                  <Mail className="w-4 h-4 mr-2" />
                  SEND EMAIL
                </Button>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-subtle">
              <div className="mb-4 md:mb-0">
                <h3 className="font-sans font-medium text-lg text-indigo-dark mb-2">LinkedIn</h3>
                <p className="text-gray-charcoal">linkedin.com/in/vatsala-jha</p>
              </div>
              <a href="https://linkedin.com/in/vatsala-jha" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full border-subtle text-indigo-dark hover:bg-white px-6">
                  <Linkedin className="w-4 h-4 mr-2" />
                  CONNECT
                </Button>
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8">
              <div className="mb-4 md:mb-0">
                <h3 className="font-sans font-medium text-lg text-indigo-dark mb-2">GitHub</h3>
                <p className="text-gray-charcoal">github.com/vatsalajha</p>
              </div>
              <a href="https://github.com/vatsalajha" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full border-subtle text-indigo-dark hover:bg-white px-6">
                  <Github className="w-4 h-4 mr-2" />
                  FOLLOW
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-subtle">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-charcoal font-sans">
            ©2024 Vatsala Jha. Built with love & accessible design.
          </p>
        </div>
      </footer>
    </div>
  );
}

const Header=() => (
  // Sticky Navigation
  <nav className="fixed top-0 w-full bg-cream border-b border-subtle z-50 h-20">
    <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 h-full flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="font-serif text-xl text-jet-black leading-tight">
          <div>Vatsala Jha</div>
          <div className="text-xs font-sans uppercase tracking-wider text-gray-charcoal">PORTFOLIO</div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" className="text-xs font-medium font-sans uppercase tracking-wide text-jet-black hover:text-accents-gold transition-colors relative group">
          About
          <span className="absolute left-0 bottom-0 w-0 h-px bg-accents-gold transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="text-xs font-medium font-sans uppercase tracking-wide text-jet-black hover:text-accents-gold transition-colors relative group">
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-px bg-accents-gold transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="#skills" className="text-xs font-medium font-sans uppercase tracking-wide text-jet-black hover:text-accents-gold transition-colors relative group">
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-px bg-accents-gold transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="#community" className="text-xs font-medium font-sans uppercase tracking-wide text-jet-black hover:text-accents-gold transition-colors relative group">
          Community
          <span className="absolute left-0 bottom-0 w-0 h-px bg-accents-gold transition-all duration-200 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="text-xs font-medium font-sans uppercase tracking-wide text-jet-black hover:text-accents-gold transition-colors relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-px bg-accents-gold transition-all duration-200 group-hover:w-full"></span>
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <a 
          href="https://drive.google.com/file/d/1opDqJz36y31mAvJWhPBMgd-jNFUiSl8J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="sm" className="rounded-full h-11 px-6 border-subtle text-jet-black hover:bg-cream-light transition-all duration-200 active:scale-95">
            <Download className="w-4 h-4 mr-2" />
            Résumé
          </Button>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jha.vatsala@rutgers.edu" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="rounded-full h-11 px-6 bg-accents-gold hover:bg-gold-dark text-black transition-all duration-200 active:scale-95">
            HireMe
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </div>
    </div>
  </nav>
)