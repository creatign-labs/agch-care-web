import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Clock, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import medicalTeam from "@/assets/medical-team.jpg";
import operatingTheater from "@/assets/operating-theater.jpg";
import patientConsultation from "@/assets/patient-consultation.jpg";
const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const specialties = [{
    title: "Cancer Care",
    description: "Comprehensive oncology services with advanced treatment options",
    icon: "🎗️",
    featured: true,
    link: "/specialties/oncology"
  }, {
    title: "Cardiology",
    description: "Expert heart care with state-of-the-art cardiac procedures",
    icon: "❤️",
    link: "/specialties"
  }, {
    title: "Orthopaedics",
    description: "Complete bone and joint care including joint replacement",
    icon: "🦴",
    link: "/specialties"
  }, {
    title: "Neurology & Neurosurgery",
    description: "Advanced brain and spine treatments with comprehensive and cutting-edge care",
    icon: "🧠",
    link: "/specialties"
  }];
  const whyChooseUs = [{
    title: "Advanced Technology",
    description: "Precision & Innovation",
    icon: <Shield className="w-8 h-8 text-teal-500" />
  }, {
    title: "Expert Doctors",
    description: "Expertise You Can Trust",
    icon: <Users className="w-8 h-8 text-teal-500" />
  }, {
    title: "Patient-First Approach",
    description: "Compassion in Action",
    icon: <Heart className="w-8 h-8 text-teal-500" />
  }, {
    title: "24/7 Emergency Care",
    description: "Ready When You Need Us",
    icon: <Clock className="w-8 h-8 text-teal-500" />
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    condition: "Cancer Treatment",
    quote: "The oncology team at AGCH provided exceptional care throughout my treatment. Their compassionate approach made all the difference.",
    rating: 5
  }, {
    name: "Michael Chen",
    condition: "Heart Surgery",
    quote: "The cardiac surgery team saved my life. Their expertise and the hospital's advanced facilities are truly world-class.",
    rating: 5
  }, {
    name: "Dr. Priya Sharma",
    condition: "Family Care",
    quote: "As a referring physician, I trust AGCH for my patients. They consistently deliver excellent outcomes with compassionate care.",
    rating: 5
  }];
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hospitalExterior} alt="Modern hospital exterior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <h1 className="sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white text-center text-2xl">
            India's New Standard in Cancer Care.
          </h1>
          <p className="sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto text-center font-light px-4 text-sm">Your trusted multi-specialty partner for healing. We deliver world-class, blending advance treatment with compassionate care-making premier healthcare truly within your reach.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button asChild variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              <Link to="/doctors">
                Find a Doctor
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-white text-foreground hover:bg-white hover:text-primary w-full sm:w-auto">
              <Link to="/specialties">Explore Our Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary px-4">Centres of Excellence</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Specialized care across multiple medical disciplines with world-class expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {specialties.map((specialty, index) => <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${specialty.featured ? 'bg-gradient-card' : ''}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{specialty.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{specialty.title}</h3>
                  <p className="text-muted-foreground mb-6">{specialty.description}</p>
                  <Button asChild variant="medical" className="w-full">
                    <Link to={specialty.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/specialties">View All Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary px-4">Why Choose AGCH?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Experience the difference with our commitment to excellence in healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary px-4">Patient Stories</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Hear from those whose lives we've touched through compassionate care
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <Card className="p-6 sm:p-8 shadow-card">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />)}
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl italic mb-4 sm:mb-6 text-muted-foreground px-2">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{testimonials[currentTestimonial].condition}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary' : 'bg-muted'}`} onClick={() => setCurrentTestimonial(index)} />)}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Healthcare Journey?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Book an appointment with our expert doctors or explore our comprehensive medical services
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button variant="cta" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;