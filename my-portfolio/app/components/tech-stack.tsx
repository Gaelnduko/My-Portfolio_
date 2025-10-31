"use client"

export default function TechStack() {
  const frontend = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TailwindCSS", icon: "💨" },
    { name: "Framer Motion", icon: "✨" },
  ]

  const backend = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "Node.js", icon: "💚" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Firebase", icon: "🔥" },
  ]

  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 gradient-underline mx-auto"></div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontend.map((tech, index) => (
              <div key={index} className="feature-card text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backend.map((tech, index) => (
              <div key={index} className={`feature-card text-center ${index === 2 ? "highlighted" : ""}`}>
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
