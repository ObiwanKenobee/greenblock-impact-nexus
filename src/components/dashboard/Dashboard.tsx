
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserButton } from "@/components/dashboard/UserButton";
import WalletCard from "@/components/dashboard/WalletCard";
import ImpactMetrics from "@/components/dashboard/ImpactMetrics";
import SupplyChainScanner from "@/components/dashboard/SupplyChainScanner";
import ImpactVerification from "@/components/dashboard/ImpactVerification";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import StatCard from "@/components/shared/StatCard";
import { TreeDeciduous, Users, Wallet, ChartBar, Satellite, FileCheck, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// We'll mock the user role for now
// In a real app, this would come from authentication context
type UserRole = "business" | "farmer" | "verifier" | "supporter";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [userRole, setUserRole] = useState<UserRole>("business");
  const navigate = useNavigate();
  
  // Mock user data - in a real app this would come from an authentication context
  useEffect(() => {
    // Check if we have a stored role preference
    const storedRole = localStorage.getItem("userRole") as UserRole | null;
    if (storedRole) {
      setUserRole(storedRole);
    }
    
    // For demo purposes, allow changing roles
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "r") {
        const roles: UserRole[] = ["business", "farmer", "verifier", "supporter"];
        const currentIndex = roles.indexOf(userRole);
        const nextRole = roles[(currentIndex + 1) % roles.length];
        setUserRole(nextRole);
        localStorage.setItem("userRole", nextRole);
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [userRole]);
  
  const renderStatCards = () => {
    switch (userRole) {
      case "business":
        return (
          <>
            <StatCard 
              icon={Wallet}
              label="Carbon Credits"
              value="25.4 tCO₂e"
              trend={{ value: 12.3, isPositive: true }}
            />
            <StatCard 
              icon={TreeDeciduous}
              label="Supplier Impact"
              value="133 farms"
              trend={{ value: 8.7, isPositive: true }}
            />
            <StatCard 
              icon={Users}
              label="Network Partners"
              value="28"
              trend={{ value: 5.2, isPositive: true }}
            />
            <StatCard 
              icon={ChartBar}
              label="Sustainability Score"
              value="87/100"
              trend={{ value: 3.1, isPositive: true }}
            />
          </>
        );
      case "farmer":
        return (
          <>
            <StatCard 
              icon={Wallet}
              label="Carbon Earnings"
              value="12.7 tCO₂e"
              trend={{ value: 16.8, isPositive: true }}
            />
            <StatCard 
              icon={TreeDeciduous}
              label="Trees Planted"
              value="214"
              trend={{ value: 24.5, isPositive: true }}
            />
            <StatCard 
              icon={Satellite}
              label="Land Coverage"
              value="4.2 ha"
              trend={{ value: 0, isPositive: true }}
            />
            <StatCard 
              icon={ChartBar}
              label="Growth Potential"
              value="92/100"
              trend={{ value: 5.3, isPositive: true }}
            />
          </>
        );
      case "verifier":
        return (
          <>
            <StatCard 
              icon={FileCheck}
              label="Pending Verifications"
              value="7"
              trend={{ value: -2.3, isPositive: false }}
            />
            <StatCard 
              icon={ShieldCheck}
              label="Completed Verifications"
              value="124"
              trend={{ value: 8.7, isPositive: true }}
            />
            <StatCard 
              icon={Users}
              label="Projects Monitored"
              value="16"
              trend={{ value: 12.5, isPositive: true }}
            />
            <StatCard 
              icon={ChartBar}
              label="Accuracy Rating"
              value="95/100"
              trend={{ value: 1.5, isPositive: true }}
            />
          </>
        );
      case "supporter":
        return (
          <>
            <StatCard 
              icon={Wallet}
              label="Contributed Credits"
              value="3.4 tCO₂e"
              trend={{ value: 28.3, isPositive: true }}
            />
            <StatCard 
              icon={TreeDeciduous}
              label="Trees Sponsored"
              value="42"
              trend={{ value: 15.7, isPositive: true }}
            />
            <StatCard 
              icon={Users}
              label="Farmers Supported"
              value="5"
              trend={{ value: 20.0, isPositive: true }}
            />
            <StatCard 
              icon={ChartBar}
              label="Impact Score"
              value="78/100"
              trend={{ value: 12.1, isPositive: true }}
            />
          </>
        );
    }
  };

  const getRoleName = () => {
    switch(userRole) {
      case "business": return "Business";
      case "farmer": return "Farmer";
      case "verifier": return "Verifier";
      case "supporter": return "Supporter";
    }
  };

  const getTabsForRole = () => {
    const commonTabs = ["overview", "wallet"];
    
    switch(userRole) {
      case "business":
        return [...commonTabs, "impact", "supply-chain", "marketplace", "settings"];
      case "farmer":
        return [...commonTabs, "impact", "projects", "marketplace", "settings"];
      case "verifier":
        return [...commonTabs, "verifications", "analytics", "settings"];
      case "supporter":
        return [...commonTabs, "impact", "donate", "marketplace", "settings"];
    }
  };

  const renderTabContent = () => {
    const tabs = getTabsForRole();
    
    return tabs.map(tab => {
      if (tab === "overview") {
        return (
          <TabsContent key={tab} value="overview">
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {renderStatCards()}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImpactMetrics />
                <WalletCard />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userRole === "business" && <SupplyChainScanner />}
                {userRole === "farmer" && (
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Satellite Monitoring</h3>
                    <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center">
                      <Satellite className="h-12 w-12 text-muted-foreground" />
                      <p className="ml-2 text-muted-foreground">Satellite imagery loading...</p>
                    </div>
                  </div>
                )}
                {userRole === "verifier" && (
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Verification Queue</h3>
                    <ul className="space-y-2">
                      {[1, 2, 3].map(i => (
                        <li key={i} className="p-3 border rounded-md flex justify-between">
                          <span>Farm Verification #{i}</span>
                          <Button size="sm">Review</Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {userRole === "supporter" && (
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Projects You Support</h3>
                    <ul className="space-y-2">
                      {[1, 2].map(i => (
                        <li key={i} className="p-3 border rounded-md flex justify-between items-center">
                          <div>
                            <p className="font-medium">Reforestation Project #{i}</p>
                            <p className="text-sm text-muted-foreground">Supporting 15 farmers</p>
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-6">
                  <ImpactVerification />
                </div>
              </div>
              
              <ActivityFeed />
            </div>
          </TabsContent>
        );
      }
      
      // Add other tab contents based on roles
      if (tab === "wallet") {
        return (
          <TabsContent key={tab} value="wallet">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <WalletCard className="lg:col-span-2" />
              <ActivityFeed className="md:col-span-2 lg:col-span-1" />
            </div>
          </TabsContent>
        );
      }
      
      if (tab === "impact") {
        return (
          <TabsContent key={tab} value="impact">
            <div className="grid gap-4 md:grid-cols-2">
              <ImpactMetrics className="md:col-span-2" />
              <ImpactVerification />
              <ActivityFeed />
            </div>
          </TabsContent>
        );
      }
      
      if (tab === "supply-chain" && userRole === "business") {
        return (
          <TabsContent key={tab} value="supply-chain">
            <div className="grid gap-4 md:grid-cols-2">
              <SupplyChainScanner className="md:col-span-2" />
            </div>
          </TabsContent>
        );
      }
      
      if (tab === "projects" && userRole === "farmer") {
        return (
          <TabsContent key={tab} value="projects">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4 border rounded-lg">
              <h3 className="text-2xl font-medium mb-2">Your Regenerative Projects</h3>
              <p className="text-muted-foreground mb-6">Manage your carbon credit generating activities</p>
              <Button>Start New Project</Button>
            </div>
          </TabsContent>
        );
      }
      
      if (tab === "verifications" && userRole === "verifier") {
        return (
          <TabsContent key={tab} value="verifications">
            <div className="grid gap-4">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Pending Verifications</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="p-4 border rounded-lg flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Reforestation Verification #{i}</h4>
                        <p className="text-sm text-muted-foreground">Submitted 3 days ago</p>
                      </div>
                      <Button>Verify</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        );
      }
      
      if (tab === "donate" && userRole === "supporter") {
        return (
          <TabsContent key={tab} value="donate">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-6 md:col-span-2">
                <h3 className="text-xl font-medium mb-2">Support Regenerative Projects</h3>
                <p className="text-muted-foreground mb-6">Your contributions directly fund verified environmental projects</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Reforestation Project #{i}</h4>
                      <p className="text-sm text-muted-foreground mb-3">Supporting farmers in Nairobi County</p>
                      <Button className="w-full">Donate</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        );
      }
      
      // Generic placeholder for other tabs
      return (
        <TabsContent key={tab} value={tab}>
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4 border rounded-lg">
            <h3 className="text-2xl font-medium mb-2">{tab.charAt(0).toUpperCase() + tab.slice(1)} Coming Soon</h3>
            <p className="text-muted-foreground">This feature is being developed for the GreenBlock platform</p>
          </div>
        </TabsContent>
      );
    });
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <TreeDeciduous className="h-5 w-5 text-primary" />
            <span>GreenBlock</span>
            <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 ml-1">
              {getRoleName()} View
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <UserButton userRole={userRole} />
          </div>
        </div>
        <div className="container max-w-screen-2xl">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start overflow-x-auto">
              {getTabsForRole().map(tab => (
                <TabsTrigger key={tab} value={tab}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          
            <div className="mt-6">
              {renderTabContent()}
            </div>
          </Tabs>
        </div>
      </header>
      <main className="container max-w-screen-2xl flex-1 py-6">
        {/* Main content area is now empty since all tabs content has been moved inside the Tabs component */}
      </main>
    </div>
  );
};

export default Dashboard;
