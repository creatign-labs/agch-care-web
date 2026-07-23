import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Clock, Shield, Star, ChevronLeft, ChevronRight, Check, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import medicalTeam from "@/assets/medical-team.jpg";
import operatingTheater from "@/assets/operating-theater.jpg";
import patientConsultation from "@/assets/patient-consultation.jpg";
import hospitalExterior from "@/assets/hospital-exterior.jpg";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";
import heroDoctors1 from "@/assets/hero-doctors-1.jpg";
import heroDoctors2 from "@/assets/hero-doctors-2.jpg";
import heroDoctors3 from "@/assets/hero-doctors-3.jpg";
import heroDoctors4 from "@/assets/hero-doctors-4.jpg";
import heroDoctors5 from "@/assets/hero-doctors-5.jpg";
import heroDoctors6 from "@/assets/hero-doctors-6.jpg";
import heroDoctors7 from "@/assets/hero-doctors-7.jpg";
import heroDoctors8 from "@/assets/hero-doctors-8.jpg";

const HERO_OPTIONS = [
  { src: heroDoctors1, label: "Option 1" },
  { src: heroDoctors2, label: "Option 2" },
  { src: heroDoctors3, label: "Option 3" },
  { src: heroDoctors4, label: "Option 4" },
  { src: heroDoctors5, label: "Option 5" },
  { src: heroDoctors6, label: "Option 6" },
  { src: heroDoctors7, label: "Option 7" },
  { src: heroDoctors8, label: "Option 8" },
];

