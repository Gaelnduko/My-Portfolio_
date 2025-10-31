"use client"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "AgriConnect",
      description:
        "A comprehensive agricultural management platform connecting farmers with modern farming technologies and market insights.",
      gradient: "from-teal-500 to-green-600",
    },
    {
      title: "Drivana",
      description:
        "An innovative car driving application featuring route planning, vehicle management, and real-time navigation.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Google UI Clone",
      description:
        "A pixel-perfect recreation of Google's search interface, showcasing attention to detail and CSS mastery.",
      gradient: "from-gray-300 to-gray-400",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-16 h-1 gradient-underline mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`h-48 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 overflow-hidden`}></div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
