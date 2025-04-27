
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

type UserRole = "business" | "farmer" | "verifier" | "supporter";

interface UserButtonProps {
  userRole?: UserRole;
}

export function UserButton({ userRole = "business" }: UserButtonProps) {
  const navigate = useNavigate();
  
  const getUserInitials = () => {
    switch(userRole) {
      case "business": return "BC";
      case "farmer": return "FR";
      case "verifier": return "VR";
      case "supporter": return "SP";
      default: return "JD";
    }
  };
  
  const getUserName = () => {
    switch(userRole) {
      case "business": return "Business Corp";
      case "farmer": return "Francis Rotich";
      case "verifier": return "Veronica Ramos";
      case "supporter": return "Sam Parker";
      default: return "John Doe";
    }
  };
  
  const getUserEmail = () => {
    switch(userRole) {
      case "business": return "contact@businesscorp.com";
      case "farmer": return "francis.rotich@example.com";
      case "verifier": return "veronica.r@verification.org";
      case "supporter": return "sam.parker@example.com";
      default: return "john.doe@example.com";
    }
  };

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
            {getUserInitials()}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{getUserName()}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {getUserEmail()}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Wallet</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
