"use client";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Bell, LifeBuoy, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { useAuth } from "../auth-provider";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";


export function Header() {
  const userAvatar = PlaceHolderImages.find((p) => p.id === "avatar-1");
  const pathname = usePathname();
  const currentPage = navLinks.find(link => link.href === pathname);
  
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-8">
      <SidebarTrigger className="md:hidden" />
      <h1 className="text-xl font-semibold tracking-tight font-headline hidden md:block">
        {currentPage?.label || 'ProfitPilot'}
      </h1>

      <div className="flex w-full items-center justify-end gap-4">
        <NotificationBell />
        <UserMenu userAvatar={userAvatar} />
      </div>
    </header>
  );
}

function UserMenu({ userAvatar }: { userAvatar: any }) {
  const { user } = useAuth();
  
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-9 w-9 rounded-full"
        >
          <Avatar className="h-9 w-9">
            {user?.photoURL && <AvatarImage src={user.photoURL} alt="User" />}
            <AvatarFallback>{user?.email?.[0].toUpperCase() ?? 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.displayName ?? 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email ?? ''}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function NotificationBell() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Notifications</h4>
                        <p className="text-sm text-muted-foreground">
                            You have 2 new margin alerts.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2 text-primary">
                                <Bell className="h-4 w-4" />
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Margin Alert: "Burger Combo"</p>
                                <p className="text-sm text-muted-foreground">
                                    Margin dropped by 5% below threshold.
                                </p>
                                <p className="text-xs text-muted-foreground">15 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-destructive/10 p-2 text-destructive">
                                <Bell className="h-4 w-4" />
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium">Critical: "Pizza Special"</p>
                                <p className="text-sm text-muted-foreground">
                                    Ingredient cost increased by 20%.
                                </p>
                                <p className="text-xs text-muted-foreground">1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}