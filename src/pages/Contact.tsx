import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Ambulance, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Main Hospital",
      icon: <Phone className="w-6 h-6 text-teal-500" />,
      details: ["+91 80 1234 5678", "Available 24/7"]
    },
    {
      title: "Emergency",
      icon: <Ambulance className="w-6 h-6 text-red-500" />,
      details: ["1800-123-AGCH (2424)", "24/7 Emergency Services"]
    },
    {
      title: "Appointments",
      icon: <Calendar className="w-6 h-6 text-teal-500" />,
      details: ["+91 80 1234 5679", "Mon-Sat: 8:00 AM - 8:00 PM"]
    },
    {
      title: "General Enquiries",
      icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
      details: ["info@agch.com", "Response within 24 hours"]
    }
  ];

  const departments = [
    "General Enquiry",
    "Appointment Booking",
    "Emergency Services",
    "Insurance & Billing",
    "Patient Feedback",
    "Medical Records",
    "Pharmacy",
    "Other"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you with all your healthcare needs. Reach out to us 
              for appointments, inquiries, or emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{contact.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className={`${idx === 0 ? 'font-semibold text-primary' : 'text-muted-foreground'} text-sm`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">First Name *</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Last Name *</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Email *</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Phone Number *</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Department</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Subject *</label>
                  <Input placeholder="Enter message subject" />
                </div>

                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Message *</label>
                  <Textarea 
                    placeholder="Enter your message here..."
                    rows={6}
                  />
                </div>

                <Button variant="medical" className="w-full" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We'll respond to your inquiry within 24 hours during business days.
                </p>
              </CardContent>
            </Card>

            {/* Location & Hours */}
            <div className="space-y-8">
              {/* Location */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Address:</h4>
                      <p className="text-muted-foreground">
                        Advance Global Care Hospital<br />
                        123 Healthcare Avenue<br />
                        Medical District, City 560001<br />
                        Karnataka, India
                      </p>
                    </div>
                    
                    {/* Embedded Map Placeholder */}
                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Interactive Map</p>
                        <p className="text-xs">Click to view in Google Maps</p>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-primary">Emergency Services</span>
                        <span className="text-accent font-semibold">24/7</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-primary">OPD & Consultations</span>
                        <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-primary">Laboratory</span>
                        <span className="text-muted-foreground">6:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-primary">Pharmacy</span>
                        <span className="text-accent font-semibold">24/7</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium text-primary">Visiting Hours</span>
                        <span className="text-muted-foreground">4:00 PM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-primary">Administrative Office</span>
                        <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>

                    <div className="p-4 bg-teal-50 rounded-lg">
                      <p className="text-sm text-teal-800">
                        <strong>Note:</strong> Holiday hours may vary. Please call ahead 
                        for specific department timings during festivals and public holidays.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Ambulance className="w-16 h-16 text-accent mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">Medical Emergency?</h2>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait - call our emergency helpline immediately for urgent medical situations
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

export default Contact;