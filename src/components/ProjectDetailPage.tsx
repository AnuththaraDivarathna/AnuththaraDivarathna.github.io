import { ImageWithFallback } from './figma/ImageWithFallback';
import { createMailtoLink, EmailTemplates, RECIPIENT_EMAIL } from './emailUtils';
import { toast } from "sonner";

interface ProjectDetailPageProps {
  project: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    color: string;
    uiscreenshots: string;
  };
  onBack: () => void;
}

export function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 group"
            >
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Projects</span>
            </button>

            {/* Project Header */}
            <div className="space-y-6 mb-12">
              {/* Project Title */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h1 className="text-gray-900">{project.title}</h1>
                  <div className={`w-12 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                </div>
                
                <p className="text-large text-blue-600 font-medium">
                  {project.category}
                </p>
              </div>

              {/* Project Tags */}
              <div className="space-y-3">
                <h4 className="text-gray-900 font-semibold">Project Tags</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} UI Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                    <span className="text-small font-medium text-gray-900">
                      Featured Project
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-gray-900">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-large">
                    {project.description}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                    <h4 className="text-gray-900">Key Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">User-centered design approach</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Intuitive user interface</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Responsive design implementation</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Modern visual aesthetics</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-gray-900">Design Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Research &amp; Discovery</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Wireframing &amp; Prototyping</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Visual Design &amp; Testing</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">Implementation &amp; Refinement</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bento UI Screenshots Section */}
                {project.uiscreenshots&&(
                <div className="pt-12">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-gray-900">UI Screenshots</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Visual showcase of the key interface designs and user experience flows
                      </p>
                    </div>
                    
                    {/* Bento Grid */}
                    <ImageWithFallback
                            src={project.uiscreenshots}
                            alt="Main Dashboard Interface"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                  </div>
                </div>
                )}

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-gray-900">Interested in Similar Work?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      I'd love to discuss how I can help bring your design vision to life with the same attention to detail and user-focused approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <a 
                        href={createMailtoLink(RECIPIENT_EMAIL, EmailTemplates.projectInquiryFromPortfolio.subject, EmailTemplates.projectInquiryFromPortfolio.body)} 
                        className="btn-primary"
                        onClick={() => toast.success("Opening email client...", { description: "Your default email app will open with a project inquiry template." })}
                      >
                        <span>Start a Project</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                      <button onClick={onBack} className="btn-secondary">
                        View More Projects
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}