import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, MapPin, CreditCard, FileText, Users, Shield, Phone, Heart } from "lucide-react";

const Patients = () => {
  const insuranceProviders = [
    "ICICI Lombard", "Star Health", "HDFC ERGO", "Bajaj Allianz",
    "United India Insurance", "Oriental Insurance", "National Insurance",
    "CGHS", "ESIC", "Ayushman Bharat", "Mediclaim", "Care Health"
  ];

  const healthPackages = [
    {
      title: "Basic Health Checkup",
      price: "₹2,999",
      duration: "2-3 hours",
      tests: ["Complete Blood Count", "Lipid Profile", "Blood Sugar", "Chest X-Ray", "ECG"],
      recommended: "Adults 25-40 years"
    },
    {
      title: "Comprehensive Health Screening",
      price: "₹5,999",
      duration: "Half day",
      tests: ["All Basic Tests", "Thyroid Profile", "Liver Function", "Kidney Function", "Cardiac Markers", "Ultrasound Abdomen"],
      recommended: "Adults 40-60 years"
    },
    {
      title: "Executive Health Package",
      price: "₹12,999",
      duration: "Full day",
      tests: ["All Comprehensive Tests", "CT Scan", "Echo Cardiogram", "Stress Test", "Tumor Markers", "Specialist Consultations"],
      recommended: "Adults 60+ years or high-risk individuals"
    },
    {
      title: "Women's Health Package",
      price: "₹7,999",
      duration: "Half day",
      tests: ["Basic Health Tests", "Mammography", "Pap Smear", "Bone Density", "Hormonal Assessment", "Gynecology Consultation"],
      recommended: "Women 35+ years"
    }
  ];

  const faqs = [
    {
      question: "What are the visiting hours?",
      answer: "General visiting hours are from 4:00 PM to 6:00 PM for all wards. ICU visiting hours are from 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM. Only two visitors are allowed per patient at a time."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling our helpline at 1800-123-AGCH, using our online booking system, or visiting our registration desk. We recommend booking in advance to secure your preferred time slot."
    },
    {
      question: "What documents do I need for admission?",
      answer: "Please bring a valid photo ID (Aadhar card, passport, or driving license), insurance card (if applicable), previous medical records, and any referral letters from other doctors."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance providers and TPAs. Please check with our insurance desk for coverage details and pre-authorization requirements for your specific policy."
    },
    {
      question: "How can I get my test reports?",
      answer: "Test reports are usually available within 24-48 hours. You can collect them from the lab or access them through our patient portal. Emergency reports are processed within 2-4 hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI payments, and insurance. For major procedures, we also offer EMI options through our financial partners."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have a multi-level parking facility with 500+ parking spaces. Parking is free for the first 2 hours for outpatients and complimentary for admitted patients' families."
    },
    {
      question: "Do you have a pharmacy on-site?",
      answer: "Yes, our 24/7 pharmacy stocks a comprehensive range of medications. We also provide home delivery services for chronic medication needs within a 10km radius."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">For Patients</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know for a smooth healthcare experience at AGCH. 
              We're here to support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Your Visit Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Your Visit Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your visit with essential information about our facilities and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary">Visiting Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>General Wards:</strong> 4:00 PM - 6:00 PM</p>
                  <p><strong>ICU:</strong> 11:00 AM - 12:00 PM, 5:00 PM - 6:00 PM</p>
                  <p><strong>Emergency:</strong> 24/7 access</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary">Location & Parking</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>123 Healthcare Avenue</p>
                  <p>Medical District, City 560001</p>
                  <p><strong>Free parking:</strong> First 2 hours</p>
                  <p><strong>500+</strong> parking spaces</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <FileText className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary">Required Documents</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Valid Photo ID</p>
                  <p>• Insurance Card</p>
                  <p>• Previous Medical Records</p>
                  <p>• Referral Letters (if any)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-primary">Contact Numbers</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Main:</strong> +91 80 1234 5678</p>
                  <p><strong>Emergency:</strong> 1800-123-AGCH</p>
                  <p><strong>Appointments:</strong> +91 80 1234 5679</p>
                  <p><strong>Pharmacy:</strong> +91 80 1234 5680</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & TPA */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Insurance & TPA Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with major insurance providers to ensure seamless cashless treatment
            </p>
          </div>

          <Card className="p-8 shadow-card max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <CreditCard className="w-8 h-8 text-teal-500 mr-3" />
              <h3 className="text-2xl font-bold text-primary">Accepted Insurance Providers</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {insuranceProviders.map((provider, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-3 rounded-lg text-center hover:shadow-card transition-all duration-300"
                >
                  <span className="text-sm font-medium text-primary">{provider}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="text-sm text-teal-800">
                <strong>Note:</strong> Please contact our insurance desk at least 24 hours before your procedure 
                for pre-authorization and to verify coverage details.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Health Check Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Health Check Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preventive health screenings tailored to your age and health needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">{pkg.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {pkg.recommended}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-600">{pkg.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {pkg.tests.map((test, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                            {test}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="medical" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Book Health Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and procedures
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-teal-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">24/7 Emergency Services</h2>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our emergency department is fully equipped to handle all types of medical emergencies 
            with trained specialists available round the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Emergency: 1800-123-AGCH
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+918012342424">Call Emergency Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patients;