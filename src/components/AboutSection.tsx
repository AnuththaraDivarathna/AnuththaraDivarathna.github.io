export function AboutSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - About */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Creative and detail-oriented UI/UX Designer with a strong background in designing user-friendly digital experiences. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Skilled in creating wireframes, prototypes, and high-fidelity designs using Figma, Photoshop, and Illustrator. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experienced in working on projects from mobile apps and websites to interactive media and marketing content. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Passionate about understanding user needs and delivering intuitive, visually appealing designs.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="space-y-4">
                <h4 className="text-gray-900">Key Strengths</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['User-Centered Design', 'Creative Problem Solving', 'Visual Communication', 'Collaborative Approach'].map((strength) => (
                    <div key={strength} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 text-small">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div className="space-y-6">
              <h4 className="text-gray-900">Professional Experience</h4>
              
              <div className="card p-[24px]">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="p-[0px]">
                      <h4 className="text-gray-900 font-semibold">Intern Content Creator</h4>
                      <p className="text-blue-600 text-small font-medium px-[0px] py-[4px] mt-[0px] mr-[0px] mb-[4px] ml-[0px]">Sri Lanka Institute of Information Technology</p>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full py-[4px] px-[8px] m-[0px]">
                        Apr 2024 - Apr 2025
                      </span>
                    </div>                    
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-small">Created interactive lecture recordings with engaging animations and questions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-small">Edited educational videos to enhance clarity and visual appeal</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-small">Designed flyers, banners, and other promotional materials</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-small">Converted lecture slides, tutorials, and labs into LaTeX format</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-small">Collaborated with academic staff to produce high-quality educational content</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-gray-900">Education</h4>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-gray-900 font-semibold text-small">BSc (Hons) in Information Technology</h4>
                    <p className="text-gray-600 text-small">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    <p className="text-gray-500 text-xs">Specialized in Interactive Media • 2021-2025</p>
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