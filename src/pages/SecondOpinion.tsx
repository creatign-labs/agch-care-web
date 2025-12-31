import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SecondOpinion = () => {
  const steps = [
    {
      step: "1",
      title: "Submit Your Records",
      description: "Upload your medical reports, scans, and diagnosis documents securely.",
      icon: <FileText className="w-6 h-6 text-primary" />,
    },
    {
      step: "2",
      title: "Expert Review",
      description: "Our specialists carefully analyze your case and medical history.",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      step: "3",
      title: "Receive Opinion",
      description: "Get a comprehensive second opinion with treatment recommendations.",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
  ];

  const benefits = [
    "Access to world-class oncology specialists",
    "Comprehensive review of your diagnosis",
    "Alternative treatment options explored",
    "Confidential and secure process",
    "Quick turnaround time (3-5 business days)",
    "Detailed written report provided",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get a Second Opinion
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            When facing a serious diagnosis, a second opinion from our expert specialists can provide clarity, confidence, and peace of mind.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">
              Request Second Opinion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-primary">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-primary">
              Why Choose Our Second Opinion Service?
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Quick Turnaround</h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We understand the urgency. Our team strives to provide your comprehensive second opinion within 3-5 business days of receiving your complete medical records.
          </p>
          <Button asChild variant="medical" size="lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecondOpinion;
