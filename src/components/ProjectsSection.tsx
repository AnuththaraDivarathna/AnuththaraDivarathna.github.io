import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  color: string;
  uiscreenshots: string;
}

interface ProjectsSectionProps {
  onViewProject: (project: Project) => void;
}

export function ProjectsSection({ onViewProject }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects: Project[] = [
    {
      title: "StudyMate",
      description: "Designed an intuitive and visually appealing UI for 'StudyMate', a study support app focused on helping students stay organized and track their learning progress.",
      category: "Mobile App UI",
      tags: ["UI Design", "Mobile", "Education"],
      image: "/Images/studymatecover.png",
      color: "from-blue-500 to-cyan-500",
      uiscreenshots: "/Images/StudyMateUI.png"
    },
    {
      title: "EcoLink",
      description: "Designed a clean and user-friendly UI for 'EcoLink,' an online transport app focused on providing eco-friendly and efficient ride-sharing solutions.",
      category: "Transport App",
      tags: ["UI Design", "Mobile", "Sustainability"],
      image: "/Images/ecolinkcover.png",
      color: "from-green-500 to-emerald-500",
      uiscreenshots: "/Images/EcoLinkUI.png"
    },
    {
      title: "Blissify",
      description: "Crafted a calming and intuitive UI for 'Blissify,' a stress management app offering personalized relaxation techniques and wellness tracking.",
      category: "Wellness App",
      tags: ["UI Design", "Wellness", "Mobile"],
      image: "/Images/blissifycover.png",
      color: "from-purple-500 to-pink-500",
      uiscreenshots: "/Images/BlissifyUI.png"
    },
    {
      title: "Happy Wedding",
      description: "Designed an elegant and user-friendly UI for 'Happy Wedding,' a website that simplifies wedding planning and offers a curated selection of diamonds and jewellery.",
      category: "E-commerce Website",
      tags: ["Web Design", "E-commerce", "UI/UX"],
      image: "/Images/happyweddingcover.png",
      color: "from-pink-500 to-rose-500",
      uiscreenshots: "/Images/HappyWeddingUI.png"
    },
    {
      title: "Pizza Fiesta",
      description: "Created a vibrant and easy-to-navigate UI for 'Pizza Fiesta,' a restaurant website that showcases the menu, online ordering, and a lively dining experience.",
      category: "Restaurant Website",
      tags: ["Web Design", "Restaurant", "UI Design"],
      image: "/Images/pizzafiestacover.png",
      color: "from-orange-500 to-red-500",
      uiscreenshots: "/Images/PizzaFiestaUI.png"
    },
    {
      title: "Planet First",
      description: "Designed a clean and engaging UI for 'Planet First' a sustainability website focused on promoting eco-friendly practices and raising awareness about environmental issues.",
      category: "Sustainability Website",
      tags: ["Web Design", "Sustainability", "UI Design"],
      image: "/Images/planetfirstcover.png",
      color: "from-green-500 to-teal-500",
      uiscreenshots: "/Images/PlanetFirstUI.png"
    },
    {
      title: "Garbage Management System",
      description: "A simple web app to schedule garbage pickups, report issues, and track collection status. Helps make waste management more efficient and organized.",
      category: "Web Application (MEARN)",
      tags: ["Full Stack", "Web App", "Management"],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      color: "from-gray-600 to-gray-800",
      uiscreenshots: ""
    },
    {
      title: "Online Vegetable Mart",
      description: "A user-friendly app to browse, order, and get fresh vegetables delivered. It supports easy checkout and real-time order tracking.",
      category: "E-commerce App (HTML/CSS)",
      tags: ["Web Design", "E-commerce", "Frontend"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      color: "from-green-400 to-lime-500",
      uiscreenshots: ""
    }
  ];

  const handleViewProject = () => {
    onViewProject(projects[selectedProject]);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            A curated collection of UI/UX design projects showcasing innovative solutions across various platforms and industries.
          </p>
        </div>

        {/* Interactive Projects Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="flex items-start space-x-6 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50">
                  {/* Project Number */}
                  <div className="flex-shrink-0">
                    <span className={`text-2xl font-bold transition-all duration-300 ${
                      selectedProject === index
                        ? 'text-blue-600 scale-110'
                        : 'text-gray-300 group-hover:text-gray-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}/
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3 className={`text-xl transition-all duration-300 ${
                        selectedProject === index
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className={`text-small transition-all duration-300 ${
                      selectedProject === index
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-500'
                    }`}>
                      {project.category}
                    </p>

                    {/* Tags - Only show for selected project */}
                    {selectedProject === index && (
                      <div className="flex flex-wrap gap-2 pt-2 animate-fade-in-up">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Selection Indicator */}
                  <div className={`w-1 h-16 rounded-full transition-all duration-300 ${
                    selectedProject === index
                      ? `bg-gradient-to-b ${project.color}`
                      : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Project Display */}
          <div className="lg:sticky lg:top-32">
            <div className="space-y-8">
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={projects[selectedProject].image}
                    alt={`${projects[selectedProject].title} UI Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Project Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${projects[selectedProject].color}`}></div>
                    <span className="text-small font-medium text-gray-900">
                      {String(selectedProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl text-gray-900">
                      {projects[selectedProject].title}
                    </h3>
                    <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${projects[selectedProject].color}`}></div>
                  </div>
                  
                  <p className="text-blue-600 font-medium">
                    {projects[selectedProject].category}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-large">
                  {projects[selectedProject].description}
                </p>

                {/* Action Buttons */}
                <div className="pt-4">
                  <button onClick={handleViewProject} className="btn-primary">
                    <span>View Project</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <button
                  onClick={() => setSelectedProject(selectedProject > 0 ? selectedProject - 1 : projects.length - 1)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-small font-medium">Previous</span>
                </button>

                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedProject === index
                          ? `bg-gradient-to-r ${projects[index].color}`
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(selectedProject < projects.length - 1 ? selectedProject + 1 : 0)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="text-small font-medium">Next</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="space-y-4">
            <h3 className="text-xl text-gray-900">Interested in working together?</h3>
            <p className="text-gray-600">Let's discuss your next project and create something amazing.</p>
            <a href="#contact" className="btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}