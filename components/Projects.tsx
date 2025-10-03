import { ExternalLink, Globe } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "CityPay Official Website",
      description: "Built a responsive website with maps, app download features, and CMS",
      url: "https://citywallet.com.np",
      image: "/citypay.png"
    },
    {
      title: "PSP Association Nepal",
      description: "Professional website for the Payment Service Providers Association of Nepal",
      url: "https://pspan.org.np",
      image: "/psp.png"
    },
    {
      title: "Stellar HR Consultancy",
      description: "Corporate website for Malta-based HR consultancy firm",
      url: "https://sureshpaudel1948.github.io/bigedu-malta-cms/",
      image: "/stellar.png"
    },
    {
      title: "Param Satya Website",
      description: "Engaging fact-based platform built with HTML, CSS, JavaScript",
      url: "https://sureshpaudel1948.github.io/CODSOFT-Web-Dev-Task-2-Landing-Page/",
      image: "/param.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of websites and applications I have developed
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition">
                    {project.title}
                  </h3>
                  <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
