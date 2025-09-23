import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, MapPin, Award } from "lucide-react";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = [
    "All Specialties",
    "Oncology",
    "Cardiology", 
    "Orthopaedics",
    "Neurology",
    "Gastroenterology",
    "General Surgery",
    "Pediatrics"
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Mehta",
      specialization: "Medical Oncology",
      experience: "20+ years",
      qualifications: "MBBS, MD, DM (Oncology)",
      expertise: ["Breast Cancer", "Lung Cancer", "Immunotherapy"],
      availableDays: "Mon, Wed, Fri",
      languages: ["English", "Hindi", "Gujarati"],
      consultationFee: "₹1500",
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiothoracic Surgery",
      experience: "25+ years",
      qualifications: "MBBS, MS, MCh (CVTS)",
      expertise: ["Heart Surgery", "Valve Replacement", "Bypass Surgery"],
      availableDays: "Tue, Thu, Sat",
      languages: ["English", "Hindi"],
      consultationFee: "₹2000",
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      specialization: "Pediatric Oncology",
      experience: "15+ years",
      qualifications: "MBBS, MD (Pediatrics), DM (Pediatric Oncology)",
      expertise: ["Childhood Leukemia", "Brain Tumors", "Pediatric Care"],
      availableDays: "Mon, Wed, Fri",
      languages: ["English"],
      consultationFee: "₹1800",
      rating: 4.9
    },
    {
      id: 4,
      name: "Dr. Amit Sharma",
      specialization: "Orthopaedic Surgery",
      experience: "18+ years",
      qualifications: "MBBS, MS (Ortho), Fellowship Joint Replacement",
      expertise: ["Joint Replacement", "Sports Medicine", "Trauma Surgery"],
      availableDays: "Mon, Tue, Thu",
      languages: ["English", "Hindi", "Punjabi"],
      consultationFee: "₹1200",
      rating: 4.7
    },
    {
      id: 5,
      name: "Dr. Neha Patel",
      specialization: "Neurology",
      experience: "12+ years",
      qualifications: "MBBS, MD (Medicine), DM (Neurology)",
      expertise: ["Stroke Care", "Epilepsy", "Movement Disorders"],
      availableDays: "Wed, Thu, Sat",
      languages: ["English", "Hindi", "Gujarati"],
      consultationFee: "₹1400",
      rating: 4.8
    },
    {
      id: 6,
      name: "Dr. Michael Chen",
      specialization: "Gastroenterology",
      experience: "16+ years",
      qualifications: "MBBS, MD (Medicine), DM (Gastro)",
      expertise: ["Endoscopy", "Liver Disease", "IBD Treatment"],
      availableDays: "Tue, Fri, Sat",
      languages: ["English", "Mandarin"],
      consultationFee: "₹1600",
      rating: 4.6
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === "All Specialties" ||
                            doctor.specialization.toLowerCase().includes(selectedSpecialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Find a Doctor</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with our expert medical professionals who are dedicated to providing 
              exceptional healthcare with compassion and expertise
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by doctor name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="medical" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Doctors
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Doctor Avatar */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(doctor.rating) ? 'text-accent' : 'text-gray-300'
                            }`}
                          >
                            ⭐
                          </div>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">({doctor.rating})</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">{doctor.name}</h3>
                      <p className="text-teal-600 font-semibold">{doctor.specialization}</p>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{doctor.experience}</span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Qualifications:</p>
                      <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.expertise.slice(0, 3).map((expertise, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full"
                          >
                            {expertise}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Available: {doctor.availableDays}</span>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-muted-foreground">Consultation Fee:</span>
                        <span className="font-semibold text-primary">{doctor.consultationFee}</span>
                      </div>
                      <div className="space-y-2">
                        <Button variant="medical" className="w-full">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Full Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-primary mb-2">No doctors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria to find the doctor you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Immediate Medical Attention?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our emergency department is available 24/7 for urgent medical situations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Emergency: 1800-123-AGCH
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+918012342424">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;