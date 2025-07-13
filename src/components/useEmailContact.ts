import { useCallback } from 'react';
import { createMailtoLink, EmailTemplates, RECIPIENT_EMAIL } from './emailUtils';

export const useEmailContact = () => {
  const sendProjectInquiry = useCallback((templateType: keyof typeof EmailTemplates = 'projectInquiry') => {
    const template = EmailTemplates[templateType];
    const mailtoLink = createMailtoLink(RECIPIENT_EMAIL, template.subject, template.body);
    
    // Track email interaction (for analytics if needed)
    if (typeof window !== 'undefined') {
      console.log('Email contact initiated:', templateType);
      // Add analytics tracking here if needed
      // Example: gtag('event', 'email_contact', { template: templateType });
    }
    
    window.location.href = mailtoLink;
  }, []);

  const createCustomEmail = useCallback((subject: string, body: string) => {
    const mailtoLink = createMailtoLink(RECIPIENT_EMAIL, subject, body);
    
    if (typeof window !== 'undefined') {
      console.log('Custom email contact initiated');
    }
    
    window.location.href = mailtoLink;
  }, []);

  return {
    sendProjectInquiry,
    createCustomEmail,
    recipientEmail: RECIPIENT_EMAIL,
    templates: EmailTemplates
  };
};