import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap } from "lucide-react";
import patientConsultation from "@/assets/patient-consultation.jpg";

const Oncology = () => {
  const subSpecialties = [
    {
      title: "Medical Oncology",
      icon: "💊"
    },
    {
      title: "Cancer Screening",
      icon: "🔬"
    },
    {
      title: "MRI",
      icon: "⚡"
    },
    {
      title: "Chemotherapy",
      icon: "👶"
    }
  ];

  const conditions = [
    "Breast Cancer", "Lung Cancer", "Colorectal Cancer", "Prostate Cancer",
    "Lymphomas", "Leukemia", "Brain Tumors", "Liver Cancer",
    "Pancreatic Cancer", "Ovarian Cancer", "Cervical Cancer", "Skin Cancer"
  ];

  const technologies = [
    {
      title: "Linear Accelerator (LINAC)",
      description: "Advanced radiation therapy with precise tumor targeting and minimal damage to healthy tissue",
      icon: <Zap className="w-8 h-8 text-teal-500" />
    },
    {
      title: "PET-CT Scanner",
      description: "Comprehensive imaging for accurate cancer staging and treatment monitoring",
      icon: <Award className="w-8 h-8 text-teal-500" />
    },
    {
      title: "Robotic Surgery",
      description: "Minimally invasive surgical procedures with enhanced precision and faster recovery",
      icon: <Users className="w-8 h-8 text-teal-500" />
    }
  ];

  const doctors = [
    {
      name: "Dr. Priya Mehta",
      specialization: "Medical Oncology",
      experience: "20+ years",
      expertise: "Breast Cancer, Lung Cancer"
    },
    {
      name: "Dr. Raj Kumar",
      specialization: "Surgical Oncology",
      experience: "18+ years",
      expertise: "Hepatobiliary, Colorectal"
    },
    {
      name: "Dr. Sarah Johnson",
      specialization: "Radiation Oncology",
      experience: "15+ years",
      expertise: "Brain Tumors, Prostate Cancer"
    },
    {
      name: "Dr. Amit Sharma",
      specialization: "Pediatric Oncology",
      experience: "12+ years",
      expertise: "Childhood Leukemia, Brain Tumors"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Centre of Excellence for <span className="text-teal-600">Cancer Care</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cancer treatment with a multidisciplinary approach, 
              combining advanced technology, expert doctors, and compassionate care
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">Multidisciplinary Cancer Care</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our oncology team brings together medical oncologists, surgical oncologists, 
                radiation oncologists, and support specialists to create personalized treatment 
                plans for each patient. We combine the latest medical advances with compassionate 
                care to provide the best possible outcomes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From early detection and diagnosis to treatment and survivorship care, 
                we support our patients and their families throughout their cancer journey 
                with comprehensive services and emotional support.
              </p>
              <Button asChild variant="medical" size="lg">
                <Link to="/doctors">
                  Meet Our Oncology Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img 
                src={patientConsultation} 
                alt="Cancer consultation at AGCH" 
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Specialties */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Sub-Specialties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized cancer care across multiple disciplines with expert teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subSpecialties.map((specialty, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{specialty.icon}</div>
                  <h3 className="text-xl font-semibold text-primary">{specialty.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Conditions We Treat</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care for all types of cancer with specialized treatment protocols
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <div 
                key={index} 
                className="bg-gradient-card p-4 rounded-lg text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-primary font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Advanced Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment and cutting-edge technology for precision cancer treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oncology Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Oncology Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert oncologists with years of experience in treating complex cancer cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{doctor.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{doctor.specialization}</p>
                  <p className="text-sm text-accent mb-2">{doctor.experience}</p>
                  <p className="text-sm text-muted-foreground mb-4">{doctor.expertise}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="medical" size="lg">
              <Link to="/doctors">
                View All Oncologists
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Treatment?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our oncology team is here to provide you with personalized cancer care 
            and support throughout your journey to recovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Book Oncology Consultation
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Cancer Center</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oncology;