import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";
import operatingTheater from "@/assets/operating-theater.jpg";

const About = () => {
  const facilities = [
    {
      title: "Advanced Operating Theaters",
      description: "State-of-the-art surgical suites with cutting-edge technology",
      icon: <Shield className="w-8 h-8 text-teal-500" />
    },
    {
      title: "24/7 ICU & Emergency",
      description: "Round-the-clock critical care and emergency services",
      icon: <Heart className="w-8 h-8 text-teal-500" />
    },
    {
      title: "Comprehensive Diagnostics",
      description: "Complete diagnostic services including advanced imaging",
      icon: <Award className="w-8 h-8 text-teal-500" />
    },
    {
      title: "Patient-Centered Rooms",
      description: "Comfortable, modern patient rooms designed for healing",
      icon: <Users className="w-8 h-8 text-teal-500" />
    }
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chairman & Medical Director",
      specialization: "Cardiothoracic Surgery",
      experience: "25+ years",
      description: "Leading cardiovascular surgeon with expertise in complex cardiac procedures"
    },
    {
      name: "Dr. Priya Mehta",
      title: "Chief Medical Officer",
      specialization: "Oncology",
      experience: "20+ years",
      description: "Renowned oncologist specializing in precision cancer treatments"
    },
    {
      name: "Mr. Amit Sharma",
      title: "Chief Executive Officer",
      specialization: "Healthcare Administration",
      experience: "15+ years",
      description: "Healthcare management expert focused on operational excellence"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-primary">About AGCH</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Advancing global healthcare standards with compassionate care, 
              cutting-edge technology, and world-class medical expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={medicalTeam} 
                alt="Medical team at AGCH" 
                className="rounded-lg shadow-card w-full"
              />
            </div>
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To provide world-class healthcare services with compassion, innovation, and excellence. 
                  We are committed to advancing medical care through cutting-edge technology, 
                  highly skilled professionals, and a patient-first approach that puts your health and well-being at the center of everything we do.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the leading multi-specialty hospital in the region, recognized for clinical excellence, 
                  innovative treatments, and compassionate care. We envision a future where advanced healthcare 
                  is accessible to all, and where every patient receives personalized treatment that leads to the best possible outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Technology */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">World-Class Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art infrastructure and advanced medical technology for comprehensive healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{facility.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold text-primary">Advanced Medical Technology</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Linear Accelerator for Cancer Treatment</h4>
                    <p className="text-muted-foreground">Precision radiation therapy with minimal side effects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">PET-CT Scanner</h4>
                    <p className="text-muted-foreground">Advanced imaging for accurate diagnosis and staging</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Robotic Surgery Systems</h4>
                    <p className="text-muted-foreground">Minimally invasive surgical procedures with precision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Digital Laboratory Systems</h4>
                    <p className="text-muted-foreground">Rapid, accurate diagnostic testing and results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={operatingTheater} 
                alt="Advanced operating theater" 
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Leadership & Management</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders committed to excellence in healthcare delivery and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{leader.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{leader.specialization}</p>
                  <p className="text-sm font-medium text-accent mb-4">{leader.experience}</p>
                  <p className="text-muted-foreground text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">Compassion</h3>
              <p className="text-sm sm:text-base opacity-90">Every patient deserves empathy, understanding, and personalized care</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">Excellence</h3>
              <p className="text-sm sm:text-base opacity-90">We strive for the highest standards in medical care and service delivery</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">Innovation</h3>
              <p className="text-sm sm:text-base opacity-90">Embracing cutting-edge technology and treatment methodologies</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-accent">Integrity</h3>
              <p className="text-sm sm:text-base opacity-90">Transparent, ethical practices in all our medical and business operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;