import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Blog = () => {
  const { navigate } = usePageTransition();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const blogPosts = [
    {
      title: "5 Tips for the Perfect Staycation Experience",
      excerpt: "Discover how to make the most of your staycation with our expert tips on relaxation, exploration, and creating unforgettable memories.",
      author: "Unreal Homes Team",
      date: "December 5, 2025",
      readTime: "5 min read",
      category: "Travel Tips",
      image: gallery2,
      featured: true
    },
    {
      title: "Why Serviced Apartments Are the Future of Travel",
      excerpt: "From flexibility to comfort, learn why more travelers are choosing serviced apartments over traditional hotels.",
      author: "Unreal Homes Team",
      date: "November 28, 2025",
      readTime: "4 min read",
      category: "Industry Insights",
      image: gallery4,
      featured: false
    },
    {
      title: "Exploring Accra: A Local's Guide",
      excerpt: "From hidden gems to popular attractions, discover the best of Accra with our comprehensive local guide.",
      author: "Unreal Homes Team",
      date: "November 20, 2025",
      readTime: "7 min read",
      category: "Local Guide",
      image: gallery6,
      featured: false
    },
    {
      title: "The Art of Modern Interior Design",
      excerpt: "Take a behind-the-scenes look at how we design our spaces to blend luxury with comfort.",
      author: "Unreal Homes Team",
      date: "November 15, 2025",
      readTime: "6 min read",
      category: "Design",
      image: gallery8,
      featured: false
    },
    {
      title: "Remote Work-Friendly Accommodations",
      excerpt: "Everything you need to know about staying productive while enjoying a change of scenery.",
      author: "Unreal Homes Team",
      date: "November 10, 2025",
      readTime: "5 min read",
      category: "Work & Travel",
      image: gallery9,
      featured: false
    },
    {
      title: "Creating a Home Away From Home",
      excerpt: "Our philosophy on hospitality and why we believe in providing more than just accommodation.",
      author: "Unreal Homes Team",
      date: "November 5, 2025",
      readTime: "4 min read",
      category: "About Us",
      image: gallery10,
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-16" style={{ backgroundImage: `url(${gallery9})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <Badge className="bg-white/20 text-white mb-4">Our Blog</Badge>
          <h1 className="font-alfa text-4xl md:text-6xl mb-4">Stories & Insights</h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl">
            Travel tips, local guides, and behind-the-scenes looks at Unreal Homes
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <motion.div 
            className="container mx-auto px-6 max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleInVariants}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="font-poppins mb-4">Featured Article</Badge>
            </div>
            
            <Card className="overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="font-poppins text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-poppins">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-poppins">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-poppins">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-gradient-brand text-white font-poppins font-semibold gap-2">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-secondary/30">
        <motion.div 
          className="container mx-auto px-6 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Latest Articles</h2>
            <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with our latest stories, tips, and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div key={index} variants={scaleInVariants}>
                <Card className="overflow-hidden group h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-poppins">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-poppins">{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-poppins text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto font-poppins font-semibold text-primary gap-2 hover:bg-transparent hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleInVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-poppins text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get the latest articles, travel tips, and exclusive offers delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-brand text-white font-poppins font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Blog;
