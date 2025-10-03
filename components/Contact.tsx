import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9826170721 / 9748429924",
      href: "tel:+9779826170721"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sureshpaudel59@gmail.com",
      href: "mailto:sureshpaudel59@gmail.com"
    },
    {
      icon: Mail,
      label: "Work Email",
      value: "anupamatwork59@gmail.com",
      href: "mailto:anupamatwork59@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tinkune, Kathmandu",
      href: ""
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "suresh-paudel",
      href: "https://www.linkedin.com/in/suresh-paudel"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "sureshpaudel1948",
      href: "https://github.com/sureshpaudel1948"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300 border border-white/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-100 mb-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-blue-200 transition"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Connect With Me
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition duration-300 shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
