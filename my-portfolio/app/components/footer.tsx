"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-primary">Your Name</h3>
            <p className="text-muted-foreground">Building the future, one line of code at a time.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-primary hover:opacity-80 transition-opacity">
              <Github size={24} />
            </a>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-primary hover:opacity-80 transition-opacity">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
