export const createMailtoLink = (
  recipient: string,
  subject: string,
  body: string
): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const EmailTemplates = {
  projectInquiry: {
    subject: "Project Inquiry - Let's Create Something Amazing",
    body: `Hi Anuththara,

I'm interested in working with you on a UI/UX design project. I'd love to discuss how your expertise can help bring my vision to life.

Project Details:
- Project Type: 
- Industry: 
- Timeline: 
- Budget Range: 

Please let me know your availability for a consultation.

Best regards`
  },
  
  projectInquiryFromPortfolio: {
    subject: "Project Inquiry - Inspired by Your Portfolio Work",
    body: `Hi Anuththara,

I'm impressed by your portfolio work and would like to discuss a similar project. Your design approach and attention to detail caught my attention.

Project Details:
- Project Type: 
- Similar to your work on: 
- Timeline: 
- Budget Range: 

I'd love to schedule a call to discuss this further.

Best regards`
  },
  
  collaboration: {
    subject: "Collaboration Opportunity",
    body: `Hi Anuththara,

I'm reaching out regarding a potential collaboration opportunity. I believe your design expertise would be a perfect fit for this project.

Collaboration Details:
- Project Type: 
- Duration: 
- Team Size: 
- Compensation: 

Looking forward to exploring this opportunity together.

Best regards`
  },

  letsTalk: {
    subject: "Let's Talk - Interested in Working Together",
    body: `Hi Anuththara,

I'm reaching out because I'm interested in working with you on a UI/UX design project. Your portfolio showcases exactly the kind of thoughtful, user-centered design approach I'm looking for.

I'd love to discuss:
- A new project opportunity
- Potential collaboration
- Your design process and approach
- Timeline and next steps

Project/Opportunity Details:
- Type: 
- Scope: 
- Timeline: 
- Budget/Compensation: 
- Preferred Communication: 

I'm flexible and would appreciate the opportunity to chat about how we might work together. Please let me know your availability for a conversation.

Looking forward to connecting!

Best regards`
  }
};

export const RECIPIENT_EMAIL = "anuththradivarathna@gmail.com";