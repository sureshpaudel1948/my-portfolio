import { Code as Code2, Database, Wrench, Palette } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "C", "C++", "Python", "Java", "Node.js"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: Code2,
      skills: ["React.js", "Next.js"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL"],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "RESTful APIs"],
      color: "orange"
    },
    {
      title: "UI/UX Design Tools",
      icon: Palette,
      skills: ["Figma", "Canva", "Photoshop"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; iconBg: string } } = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        iconBg: "bg-blue-600"
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        iconBg: "bg-green-600"
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        iconBg: "bg-orange-600"
      },
      purple: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        border: "border-pink-200",
        iconBg: "bg-pink-600"
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 ${colors.iconBg} rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-white ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
