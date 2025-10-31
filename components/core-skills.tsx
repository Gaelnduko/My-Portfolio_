"use client"

export default function CoreSkills() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "TailwindCSS",
    "Django & Python",
    "RESTful APIs",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Design",
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Core Skills</h2>
          <div className="w-16 h-1 gradient-underline mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge hover:border-accent/80 transition-all cursor-pointer">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
