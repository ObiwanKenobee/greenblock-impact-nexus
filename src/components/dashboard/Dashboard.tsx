
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserButton } from "@/components/dashboard/UserButton";
import WalletCard from "@/components/dashboard/WalletCard";
import ImpactMetrics from "@/components/dashboard/ImpactMetrics";
import SupplyChainScanner from "@/components/dashboard/SupplyChainScanner";
import ImpactVerification from "@/components/dashboard/ImpactVerification";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import StatCard from "@/components/shared/StatCard";
import { TreeDeciduous, Users, Wallet, ChartBar } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <TreeDeciduous className="h-5 w-5 text-primary" />
            <span>GreenBlock</span>
          </div>
          
          <div className="flex items-center gap-2">
            <UserButton />
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
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      <main className="container max-w-screen-2xl flex-1 py-6">
        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard 
                icon={Wallet}
                label="Carbon Credits"
                value="25.4 tCO₂e"
                trend={{ value: 12.3, isPositive: true }}
              />
              <StatCard 
                icon={TreeDeciduous}
                label="Trees Planted"
                value="133"
                trend={{ value: 8.7, isPositive: true }}
              />
              <StatCard 
                icon={Users}
                label="Network Connections"
                value="28"
                trend={{ value: 5.2, isPositive: true }}
              />
              <StatCard 
                icon={ChartBar}
                label="Impact Score"
                value="87/100"
                trend={{ value: 3.1, isPositive: true }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImpactMetrics />
              <WalletCard />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SupplyChainScanner />
              <div className="grid grid-cols-1 gap-6">
                <ImpactVerification />
              </div>
            </div>
            
            <ActivityFeed />
          </div>
        </TabsContent>

        <TabsContent value="wallet" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <WalletCard className="lg:col-span-2" />
            <ActivityFeed className="md:col-span-2 lg:col-span-1" />
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <ImpactMetrics className="md:col-span-2" />
            <ImpactVerification />
            <ActivityFeed />
          </div>
        </TabsContent>

        <TabsContent value="supply-chain" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            <SupplyChainScanner className="md:col-span-2" />
          </div>
        </TabsContent>
        
        <TabsContent value="marketplace">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4 border rounded-lg">
            <h3 className="text-2xl font-medium mb-2">Marketplace Coming Soon</h3>
            <p className="text-muted-foreground">Trade carbon credits and connect with regenerative partners</p>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4 border rounded-lg">
            <h3 className="text-2xl font-medium mb-2">Settings Coming Soon</h3>
            <p className="text-muted-foreground">Configure your GreenBlock platform preferences</p>
          </div>
        </TabsContent>
      </main>
    </div>
  );
};

export default Dashboard;
