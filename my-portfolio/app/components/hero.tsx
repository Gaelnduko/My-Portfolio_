"use client"
import { Github, Linkedin, Mail, Mouse } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold gradient-text">Your Name</h1>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Frontend Developer</h2>
          <p className="text-lg text-secondary">Aspiring Real Estate Tech Innovator</p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Crafting innovative digital experiences with modern web technologies. Passionate about building solutions that
          make a difference.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            Get In Touch <span className="text-lg">→</span>
          </a>
          <a
            href="#projects"
            className="border border-border px-8 py-3 rounded-full font-semibold hover:border-accent transition-all"
          >
            View Projects
          </a>
        </div>

        <div className="flex gap-6 justify-center pt-12">
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Github size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-primary hover:opacity-80 transition-opacity">
            <Mail size={24} />
          </a>
        </div>

        <div className="pt-12 flex justify-center animate-bounce">
          <Mouse size={24} className="text-primary/50" />
        </div>
      </div>
    </section>
  )
}
