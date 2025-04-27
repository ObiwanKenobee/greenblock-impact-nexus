
import { ChartBar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityFeedProps {
  className?: string;
}

const ActivityFeed = ({ className }: ActivityFeedProps) => {
  const activities = [
    {
      title: "New carbon credit earned",
      description: "Verified 5 planted trees in Karura Forest",
      time: "2 hours ago",
      type: "credit",
      amount: "+2.5 tCO₂e",
    },
    {
      title: "Supply chain optimization",
      description: "Reduced food miles by 12% through local sourcing",
      time: "Yesterday",
      type: "optimization",
      amount: "+18% efficiency",
    },
    {
      title: "New connection",
      description: "Connected with Kibiko Farm Cooperative",
      time: "2 days ago",
      type: "connection",
    },
    {
      title: "Token trade",
      description: "Traded carbon credits for GBT tokens",
      time: "3 days ago",
      type: "trade",
      amount: "+45 GBT",
    },
    {
      title: "Impact verified",
      description: "AI verified soil restoration project",
      time: "1 week ago",
      type: "verification",
      amount: "+8.3 tCO₂e",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "credit":
        return <div className="p-1.5 rounded-full bg-green-100 text-green-700">💎</div>;
      case "optimization":
        return <div className="p-1.5 rounded-full bg-blue-100 text-blue-700">⚡</div>;
      case "connection":
        return <div className="p-1.5 rounded-full bg-purple-100 text-purple-700">🤝</div>;
      case "trade":
        return <div className="p-1.5 rounded-full bg-amber-100 text-amber-700">💱</div>;
      case "verification":
        return <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700">✓</div>;
      default:
        return <div className="p-1.5 rounded-full bg-gray-100">📋</div>;
    }
  };

  return (
    <Card className={`${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl">Activity Feed</CardTitle>
          <CardDescription>Recent platform activities</CardDescription>
        </div>
        <ChartBar className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3">
              {getActivityIcon(activity.type)}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  {activity.amount && (
                    <span className="text-xs font-medium text-green-600">{activity.amount}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
