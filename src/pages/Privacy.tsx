import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, make an appointment, 
      fill out a form, or communicate with us. This information may include your name, email address, phone number, 
      medical history, and any other information you choose to provide.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, process transactions, 
      send appointment reminders and health-related communications, respond to your comments and questions, 
      and provide customer service.`,
    },
    {
      title: "Information Sharing",
      content: `We do not share your personal health information with third parties except as necessary to provide our 
      services, comply with laws, or protect rights. We may share de-identified aggregate data for research purposes.`,
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information 
      against unauthorized access, alteration, disclosure, or destruction. All medical records are stored securely 
      in compliance with healthcare data protection regulations.`,
    },
    {
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal information. You may also request 
      a copy of your medical records at any time. To exercise these rights, please contact our patient services team.`,
    },
    {
      title: "Cookies and Tracking",
      content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, 
      analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting 
      the new privacy policy on this page and updating the "Last Updated" date.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at privacy@agch.com 
      or call our patient services helpline at 1800-123-AGCH.`,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated: December 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

export default Privacy;
