import CardList from "@/components/CardList";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

const singleUserPage = () => {
  return (
    <div>
      <DashboardLayout>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/users">User's Profile</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-4 flex flex-col xl:flex-row gap-8">
          {/* Left Side */}
          <div className="w-full xl:1/3 space-y-6">
            {/* User Badeges Container */}
            <div className="bg-primary-foreground p-4 rounded-lg">
              <h1 className="text-xl font-semibold">User Badge</h1>
              <div className="flex gap-4 mt-4">
                <HoverCard>
                  <HoverCardTrigger>
                    <BadgeCheck
                      size={36}
                      className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Admin User</h1>
                    <p className="text-sm text-muted-foreground">
                      This is the badge assigned to all admin users
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Shield
                      size={36}
                      className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Doctors</h1>
                    <p className="text-sm text-muted-foreground">
                      This is the badge assigned to all doctors
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Candy
                      size={36}
                      className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Nurses</h1>
                    <p className="text-sm text-muted-foreground">
                      This is the badge assigned to all nurses
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Citrus
                      size={36}
                      className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Patient </h1>
                    <p className="text-sm text-muted-foreground">
                      This is the badge assigned to all patients
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">User Information</h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Edit User</Button>
                  </SheetTrigger>
                  <EditUser />
                </Sheet>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex flex-col gap-2 mb-8">
                  <p className="text-sm text-muted-foreground">
                    Profile Completion
                  </p>
                  <Progress value={70} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Username</span>
                  <span>Nurullah Muhammad</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Email</span>
                  <span>nurullah@awesome.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Phone Number</span>
                  <span>234814455809</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Location</span>
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">Role</span>
                  <Badge>admin</Badge>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
              <CardList title="Recent Transactions" />
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full xl:2/3 space-y-6">
            <div className="bg-primary-foreground p-4 runded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold">Nurullah Muhammad</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc,
                euismod aliquam nunc nisl euismod nunc.
              </p>
            </div>
            <div className="bg-primary-foreground p-4 runded-lg">
              <AppLineChart />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default singleUserPage;
