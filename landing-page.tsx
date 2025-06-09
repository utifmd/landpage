"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TypewriterEffect } from "./components/typewriter-effect"
import {
  Heart,
  Code,
  Users,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Palette,
  Lightbulb,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [now, setNow] = useState(0);
  
  useEffect(() => {
    setNow(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-lg font-light tracking-wide text-stone-600">Utif Milkedori</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-light text-stone-800 leading-tight">
              <TypewriterEffect text="I solve problems with calm code." delay={80} className="block" />
            </h2>
            <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto">
              Crafting clean interfaces, one line at a time.
            </p>
          </div>

          {/* Abstract cozy graphic */}
          <div className="flex justify-center py-12">
            <div className="relative">  
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-100 to-stone-200 rounded-full opacity-60"></div>
                <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-br from-stone-200 to-amber-50 rounded-full opacity-80"></div>
                <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-amber-50 to-stone-100 rounded-full"></div>
              </div>
              <Code className="absolute top-19 left-19 w-26 h-26 text-stone-600 autoRotate" />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-stone-800 autoShow">About Me</h3>
              <p className="text-lg text-stone-600 leading-relaxed autoShow">
                I'm a mindful web developer who believes in the power of simplicity. With a focus on clean code and
                human-centered design, I create digital experiences that feel natural and effortless.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed autoShow">
                When I'm not coding, you'll find me practicing mindfulness, reading about design philosophy, or enjoying
                a quiet cup of tea while sketching new ideas.
              </p>

              {/* Values badges */}
              <div className="flex flex-wrap gap-4 pt-4 autoShow">
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="text-sm text-stone-700">Clarity</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-sm text-stone-700">Empathy</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full">
                  <Target className="w-4 h-4 text-stone-600" />
                  <span className="text-sm text-stone-700">Simplicity</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-stone-200 to-amber-100 rounded-2xl flex items-center justify-center">
                <Image
                  src="/avatar.jpeg"
                  // src="/placeholder.svg?height=300&width=300"
                  alt="Utif Milkedori"
                  width={300}
                  height={300}
                  className="rounded-xl opacity-80"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light text-stone-800 text-center mb-16 autoShow">My Values</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none bg-white autoShow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-medium text-stone-800">Mindful Design</h4>
                <p className="text-stone-600 leading-relaxed">
                  Every pixel serves a purpose. I believe in intentional design that respects both user attention and
                  digital wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-white autoShow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-stone-600" />
                </div>
                <h4 className="text-xl font-medium text-stone-800">Clean Code</h4>
                <p className="text-stone-600 leading-relaxed">
                  Code should be poetry. I write maintainable, readable code that future developers (including myself)
                  will thank me for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-white autoShow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-rose-400" />
                </div>
                <h4 className="text-xl font-medium text-stone-800">Human-Centered Interfaces</h4>
                <p className="text-stone-600 leading-relaxed">
                  Technology should feel human. I create interfaces that understand and adapt to real human needs and
                  behaviors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Highlight Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="highlight-grid highlight-grid-3">
            <div className="autoBLur">UTIFDEV +</div>
            <div className="autoBLur">LEARNER</div>
            <div className="autoBLur">ENGINEER</div>
            <div className="autoBLur">DEVELOPER</div>
            <div className="autoBLur"><a href="https://portfolio.utif.space">SEE MORE &#8599;</a></div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light text-stone-800 text-center mb-16">Recent Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-amber-50 to-stone-100 rounded-t-lg"></div>
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-medium text-stone-800">Mindful Task Manager</h4>
                  <p className="text-stone-600">
                    A gentle approach to productivity with focus on mental wellbeing and sustainable work habits.
                  </p>
                  <Button variant="ghost" className="text-stone-600 hover:text-stone-800 p-0">
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Let's Connect Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-light text-stone-800">Let's Connect</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              I'm always open to meaningful conversations about design, development, and creating digital experiences
              that matter.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center">
              <Link
                href="mailto:utifmd@gmail.com"
                className="flex items-center gap-3 text-lg text-stone-700 hover:text-stone-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                utifmd@gmail.com
              </Link>
            </div>

            <div className="flex justify-center gap-8">
              <Link
                href="https://github.com/utifmd"
                className="text-stone-600 hover:text-stone-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/utifmd"
                className="text-stone-600 hover:text-stone-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/utifmd"
                className="text-stone-600 hover:text-stone-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-600 text-sm">
              © {now} Utif Milkedori. Crafted with mindfulness.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-stone-500 hover:text-stone-700 text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-stone-500 hover:text-stone-700 text-sm transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
