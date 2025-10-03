import { Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Objective
                </h3>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To leverage my frontend development skills, technical expertise, and passion for innovation to contribute to cutting-edge web development and UI/UX projects while continuously growing in the dynamic IT industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
