import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using the Advance Global Care Hospitals (AGCH) website and services, you accept 
      and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, 
      please do not use our services.`,
    },
    {
      title: "Medical Disclaimer",
      content: `The information provided on this website is for general informational purposes only and is not 
      intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the 
      advice of your physician or other qualified health provider with any questions you may have regarding 
      a medical condition.`,
    },
    {
      title: "Appointment Booking",
      content: `When booking appointments through our website, you agree to provide accurate and complete information. 
      Appointment confirmations are subject to availability. We reserve the right to reschedule or cancel appointments 
      when necessary, with reasonable notice provided.`,
    },
    {
      title: "User Responsibilities",
      content: `Users are responsible for maintaining the confidentiality of their account information and for all 
      activities that occur under their account. You agree to notify us immediately of any unauthorized use of 
      your account or any other breach of security.`,
    },
    {
      title: "Intellectual Property",
      content: `All content on this website, including text, graphics, logos, images, and software, is the property 
      of AGCH and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative 
      works without our express written permission.`,
    },
    {
      title: "Payment Terms",
      content: `Payment for medical services is due at the time of service unless other arrangements have been made. 
      We accept various payment methods including cash, credit cards, and approved insurance. Patients are responsible 
      for any amounts not covered by insurance.`,
    },
    {
      title: "Limitation of Liability",
      content: `AGCH shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
      resulting from your use of our website or services. Our total liability shall not exceed the amount paid by 
      you for the specific service in question.`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
      posting on the website. Your continued use of our services after any changes constitutes acceptance of the 
      new terms.`,
    },
    {
      title: "Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes 
      arising under these terms shall be subject to the exclusive jurisdiction of the courts in the relevant 
      jurisdiction.`,
    },
    {
      title: "Contact Information",
      content: `For questions about these Terms of Service, please contact us at legal@agch.com or call our 
      helpline at 1800-123-AGCH (2424).`,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated: December 1, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-primary mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
