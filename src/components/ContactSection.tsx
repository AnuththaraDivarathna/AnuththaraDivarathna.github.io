import { createMailtoLink, EmailTemplates, RECIPIENT_EMAIL } from './emailUtils';
import { toast } from "sonner";

export function ContactSection() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zM6 4h12v16H6V4z"/>
          <path d="M8 6h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm4 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      ),
      label: "Phone",
      value: "+94 71 451 2087",
      href: "tel:+94714512087"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 36 36">
          <path d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"/>
          <path d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>
        </svg>
      ),
      label: "Email",
      value: "anuththradivarathna@gmail.com",
      href: "mailto:anuththradivarathna@gmail.com"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Anuththara Divarathna",
      href: "https://linkedin.com/in/anuththara-divarathna"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 1200 1200">
          <path d="M0,0v1200h1200V0H0z M186.476,495.854H491.75
            c31.229,0.219,64.056,12.23,89.209,35.376c23.154,22.86,36.754,55.645,37.427,90.747c-0.116,26.956-5.251,58.017-23.146,82.765
            c-12.504,16.834-32.084,29.562-53.686,36.841v2.856c22.748,5.689,45.174,17.843,61.157,37.939
            c19.012,24.585,25.514,57.747,26.074,90.381c-0.228,34.622-12.213,71.699-39.038,99.169c-23.845,23.426-58.079,36.835-94.117,37.573
            h-309.16V495.858L186.476,495.854z M721.436,496.88h227.048v84.228H721.436V496.88z M830.127,606.303
            c31.679,0.001,59.783,4.115,84.301,12.378c24.735,8.021,45.552,20.562,62.476,37.573c16.923,16.771,29.698,38.155,38.378,64.16
            c11.447,34.042,13.618,77.622,13.403,117.408H764.716c0,27.221,5.411,48.359,16.26,63.427
            c11.065,14.826,29.176,22.193,54.345,22.193c23.913-0.112,51.923-7.78,61.158-34.645c2.387-7.048,3.588-14.538,3.589-22.558h128.613
            c-0.267,40.87-13.426,81.462-47.899,111.548c-38.084,30.978-91.314,39.815-142.53,40.796c-31.68,0-60.311-3.991-85.913-12.012
            c-25.386-8.264-46.955-20.926-64.747-37.939c-17.793-17.013-31.469-38.397-41.016-64.16c-9.547-26.006-14.355-56.729-14.355-92.212
            c0-34.511,4.659-64.617,13.989-90.381c9.33-25.762,22.557-47.146,39.697-64.16c17.358-17.255,38.174-30.165,62.475-38.671
            c24.519-8.507,51.795-12.744,81.739-12.744L830.127,606.303z M333.617,608.5v87.452h101.222c9.124-0.07,17.806-4.249,24.39-11.646
            c6.394-7.785,9.528-18.041,9.741-28.784v-7.324c-0.066-9.694-3.792-19.708-10.107-28.052c-5.739-6.779-14.348-11.156-24.023-11.646
            L333.617,608.5L333.617,608.5z M835.323,701.078c-22.349,0-39.032,5.962-50.097,17.87c-10.85,11.909-17.462,28.071-19.85,48.487
            h129.492c0-20.659-5.186-36.821-15.601-48.487C868.854,707.04,854.199,701.078,835.323,701.078L835.323,701.078z M333.617,802.079
            v87.817h111.914c9.021-0.07,17.658-4.211,24.39-11.279c6.363-7.75,9.653-18.055,9.814-28.785v-7.69
            c-0.058-9.781-3.229-19.984-9.814-28.417c-5.78-6.818-14.729-11.093-24.39-11.646H333.617L333.617,802.079z"/>
        </svg>
      ),
      label: "Behance",
      value: "Anuththara Divarathna",
      href: "https://behance.net/anuththara-divarathna"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            Ready to create exceptional user experiences? Let's discuss your project and bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-200">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-small text-gray-500 uppercase tracking-wide">{contact.label}</p>
                        <p className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-900 mb-6">Ready to Start?</h3>
                <div className="space-y-6">
                  <div className="card">
                    <h4 className="text-gray-900 mb-3">Ready to Work Together?</h4>
                    <p className="text-gray-600 text-small mb-6">
                      Whether you have a project in mind, are looking for a design partner, or just want to explore possibilities – I'd love to hear from you. Let's discuss how we can create something amazing together.
                    </p>
                    
                    <a 
                      href={createMailtoLink(RECIPIENT_EMAIL, EmailTemplates.letsTalk.subject, EmailTemplates.letsTalk.body)} 
                      className="btn-primary w-full"
                      onClick={() => toast.success("Opening email client...", { description: "Your default email app will open with a conversation starter template." })}
                    >
                      <span>Let's Talk</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">AD</span>
            </div>
            <span className="text-gray-600">Anuththara Divarathna</span>
          </div>
          <p className="text-small text-gray-500">
            © 2025 Anuththara Divarathna. Creating meaningful digital experiences through thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}