export function EducationSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl gradient-text mb-4">Education &amp; Awards</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white">🎓</span>
              </div>
              Education
            </h3>

            <div className="space-y-6">
              <div className="gradient-border">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl text-gray-800 mb-2">BSc (Hons) in Information Technology</h4>
                      <p className="text-pink-600 mb-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="text-gray-600">Specialized in Interactive Media</p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 rounded-full text-sm whitespace-nowrap">
                      2021-2025
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Focus on UI/UX Design and Interactive Media</span>
                  </div>
                </div>
              </div>

              <div className="gradient-border">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl text-gray-800 mb-2">G.C.E Advanced Level</h4>
                      <p className="text-pink-600 mb-1">Sri Sangamitta Girls National School Matale</p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-700 rounded-full text-sm whitespace-nowrap">
                      2019-2021
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Strong foundation in analytical thinking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white">🏆</span>
              </div>
              Awards &amp; Recognition
            </h3>

            <div className="gradient-border">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 pulse-glow">
                    <span className="text-white text-2xl">🥇</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-800 mb-2">Top 10 Finalist</h4>
                    <p className="text-pink-600 mb-3">SLIIT Codefest 2024 - UI UX Design Competition (Designathon)</p>
                    <p className="text-gray-600 mb-3">
                      Selected from 13 Universities, 31 teams in a competitive 24-hour design competition
                    </p>
                    <p className="text-gray-600 mb-4">
                      Organized by Sysco Labs &amp; SLIIT
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-700 rounded-full text-sm">
                        UI/UX Design
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-700 rounded-full text-sm">
                        24-hour Challenge
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-700 rounded-full text-sm">
                        Top 10/31 Teams
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional achievement highlight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg border border-pink-200">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                <p className="text-gray-700">
                  Recognition for exceptional design skills and creative problem-solving abilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}