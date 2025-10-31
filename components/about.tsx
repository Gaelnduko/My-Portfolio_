"use client"

export default function About() {
  const traits = [
    {
      icon: "</>",
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description: "Turning complex challenges into simple solutions",
    },
    {
      icon: "🚀",
      title: "Fast Learner",
      description: "Always exploring new technologies",
    },
    {
      icon: "🎯",
      title: "Goal-Oriented",
      description: "Focused on delivering real value",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 gradient-underline mx-auto"></div>
        </div>

        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate frontend developer with a keen interest in real estate technology. My journey in web
            development started with curiosity and has evolved into a love for creating seamless, user-centric digital
            experiences.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in building modern web applications using React, Django, and the latest web technologies. My
            goal is to bridge the gap between innovative ideas and practical solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traits.map((trait, index) => (
            <div key={index} className={`feature-card ${index === 1 ? "highlighted" : ""}`}>
              <div className="text-3xl mb-4">{trait.icon}</div>
              <h3 className="text-xl font-bold mb-2">{trait.title}</h3>
              <p className="text-muted-foreground">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
