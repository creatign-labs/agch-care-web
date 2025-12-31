import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Early Signs of Cancer: What to Watch For",
      excerpt: "Early detection is key to successful cancer treatment. Learn about the warning signs that shouldn't be ignored.",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      category: "Cancer Awareness",
    },
    {
      title: "The Role of Nutrition in Cancer Prevention",
      excerpt: "Discover how dietary choices can significantly impact your cancer risk and overall health.",
      author: "Dr. Rajesh Kumar",
      date: "December 10, 2024",
      category: "Nutrition",
    },
    {
      title: "Advances in Cardiac Surgery: Minimally Invasive Techniques",
      excerpt: "Modern cardiac surgery has evolved dramatically. Learn about the latest minimally invasive procedures.",
      author: "Dr. Amit Patel",
      date: "December 5, 2024",
      category: "Cardiology",
    },
    {
      title: "Managing Stress for Better Heart Health",
      excerpt: "Chronic stress can impact your cardiovascular health. Here are evidence-based strategies to manage it.",
      author: "Dr. Sneha Gupta",
      date: "November 28, 2024",
      category: "Wellness",
    },
    {
      title: "Immunotherapy: A New Hope in Cancer Treatment",
      excerpt: "Immunotherapy is revolutionizing cancer treatment. Understand how it works and who can benefit.",
      author: "Dr. Vikram Singh",
      date: "November 20, 2024",
      category: "Cancer Treatment",
    },
    {
      title: "Joint Replacement Surgery: What to Expect",
      excerpt: "Planning for joint replacement? Here's a comprehensive guide to help you prepare for surgery and recovery.",
      author: "Dr. Meera Reddy",
      date: "November 15, 2024",
      category: "Orthopaedics",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Health Insights & Updates
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest health news, medical breakthroughs, and wellness tips from our expert doctors.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <CardHeader className="pb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full w-fit">
                    {post.category}
                  </span>
                  <CardTitle className="text-lg text-primary mt-2 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-base sm:text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest health tips and hospital updates.
          </p>
          <Button asChild variant="cta" size="lg">
            <Link to="/contact">Subscribe Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
