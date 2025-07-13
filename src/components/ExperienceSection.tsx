export function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl gradient-text mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start relative">
              {/* Timeline dot */}
              <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full items-center justify-center text-white text-xl absolute left-0 top-0 z-10">
                💼
              </div>

              {/* Content */}
              <div className="md:ml-24 gradient-border w-full">
                <div className="bg-white rounded-lg p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-gray-800 mb-2">Intern Content Creator</h3>
                      <h4 className="text-xl text-pink-600 mb-2">Sri Lanka Institute of Information Technology</h4>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-blue-100 rounded-full text-sm">
                        April 2024 - April 2025
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Created interactive lecture recordings with engaging animations and questions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Edited educational videos to enhance clarity and visual appeal</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Designed flyers, banners, and other promotional materials</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Converted lecture slides, tutorials, and labs into LaTeX format for better presentation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p>Collaborated with academic staff to produce high-quality educational content</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Content Creation', 'Video Editing', 'Graphic Design', 'LaTeX', 'Collaboration'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-700 rounded-full text-sm border border-pink-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}