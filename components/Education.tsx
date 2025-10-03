import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Sc. CSIT",
      institution: "Madan Bhandari Memorial College, Tribhuvan University",
      period: "2021 – 2025",
      description: "Comprehensive IT curriculum integrating theory and practice"
    },
    {
      degree: "+2 Science",
      institution: "Prativa Secondary School, Pokhara",
      period: "Completed: 2018",
      description: ""
    },
    {
      degree: "SEE",
      institution: "Beni Community Secondary School, Myagdi",
      period: "Completed: 2016",
      description: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 pb-8 border-l-4 border-blue-600 last:pb-0"
            >
              <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-blue-100">
                <div className="flex items-center space-x-2 text-blue-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{edu.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-gray-600 italic">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
