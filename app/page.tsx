"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import CoreSkills from "@/components/core-skills"
import FeaturedProjects from "@/components/featured-projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CoreSkills />
        <TechStack />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
