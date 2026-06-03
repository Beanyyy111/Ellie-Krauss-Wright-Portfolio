import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import discoveryCoachingMockup from "../../imports/Untitled_design.png";
import discoveryCoachingMockup2 from "../../imports/Untitled_design__1_.png";
import discoveryCoachingMockup3 from "../../imports/Untitled_design__8_.png";
import discoveryCoachingMockup4 from "../../imports/Untitled_design__9_.png";
import dmrRecoveryMockup from "../../imports/Untitled_design__5_.png";
import dmrRecoveryMockup2 from "../../imports/Untitled_design__17_.png";
import englishWithContentMockup from "../../imports/Untitled_design__16_.png";
import englishWithContentMockup2 from "../../imports/Untitled_design__15_.png";
import professionalCVMockup from "../../imports/Untitled_design__7_.png";
import professionalCVMockup2 from "../../imports/Untitled_design__6_.png";
import studentLoungeMockup from "../../imports/Untitled_design__13_.png";
import studentLoungeMockup2 from "../../imports/Untitled_design__14_.png";
import beanieDesignsMockup from "../../imports/Untitled_design__4_.png";
import beanieDesignsMockup2 from "../../imports/Untitled_design__12_.png";
import beanieDesignsMockup3 from "../../imports/Untitled_design__10_.png";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Project Content */}
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-5xl md:text-6xl tracking-tight">{project.title}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">{project.category}</p>
            <p className="text-lg text-gray-700">{project.detailDescription}</p>
          </div>

          {/* Main Image */}
          <div className="mb-16">
            <div className={`${
              project.category === "Logo Design"
                ? "bg-white border border-gray-200 p-12"
                : project.category === "Brand Design"
                ? "bg-white border border-gray-200 p-12"
                : project.category === "Print"
                ? "bg-white border border-gray-200 p-12"
                : project.category === "Branding"
                ? "bg-white border border-gray-200 p-12"
                : project.category === "Human Centred Design"
                ? "bg-white border border-gray-200 p-12"
                : "bg-gray-100"
            } rounded-lg overflow-hidden`}>
              <img
                src={project.image}
                alt={project.title}
                className={`${
                  project.category === "Logo Design"
                    ? "w-full max-w-md mx-auto object-contain"
                    : project.category === "Brand Design"
                    ? "w-full max-w-md mx-auto object-contain"
                    : project.category === "Print"
                    ? "w-full h-96 mx-auto object-contain"
                    : project.category === "Branding"
                    ? "w-full h-96 mx-auto object-contain"
                    : project.category === "Human Centred Design"
                    ? "w-full h-96 mx-auto object-contain"
                    : "w-full object-contain"
                }`}
                style={{
                  imageRendering: "crisp-edges",
                  WebkitFontSmoothing: "antialiased",
                }}
              />
            </div>
          </div>

          {/* Process Section */}
          {project.id === "dmr-recovery" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  To meet the brief of preparing the DMR Recovery logo for wider, more consistent use, I began by conducting a detailed review of the existing mark. This allowed me to identify issues with scalability, clarity, and overall technical quality.
                </p>
                <p>
                  From there, I recreated the logo from scratch in Adobe Illustrator, ensuring clean geometry, balanced proportions, and precise alignment. Rebuilding the logo rather than editing the original ensured full control over every element and eliminated any artefacts from previous versions.
                </p>
                <p>
                  Once the refined artwork was complete, I imported the Illustrator file into Figma and converted it into a fully scalable vector asset. This step ensured the logo could be used seamlessly across digital and print applications, maintaining sharpness and consistency at any size.
                </p>
                <p>
                  Overall, the goal was to deliver a polished, technically sound logo that could be confidently applied across the brand's full range of touchpoints.
                </p>
              </div>
            </div>
          )}

          {project.id === "discovery-coaching" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this project, the brief was to refine and develop a logo concept based on an initial hand‑drawn sketch provided by the clients. The business is co‑owned by a male and female partnership, and they wanted the final logo to visually represent both of their personalities through colour and style. Their chosen brand colours were blue (representing the male owner) and pink (representing the female owner).
                </p>
                <p>
                  I began by analysing the sketch to understand the intended structure, symbolism, and overall direction. Using Adobe Illustrator, I recreated the logo digitally, ensuring clean lines, balanced proportions, and a professional level of precision that the original sketch could not provide.
                </p>
                <p>
                  To reflect the dual ownership and the blending of their coaching styles, I incorporated both brand colours into the mark using a smooth gradient transition from blue to pink. This approach allowed the colours to merge naturally, symbolising collaboration, unity, and the combined strengths of both founders.
                </p>
                <p>
                  Once the refined artwork was complete, I transferred the design into Figma and converted it into a fully scalable vector asset. This ensured the logo could be used consistently across all digital and print applications without any loss of quality.
                </p>
                <p>
                  The final result is a polished, meaningful logo that visually communicates the partnership at the heart of the brand.
                </p>
              </div>
            </div>
          )}

          {project.id === "student-lounge" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this brief, I identified a real‑world problem and designed a solution. I focused on how many high schools still operate within an outdated, industrial‑era model that doesn't support modern learners' wellbeing, creativity, or engagement.
                </p>
                <p>
                  Through primary and secondary research, I analysed issues such as rigid environments, long lesson structures, lack of flexibility, and poor wellbeing support. This helped me define a clear opportunity: redesigning common areas to create spaces that feel modern, calming, and student‑centred.
                </p>
                <p>
                  My final concept proposed a wellbeing‑focused student lounge inspired by real‑world environments. The design emphasised flexibility, nature, inclusivity, and affordability — creating a space where students can relax, recharge, and feel a stronger sense of belonging.
                </p>
                <p>
                  This project demonstrates my ability to identify a problem, research it thoroughly, and develop a meaningful, implementable design solution.
                </p>
              </div>
            </div>
          )}

          {project.id === "english-with-content" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this project, I was asked to create a logo for English With Context, a teaching company that helps learners understand English through clips from television shows and films. Their approach focuses on using real‑world context to explain meaning, tone, and cultural references.
                </p>
                <p>
                  To begin, I researched the company's teaching style, target audience, and the importance of context in language learning. This helped me identify the television screen as the central symbol — a clear representation of how the company delivers its lessons.
                </p>
                <p>
                  I designed the logo with a TV at the centre and included the full company name to ensure clarity and strong brand recognition. The colour palette and typography were intentionally aligned with the style of the English dictionary as a subtle visual cue that the brand is connected to English language learning. This creates a sense of familiarity and trust for users.
                </p>
                <p>
                  The final logo combines clear symbolism, relevant colour choices, and a modern, approachable style that reflects the company's unique teaching method.
                </p>
              </div>
            </div>
          )}

          {project.id === "professional-cv" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this project, I was asked to redesign a client's CV to improve readability, visual appeal, and overall impact. The original document was a plain Word file that felt text‑heavy, disengaging, and difficult to navigate. My goal was to transform it into a modern, professional CV that would help the client stand out in a competitive field.
                </p>
                <p>
                  I began by reviewing the existing content and reorganising the information into clearer, more manageable sections. This made the CV easier to scan and allowed key strengths to be highlighted more effectively. I introduced a structured layout, consistent spacing, and a logical visual hierarchy to guide the reader through the document.
                </p>
                <p>
                  To elevate the design, I created a vibrant PDF version using a royal blue colour palette — chosen to convey professionalism, trust, and confidence while still feeling modern and engaging. I also refined the typography to improve clarity and readability.
                </p>
                <p>
                  Throughout the process, I liaised closely with the client to gather additional details on their achievements, responsibilities, and project work. This ensured the final CV was not only visually strong but also content‑rich and tailored to their career goals.
                </p>
                <p>
                  The redesigned CV had a measurable impact: the client secured a new job within two weeks of using the updated version.
                </p>
              </div>
            </div>
          )}

          {project.id === "beanie-designs" && (
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Process & Approach</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this project, I was asked to create a logo for a new clothing company. The client wanted the brand to feel personal and reflective of their own identity. They have a bold, vibrant personality and are well‑known for always wearing a beanie hat — a distinctive part of their look. I chose to use the beanie as the central icon, creating a logo that felt authentic, memorable, and directly connected to the owner.
                </p>
                <p>
                  To match the client's energetic character, I selected a bright turquoise colour palette. This added vibrancy while still keeping the design clean and modern. The combination of colour and iconography helped establish a strong visual identity that stands out and feels true to the brand's personality.
                </p>
                <p>
                  I created the logo using both Adobe Illustrator and Figma, ensuring precision, scalability, and flexibility across different applications. I also produced several mock‑ups to show how the logo would appear on real clothing items and promotional materials, helping the client visualise the brand in context.
                </p>
                <p>
                  The client was so pleased with the final design that they decided to incorporate the beanie icon directly into the company name, officially launching the brand as Beanie Designs.
                </p>
              </div>
            </div>
          )}

          {/* Mockups Section */}
          {project.id === "dmr-recovery" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={dmrRecoveryMockup}
                    alt="DMR Recovery Logo Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={dmrRecoveryMockup2}
                    alt="DMR Recovery Logo Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.id === "english-with-content" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={englishWithContentMockup}
                    alt="English With Context Logo Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={englishWithContentMockup2}
                    alt="English With Context Logo Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.id === "professional-cv" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={professionalCVMockup}
                    alt="Professional CV Design Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={professionalCVMockup2}
                    alt="Professional CV Design Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.id === "student-lounge" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={studentLoungeMockup}
                    alt="The Student Lounge Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={studentLoungeMockup2}
                    alt="The Student Lounge Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.id === "beanie-designs" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={beanieDesignsMockup}
                    alt="Beanie Designs Logo Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={beanieDesignsMockup2}
                    alt="Beanie Designs Logo Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8 md:col-span-2">
                  <img
                    src={beanieDesignsMockup3}
                    alt="Beanie Designs Logo Mockup 3"
                    className="w-full h-auto object-contain max-w-2xl mx-auto"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.id === "discovery-coaching" ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={discoveryCoachingMockup}
                    alt="Discovery Coaching Logo Mockup"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={discoveryCoachingMockup2}
                    alt="Discovery Coaching Logo Mockup 2"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={discoveryCoachingMockup3}
                    alt="Discovery Coaching Logo Mockup 3"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden p-8">
                  <img
                    src={discoveryCoachingMockup4}
                    alt="Discovery Coaching Logo Mockup 4"
                    className="w-full h-auto object-contain"
                    style={{
                      imageRendering: "crisp-edges",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : project.mockups && project.mockups.length > 0 ? (
            <div>
              <h2 className="text-3xl mb-8">Mockups & Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.mockups.map((mockup, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={mockup}
                      alt={`${project.title} mockup ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <p className="text-gray-600 text-lg">
                Mockups coming soon! This project is ready for real-world applications including business cards,
                clothing labels, packaging, and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
