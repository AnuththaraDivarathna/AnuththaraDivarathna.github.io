import { useState, useEffect } from 'react';
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { LoadingScreen } from "./components/LoadingScreen";
import { Toaster } from "sonner";

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  color: string;
  uiscreenshots: string
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'portfolio' | 'project-detail'>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle initial loading and refresh loading
  useEffect(() => {
    // Check if this is a page refresh or first load
    const hasLoadedBefore = sessionStorage.getItem('portfolioLoaded');
    
    if (!hasLoadedBefore) {
      // First time loading - show loading screen
      setIsLoading(true);
      sessionStorage.setItem('portfolioLoaded', 'true');
    } else {
      // Already loaded in this session - skip loading screen
      setIsLoading(false);
    }

    // Reset session flag when page is refreshed (beforeunload)
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('portfolioLoaded');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setSelectedProject(null);
  };

  // Show loading screen on initial load/refresh
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (currentView === 'project-detail' && selectedProject) {
    return (
      <>
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'white',
              border: '1px solid #e5e7eb',
              color: '#374151',
            },
          }}
        />
        <div className="min-h-screen bg-white">
        {/* Navigation - Same as portfolio */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">Anuththara Divarathna</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={handleBackToPortfolio} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Portfolio</button>
                <button onClick={() => { handleBackToPortfolio(); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</button>
                <button onClick={() => { handleBackToPortfolio(); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</button>
                <button onClick={() => { handleBackToPortfolio(); setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</button>
                <button onClick={() => { handleBackToPortfolio(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</button>
              </div>

              <button onClick={() => { handleBackToPortfolio(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="btn-primary">
                Let's Talk
              </button>
            </div>
          </div>
        </nav>

        <ProjectDetailPage project={selectedProject} onBack={handleBackToPortfolio} />
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #e5e7eb',
            color: '#374151',
          },
        }}
      />
      <div className="min-h-screen bg-white">
      {/* Navigation - Clean and minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">AD</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Anuththara Divarathna</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </div>

            <a href="#contact" className="btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="projects">
          <ProjectsSection onViewProject={handleViewProject} />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      </div>
    </>
  );
}