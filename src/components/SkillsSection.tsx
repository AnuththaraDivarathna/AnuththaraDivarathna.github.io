export function SkillsSection() {
  const technicalSkills = [
    "User Research Methods", "User Interviews", "Surveys", "Card Sorting", "A/B Testing",
    "Wireframing", "Visual Design", "Prototyping", "Responsive Design", "Information Architecture (IA)",
    "Accessibility Best Practices (WCAG)", "HTML", "CSS", "JavaScript", "Angular", "React",
    "Bootstrap", "Material Design"
  ];

  const tools = [
    "Figma", "VS Code", "Adobe Premiere Pro", "Canva", "Android Studio", "Eclipse IDE",
    "Google Firebase Console", "Git & GitHub", "Microsoft Apps", "Google Apps"
  ];

  const softSkills = [
    "Fast Learning", "Creative Thinking", "Leadership Skills", "Analytical Thinking", "Fluent English"
  ];

  const SkillCategory = ({ title, skills, icon }: {
    title: string;
    skills: string[];
    icon: string;
  }) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">{icon}</span>
        </div>
        <h3 className="text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-small text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-full transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Skills &amp; Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning design methodology, technical implementation, and collaborative leadership.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-12">
          <SkillCategory
            title="Technical Skills"
            skills={technicalSkills}
            icon="⚡"
          />
          <SkillCategory
            title="Design Tools"
            skills={tools}
            icon="🛠️"
          />
          <SkillCategory
            title="Soft Skills"
            skills={softSkills}
            icon="🧠"
          />
        </div>

        {/* Skill Proficiency */}

      </div>
    </section>
  );
}