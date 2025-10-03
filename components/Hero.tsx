"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiA2YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Anupam Paudel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Anupam Paudel
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 font-semibold">
              Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Leveraging frontend development skills, technical expertise, and passion for innovation to build cutting-edge web solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition duration-300"
            >
              View Projects
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 animate-bounce cursor-pointer bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
