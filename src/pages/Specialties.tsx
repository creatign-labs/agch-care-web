import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      title: "Cancer Care (Oncology)",
      description: "Comprehensive cancer treatment with multidisciplinary approach including medical, surgical, and radiation oncology",
      features: ["Medical Oncology", "Surgical Oncology", "Radiation Therapy", "Pediatric Oncology"],
      link: "/specialties/oncology"
    },
    {
      title: "Cardiology & Heart Surgery",
      description: "Complete cardiac care from preventive cardiology to complex heart surgeries",
      features: ["Interventional Cardiology", "Cardiac Surgery", "Heart Transplant", "Pediatric Cardiology"],
      link: "/specialties"
    },
    {
      title: "Orthopaedics & Joint Replacement",
      description: "Advanced bone and joint care including trauma, sports medicine, and joint replacement",
      features: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"],
      link: "/specialties"
    },
    {
      title: "Neurology & Neurosurgery",
      description: "Comprehensive brain and spine care with advanced neurological treatments",
      features: ["Brain Surgery", "Spine Surgery", "Stroke Care", "Epilepsy Treatment"],
      link: "/specialties"
    },
    {
      title: "Gastroenterology",
      description: "Complete digestive system care including advanced endoscopic procedures",
      features: ["Endoscopy", "Liver Disease", "IBD Treatment", "Pancreatic Care"],
      link: "/specialties"
    },
    {
      title: "General Surgery",
      description: "Wide range of surgical procedures with minimally invasive techniques",
      features: ["Laparoscopic Surgery", "Hernia Repair", "Gallbladder Surgery", "Colorectal Surgery"],
      link: "/specialties"
    },
    {
      title: "Pediatrics",
      description: "Specialized care for children from newborns to adolescents",
      features: ["Neonatal Care", "Pediatric Surgery", "Developmental Care", "Vaccination"],
      link: "/specialties"
    },
    {
      title: "Emergency Medicine",
      description: "24/7 emergency care with trauma center and critical care services",
      features: ["Trauma Center", "Critical Care", "Emergency Surgery", "Ambulance Services"],
      link: "/specialties"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Centres of Excellence</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized medical departments delivering world-class healthcare across 
              multiple disciplines with expert doctors and advanced technology
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                  specialty.title.includes('Cancer') ? 'lg:col-span-2 bg-gradient-card' : ''
                }`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-teal-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {specialty.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="medical" className="w-full">
                    <Link to={specialty.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Specialized Care?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert doctors across all specialties are ready to provide you with 
            the best possible care tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Book Appointment
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/doctors">Find a Doctor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;