
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/shared/FeatureCard';
import { TreeDeciduous, Wallet, FileSearch, ChartBar, Users } from 'lucide-react';

const Index = () => {
  // Animate elements as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-purple-900/90 via-purple-900/80 to-blue-900/90 text-white">
        <div className="container px-4 py-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                <span className="bg-green-500 h-2 w-2 rounded-full mr-2"></span>
                <span>Launching in Nairobi County</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                AI-Powered <span className="text-green-400">Regenerative</span> Economy Platform
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                Connect businesses, farmers, and conservation projects in a transparent blockchain marketplace that monetizes verified regenerative actions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    Launch Dashboard
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-6 rounded-xl animate-float">
                <div className="bg-white/5 rounded-lg p-4 mb-5 flex items-center gap-3">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <TreeDeciduous className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Total Impact</p>
                    <p className="text-2xl font-bold">12,500 tCO₂e</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/60 text-xs">Trees Planted</p>
                    <p className="text-xl font-semibold">8,432</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/60 text-xs">Farmers Connected</p>
                    <p className="text-xl font-semibold">1,246</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-purple-500/20">
                      <Wallet className="h-4 w-4 text-purple-400" />
                    </div>
                    <span className="text-sm">Your Balance</span>
                  </div>
                  <span className="font-semibold">287 GBT</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg animate-pulse-gentle">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-blue-500/20">
                    <FileSearch className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-sm">AI Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect sustainability with profitability through our innovative platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <FeatureCard 
                icon={Wallet}
                title="GreenBlock Wallet"
                description="Manage carbon credits, regenerative payouts, and sustainability rewards in one secure place."
              />
            </div>
            
            <div className="animate-on-scroll">
              <FeatureCard 
                icon={FileSearch}
                title="Supply Chain Scanner"
                description="AI tool to analyze and optimize product chains for regenerative compliance and efficiency."
              />
            </div>
            
            <div className="animate-on-scroll">
              <FeatureCard 
                icon={ChartBar}
                title="Climate Guardian AI"
                description="Predictive alerts on climate risks, tailored to business and farming practices."
              />
            </div>
            
            <div className="animate-on-scroll">
              <FeatureCard 
                icon={Users}
                title="Impact Ledger"
                description="Blockchain-based transparent recording of all regenerative actions across the network."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Nairobi Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&auto=format&fit=crop" 
                  alt="Nairobi skyline"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Why Nairobi County is the Ideal Launchpad</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg">
                    <strong>Urban-Rural Nexus:</strong> Connects Nairobi's booming business sector with surrounding regenerative lands.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg">
                    <strong>Mobile-First Readiness:</strong> 85%+ mobile money adoption ensures frictionless transactions.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg">
                    <strong>Tech Ecosystem:</strong> Nairobi is Africa's Silicon Savannah — AI talent, blockchain expertise, and innovation culture.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg">
                    <strong>Environmental Urgency:</strong> Kenya faces real climate risks — the need for action is immediate and obvious.
                  </p>
                </div>
              </div>
              
              <Button className="mt-4">
                Learn More About Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How GreenBlock Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our blockchain-based, AI-driven ecosystem incentivizes and verifies regenerative actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="animate-on-scroll text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Capture & Verify</h3>
              <p className="text-muted-foreground">
                Farmers and businesses capture regenerative activities with our mobile app. AI verifies the impact in real-time.
              </p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Tokenize & Record</h3>
              <p className="text-muted-foreground">
                Verified activities are tokenized and securely recorded on the blockchain as carbon credits or impact tokens.
              </p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Trade & Benefit</h3>
              <p className="text-muted-foreground">
                Trade tokens in our marketplace or use them to optimize your supply chain for both profit and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/90 to-green-700/90 text-white">
        <div className="container px-4 mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Regenerative Economy?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Be part of the solution. Connect, verify, and profit from sustainable actions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore the Dashboard
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <p className="text-center text-muted-foreground mb-8">
              Have questions? Contact our team to learn more about GreenBlock.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+254 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@greenblock.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
