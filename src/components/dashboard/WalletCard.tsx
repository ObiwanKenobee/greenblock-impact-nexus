
import { Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface WalletCardProps {
  className?: string;
}

const WalletCard = ({ className }: WalletCardProps) => {
  return (
    <Card className={`${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">GreenBlock Wallet</CardTitle>
          <CardDescription>Your carbon credits and tokens</CardDescription>
        </div>
        <Wallet className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-purple-500/10 rounded-md">
            <p className="text-xs uppercase text-muted-foreground font-medium">Carbon Credits</p>
            <p className="text-2xl font-bold mt-1">25.4 tCO₂e</p>
            <div className="mt-2 flex items-center text-xs">
              <span className="text-green-500 font-medium">+12.3%</span>
              <span className="ml-1 text-muted-foreground">this month</span>
            </div>
          </div>
          <div className="p-3 bg-green-500/10 rounded-md">
            <p className="text-xs uppercase text-muted-foreground font-medium">GBT Tokens</p>
            <p className="text-2xl font-bold mt-1">120.32</p>
            <div className="mt-2 flex items-center text-xs">
              <span className="text-green-500 font-medium">+5.7%</span>
              <span className="ml-1 text-muted-foreground">this month</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-4">
          <div>
            <div className="flex items-center justify-between mb-1 text-sm">
              <span>Monthly Target</span>
              <span className="font-medium">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1 text-sm">
              <span>Reputation Score</span>
              <span className="font-medium">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm">Transfer</Button>
          <Button size="sm">Trade</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
