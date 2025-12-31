import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Media = () => {
  const pressReleases = [
    {
      title: "AGCH Launches State-of-the-Art Cancer Treatment Center",
      date: "December 20, 2024",
      summary: "Advance Global Care Hospitals inaugurates U.P's largest stand-alone cancer treatment facility with 108 beds.",
    },
    {
      title: "AGCH Partners with International Oncology Research Institute",
      date: "November 15, 2024",
      summary: "Strategic partnership aims to bring cutting-edge cancer research and clinical trials to the region.",
    },
    {
      title: "New Robotic Surgery Program Launched at AGCH",
      date: "October 28, 2024",
      summary: "Hospital introduces advanced robotic surgical systems for precision cancer surgeries.",
    },
  ];

  const mediaKitItems = [
    "Hospital Fact Sheet",
    "Executive Biographies",
    "High-Resolution Logo Files",
    "Facility Images",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Media Center
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest news, press releases, and media resources from Advance Global Care Hospitals.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-6 h-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Press Releases</h2>
          </div>
          <div className="grid gap-4 max-w-3xl">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <p className="text-sm text-accent font-medium mb-2">{release.date}</p>
                  <h3 className="text-lg font-semibold text-primary mb-2">{release.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{release.summary}</p>
                  <Button variant="outline" size="sm">Read Full Release</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-6 h-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">Media Kit</h2>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  Download our media kit for official logos, images, and information about AGCH.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {mediaKitItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="medical">
                  <Download className="w-4 h-4 mr-2" />
                  Download Media Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Media Inquiries</h2>
            <p className="text-base sm:text-lg mb-8 opacity-90">
              For press inquiries, interview requests, or additional information, please contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>media@agch.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91 80 1234 5679</span>
              </div>
            </div>
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Contact Media Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
