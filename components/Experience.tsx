import { Briefcase, Calendar, CircleCheck as CheckCircle } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    "Built company website from scratch, iterating UI/UX layouts",
    "Developed CMS with Node.js + PostgreSQL",
    "Created TDS Report Generator for PDF-based reporting",
    "Designed AI chatbot for internal policy FAQs using Python",
    "Conducted rigorous API testing using Postman"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-12 border-l-4 border-blue-600">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Briefcase className="w-4 h-4 text-white" />
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center space-x-2 text-blue-600 mb-3">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-semibold">Jan 2024 – Present</span>
              </div>

              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                Frontend Developer
              </h3>

              <p className="text-xl text-gray-700 font-medium mb-6">
                City Wallet Pvt. Ltd.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Responsibilities:
                </h4>
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
