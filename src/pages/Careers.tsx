import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Oncologist",
      department: "Cancer Care",
      location: "Main Campus",
      type: "Full-time",
    },
    {
      title: "Registered Nurse - ICU",
      department: "Critical Care",
      location: "Main Campus",
      type: "Full-time",
    },
    {
      title: "Medical Technologist",
      department: "Laboratory",
      location: "Main Campus",
      type: "Full-time",
    },
    {
      title: "Patient Care Coordinator",
      department: "Administration",
      location: "Main Campus",
      type: "Full-time",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Join Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a team dedicated to transforming healthcare and making a difference in patients' lives.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-primary">
            Why Work at AGCH?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Career Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous learning opportunities and clear career progression paths.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Work-Life Balance</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible schedules and comprehensive benefits for your wellbeing.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Modern Facilities</h3>
                <p className="text-muted-foreground text-sm">
                  State-of-the-art equipment and comfortable working environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-primary">
            Current Openings
          </h2>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                  <Button variant="medical" size="sm">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume for future opportunities.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
