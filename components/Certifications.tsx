import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Johns Hopkins University",
      date: "Nov 2024",
      credential: "XTCSIKYUN8Q8"
    },
    {
      title: "Frontend Development",
      issuer: "CodSoft",
      date: "Oct 2023",
      credential: "d9fabc3"
    },
    {
      title: "UI/UX Designing Workshop",
      issuer: "Madan Bhandari Memorial College",
      date: "2023",
      credential: ""
    },
    {
      title: "JS/React Workshop",
      issuer: "Madan Bhandari Memorial College",
      date: "2023",
      credential: ""
    },
    {
      title: "Internet Fundamentals",
      issuer: "codedamn",
      date: "Nov 2022",
      credential: "186388673a0b30e43e0588a7055e1477a3bcdc0a"
    },
    {
      title: "Frontend Development",
      issuer: "Great Learning",
      date: "Jul 2022",
      credential: ""
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                {cert.credential && (
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                )}
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-2 flex-grow">
                {cert.title}
              </h3>

              <div className="space-y-1">
                <p className="text-gray-700 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-600">
                  {cert.date}
                </p>
                {cert.credential && (
                  <p className="text-xs text-blue-600 font-mono bg-blue-50 p-2 rounded mt-2 break-all">
                    {cert.credential}
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