const SectionChip = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    {children}
  </div>
);

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroIndex, setHeroIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const saved = Number(window.localStorage.getItem("agch:heroIndex"));
    return Number.isFinite(saved) && saved >= 0 && saved < HERO_OPTIONS.length ? saved : 0;
  });
  const selectHero = (i: number) => {
    setHeroIndex(i);
    try { window.localStorage.setItem("agch:heroIndex", String(i)); } catch { /* ignore */ }
  };

  const stats = [
    { value: "4k+", label: "Verified Doctors" },
    { value: "300+", label: "Partner Clinics" },
    { value: "60+", label: "Medical Specialties" },
  ];

  const specialties = [
    { title: "Cancer Care", description: "Comprehensive oncology services with advanced treatment options", icon: "🎗️", featured: true, link: "/specialties/oncology" },
    { title: "Cardiology", description: "Expert heart care with state-of-the-art cardiac procedures", icon: "❤️", link: "/specialties" },
    { title: "Orthopaedics", description: "Complete bone and joint care including joint replacement", icon: "🦴", link: "/specialties" },
    { title: "Neurology & Neurosurgery", description: "Advanced brain and spine treatments with comprehensive and cutting-edge care", icon: "🧠", link: "/specialties" },
  ];

  const trustPoints = [
    "100% Secure & Confidential",
    "Award-winning Healthcare",
    "24/7 Expert Support",
  ];

  const whyChooseUs = [
    { title: "Advanced Technology", description: "Precision & Innovation", icon: <Shield className="w-6 h-6 text-teal-500" /> },
    { title: "Expert Doctors", description: "Expertise You Can Trust", icon: <Users className="w-6 h-6 text-teal-500" /> },
    { title: "Patient-First Approach", description: "Compassion in Action", icon: <Heart className="w-6 h-6 text-teal-500" /> },
    { title: "24/7 Emergency Care", description: "Ready When You Need Us", icon: <Clock className="w-6 h-6 text-teal-500" /> },
  ];

  const doctors = [
    { name: "Dr. Anaya Sharma", specialty: "Oncologist", image: medicalTeam },
    { name: "Dr. Rohan Verma", specialty: "Cardiologist", image: patientConsultation, featured: true },
    { name: "Dr. Kevin Chen", specialty: "Surgeon", image: operatingTheater },
    { name: "Dr. Shahid Ali", specialty: "Neurologist", image: medicalTeam },
    { name: "Dr. Nasima Begum", specialty: "Radiologist", image: patientConsultation },
  ];

  const insightTags = ["Full Insurance", "Bed Booking", "Patient Safety", "Medical Team"];
  const insights = [
    { title: "How to talk to your loved one about old care", excerpt: "Compassionate approaches to family conversations around senior healthcare needs.", image: medicalTeam },
    { title: "Understanding preventive cancer screening", excerpt: "Early detection saves lives — a guide to the screenings that matter most.", image: patientConsultation },
    { title: "What to expect from a second opinion", excerpt: "How independent expert review can bring clarity to complex diagnoses.", image: operatingTheater },
  ];

  const testimonials = [
    { name: "Sarah Johnson", condition: "Cancer Treatment", quote: "The oncology team at AGCH provided exceptional care throughout my treatment. Their compassionate approach made all the difference.", rating: 5 },
    { name: "Michael Chen", condition: "Heart Surgery", quote: "The cardiac surgery team saved my life. Their expertise and the hospital's advanced facilities are truly world-class.", rating: 5 },
    { name: "Dr. Priya Sharma", condition: "Family Care", quote: "As a referring physician, I trust AGCH for my patients. They consistently deliver excellent outcomes with compassionate care.", rating: 5 },
  ];

  const nextTestimonial = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="pt-6 pb-16 md:pt-10 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-navy-50 via-background to-teal-50 p-6 sm:p-10 lg:p-14 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative z-10 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  India's Leading <span className="text-primary">Cancer Care</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-medium text-primary/80">
                  Accessible. Affordable. Advanced.
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
                  Trusted multi-specialty care combining advanced treatment, compassion and world-class healthcare within reach.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="cta" size="lg">
                    <Link to="/contact">Get Started Today <ArrowRight className="ml-1" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/specialties">Learn More</Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[medicalTeam, patientConsultation, operatingTheater].map((src, i) => (
                      <img key={i} src={src} alt="Patient" className="w-8 h-8 rounded-full object-cover border-2 border-background" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 130K+ users</p>
                </div>
              </div>

              <div className="relative min-h-[420px] lg:min-h-[520px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-hero">
                    <img src={HERO_OPTIONS[heroIndex].src} alt="AGCH doctors team" className="w-full h-full object-cover transition-opacity duration-300" width={1024} height={1280} />
                  </div>
                </div>
                {/* Floating specialty card */}
                <div className="absolute top-8 -left-2 sm:left-4 bg-background rounded-2xl shadow-card p-3 pr-5 flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">O</div>
                  <div>
                    <p className="text-xs text-muted-foreground">Speciality</p>
                    <p className="text-sm font-semibold text-primary">Oncologist</p>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute bottom-6 right-0 sm:right-4 bg-primary text-primary-foreground rounded-2xl shadow-hero p-4 animate-fade-in">
                  <p className="text-xs opacity-80">24/7 Helpline</p>
                  <p className="text-lg font-bold">1800-123-AGCH</p>
                </div>
              </div>
            </div>

            {/* Hero image selector */}
            <div className="mt-8 rounded-2xl bg-background/70 backdrop-blur border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Hero image · pick one</p>
                <p className="text-xs text-muted-foreground">Selection saved on this device</p>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {HERO_OPTIONS.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => selectHero(i)}
                    aria-label={`Select ${opt.label}`}
                    aria-pressed={heroIndex === i}
                    className={`relative shrink-0 w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 transition ${
                      heroIndex === i ? "border-accent ring-2 ring-accent/40" : "border-transparent hover:border-primary/40"
                    }`}
                  >
                    <img src={opt.src} alt={opt.label} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute bottom-1 left-1 right-1 text-[10px] font-semibold text-white bg-black/50 rounded px-1 py-0.5 text-center">
                      {i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + EXPERT DOORSTEP */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center pb-16 border-b border-border">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground max-w-md">
                Trusted Care for Every Step of Your Health Journey
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-8 sm:gap-16">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl sm:text-4xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Expert Healthcare, Right at Your Doorstep
              </h2>
              <p className="mt-5 text-base text-muted-foreground max-w-lg">
                Experience world-class medical care without the wait. Our platform brings together top healthcare professionals to provide you with fast, reliable and personalised healthcare — whenever you need them most.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <Button asChild variant="cta" size="lg"><Link to="/contact">Book Consultation</Link></Button>
                <span className="text-sm text-muted-foreground">Starting at ₹500/visit</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <img src={medicalTeam} alt="Team consultation" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={patientConsultation} alt="Patient consultation" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <img src={operatingTheater} alt="Operating theater" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-accent-foreground">
            U.P's largest stand-alone Cancer Centre with 108 beds.
          </p>
        </div>
      </section>

      {/* ABOUT / SUPPORTING YOUR HEALTH */}
      <section className="py-16 md:py-24 bg-teal-50/40">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] bg-background/60 p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={operatingTheater} alt="Advanced medical facility" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <SectionChip>About Us</SectionChip>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Supporting Your Health<br />At Every Stage Of Life
              </h2>
              <ul className="mt-8 space-y-4">
                {trustPoints.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-base font-medium text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CENTRES OF EXCELLENCE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionChip>Our Specialties</SectionChip>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Centres of Excellence</h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized care across multiple medical disciplines with world-class expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {specialties.map((s, i) => (
              <Card key={i} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${s.featured ? "bg-gradient-card" : ""}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{s.description}</p>
                  <Button asChild variant="medical" size="sm" className="w-full">
                    <Link to={s.link}>Learn More <ArrowRight className="ml-1" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg"><Link to="/specialties">View All Specialties</Link></Button>
          </div>
        </div>
      </section>

      {/* MEET DOCTORS CAROUSEL */}
      <section className="py-16 md:py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <SectionChip>Expert Team</SectionChip>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Meet Our Certified and<br />Expert Doctors
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-xl">
                Certified doctors delivering compassionate, reliable care across multiple medical specialties for everyone.
              </p>
            </div>
            <Button asChild variant="cta" size="lg"><Link to="/doctors">Start Consultation</Link></Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
            {doctors.map((d, i) => (
              <div
                key={i}
                className={`snap-start shrink-0 w-56 sm:w-64 rounded-3xl overflow-hidden border ${
                  d.featured ? "bg-teal-100 border-teal-500" : "bg-background border-border"
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH INSIGHTS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Explore Our Latest Health Insights
            </h2>
            <Button asChild variant="cta" size="lg"><Link to="/blogs">View All Blog <ArrowRight className="ml-1" /></Link></Button>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {insightTags.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted cursor-pointer transition">
                {t}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((post, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" size="sm"><Link to="/blogs">Read more <ArrowRight className="ml-1" /></Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT DARK BAND */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 rounded-[2rem] overflow-hidden">
            <div className="bg-secondary text-secondary-foreground p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Secure an Appointment</h2>
              <p className="mt-3 text-secondary-foreground/80">We will get back to you soon. Office time: 9:00 am to 6:00 pm</p>
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon – Fri, 9am – 6pm</div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1800 123 AGCH</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Multi-city presence</div>
              </div>
            </div>
            <div className="bg-muted p-8 sm:p-12">
              <div className="grid grid-cols-2 gap-3">
                {["Attachments", "New Visit City", "Home Care", "Select Services", "Availability", "Availability"].map((f, i) => (
                  <div key={i} className="rounded-full bg-background px-4 py-3 text-sm text-muted-foreground border border-border">{f}</div>
                ))}
              </div>
              <Button asChild variant="cta" size="lg" className="mt-6 w-full">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionChip>Why AGCH</SectionChip>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Why Choose AGCH?</h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence in healthcare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((f, i) => (
              <Card key={i} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground tracking-tight leading-tight">
                What Our Patients<br />Say About Us
              </h2>
            </div>
            <div className="lg:justify-self-end flex items-center gap-3">
              <div className="flex -space-x-2">
                {[medicalTeam, patientConsultation, operatingTheater].map((s, i) => (
                  <img key={i} src={s} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">More than 700+ patient reviews</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
            <div className="rounded-3xl overflow-hidden aspect-square max-w-[280px]">
              <img src={testimonialAvatar} alt="Patient" className="w-full h-full object-cover" loading="lazy" width={600} height={600} />
            </div>
            <div>
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl leading-relaxed text-foreground">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].condition}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}><ChevronLeft className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}><ChevronRight className="w-4 h-4" /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ready to Start Your Healthcare Journey?</h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Book an appointment with our expert doctors or explore our comprehensive medical services
          </p>
          <Button asChild variant="accent" size="xl"><Link to="/contact">Book an Appointment</Link></Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
