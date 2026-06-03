import { useState } from "react";
import { Link } from "react-router";
import { Mail, Linkedin, Menu, X } from "lucide-react";
import profileImage from "../../imports/Untitled.jpeg";
import { projects } from "../data/projects";

export function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl tracking-tight">Ellie Krauss-Wright</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("work")} className="hover:text-gray-600 transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection("work")} className="block w-full text-left hover:text-gray-600">
                Work
              </button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left hover:text-gray-600">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left hover:text-gray-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 md:pt-8">
              <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
                Innovative Designer
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Creating meaningful designs that resonate with audiences.
              </p>
              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                View My Work
              </button>
            </div>
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Ellie Krauss-Wright"
                className="w-64 h-auto md:w-80"
                style={{
                  imageRendering: "crisp-edges",
                  WebkitFontSmoothing: "antialiased",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] mb-4 overflow-hidden flex items-center justify-center ${
                  item.category === "Logo Design" && !item.transparentBg
                    ? "bg-white border border-gray-200"
                    : item.category === "Logo Design" && item.transparentBg
                    ? "bg-white"
                    : item.category === "Brand Design" && !item.transparentBg
                    ? "bg-white border border-gray-200"
                    : item.category === "Brand Design" && item.transparentBg
                    ? "bg-white"
                    : item.category === "Print"
                    ? "bg-white border border-gray-200"
                    : item.category === "Branding"
                    ? "bg-white border border-gray-200"
                    : item.category === "Human Centred Design"
                    ? "bg-white border border-gray-200"
                    : "bg-gray-200"
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${
                      item.category === "Logo Design" || item.category === "Brand Design" || item.category === "Print"
                        ? "w-3/4 h-3/4 object-contain"
                        : item.category === "Branding" || item.category === "Human Centred Design"
                        ? "w-2/3 h-2/3 object-contain"
                        : "w-full h-full object-cover"
                    } group-hover:scale-105 transition-transform duration-500`}
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl group-hover:underline">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm an innovative designer specialising in brand identity, editorial design, and visual storytelling.
                  With a keen eye for detail and a passion for minimalist aesthetics, I help brands communicate
                  their message through thoughtful design.
                </p>
                <p>
                  My work combines strategic thinking with creative execution, ensuring every project not only
                  looks beautiful but also serves its intended purpose effectively.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-6">Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Brand Design
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Logo Design
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Editorial & Print Design
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Packaging Design
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  UX/UI Design
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Human Centred Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
            </p>

            <div className="flex gap-6 mb-12">
              <a
                href="mailto:la.wright10@hotmail.com"
                className="flex items-center gap-2 hover:text-gray-400 transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/ellie-wright10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="text-sm text-gray-500">
              © 2026 Ellie Krauss-Wright. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
