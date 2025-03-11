"use client";

import React, { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  Users,
  UserPlus,
  ChevronDown,
  ChevronRight,
  BarChart2,
  Award,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  rank: string;
  personalVolume: number;
  groupVolume: number;
  status: "active" | "inactive" | "new";
  joinDate: string;
  email: string;
  phone: string;
  sponsoredMembers: number;
  lastActivity: string;
}

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rankFilter, setRankFilter] = useState("all");

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      rank: "Ruby",
      personalVolume: 1250,
      groupVolume: 8500,
      status: "active",
      joinDate: "2021-05-15",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      sponsoredMembers: 8,
      lastActivity: "2023-10-12",
    },
    {
      id: "2",
      name: "Emily Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rank: "Gold",
      personalVolume: 980,
      groupVolume: 6200,
      status: "active",
      joinDate: "2021-08-22",
      email: "emily.davis@example.com",
      phone: "+1 (555) 234-5678",
      sponsoredMembers: 5,
      lastActivity: "2023-10-14",
    },
    {
      id: "3",
      name: "Michael Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rank: "Silver",
      personalVolume: 750,
      groupVolume: 3800,
      status: "active",
      joinDate: "2022-01-10",
      email: "michael.wilson@example.com",
      phone: "+1 (555) 345-6789",
      sponsoredMembers: 3,
      lastActivity: "2023-10-10",
    },
    {
      id: "4",
      name: "Jennifer Adams",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
      rank: "Bronze",
      personalVolume: 320,
      groupVolume: 1200,
      status: "new",
      joinDate: "2023-09-28",
      email: "jennifer.adams@example.com",
      phone: "+1 (555) 456-7890",
      sponsoredMembers: 1,
      lastActivity: "2023-10-15",
    },
    {
      id: "5",
      name: "Robert Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rank: "Silver",
      personalVolume: 680,
      groupVolume: 3200,
      status: "active",
      joinDate: "2022-03-15",
      email: "robert.johnson@example.com",
      phone: "+1 (555) 567-8901",
      sponsoredMembers: 4,
      lastActivity: "2023-10-08",
    },
    {
      id: "6",
      name: "Lisa Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rank: "Bronze",
      personalVolume: 420,
      groupVolume: 1500,
      status: "active",
      joinDate: "2022-06-20",
      email: "lisa.thompson@example.com",
      phone: "+1 (555) 678-9012",
      sponsoredMembers: 2,
      lastActivity: "2023-10-05",
    },
    {
      id: "7",
      name: "David Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rank: "Bronze",
      personalVolume: 280,
      groupVolume: 800,
      status: "inactive",
      joinDate: "2022-08-05",
      email: "david.miller@example.com",
      phone: "+1 (555) 789-0123",
      sponsoredMembers: 0,
      lastActivity: "2023-09-20",
    },
    {
      id: "8",
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2",
      rank: "Gold",
      personalVolume: 850,
      groupVolume: 5800,
      status: "active",
      joinDate: "2021-11-12",
      email: "sarah.wilson@example.com",
      phone: "+1 (555) 890-1234",
      sponsoredMembers: 6,
      lastActivity: "2023-10-13",
    },
  ];

  const filteredMembers = teamMembers.filter((member) => {
    // Apply search filter
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());

    // Apply status filter
    const matchesStatus =
      statusFilter === "all" || member.status === statusFilter;

    // Apply rank filter
    const matchesRank = rankFilter === "all" || member.rank === rankFilter;

    return matchesSearch && matchesStatus && matchesRank;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      case "new":
        return <Badge className="bg-yellow-100 text-yellow-800">New</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Team</h1>
          <p className="text-gray-500 mt-1">
            Manage and monitor your downline organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Team Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">32</p>
                  <p className="text-sm text-gray-500">Total members</p>
                </div>
              </div>
              <div className="mt-2 text-sm text-green-600 flex items-center">
                <span>+3 new members this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Team Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BarChart2 className="h-8 w-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">28,500</p>
                  <p className="text-sm text-gray-500">Total GVP</p>
                </div>
              </div>
              <div className="mt-2 text-sm text-green-600 flex items-center">
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Award className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <p className="text-3xl font-bold">87.5%</p>
                  <p className="text-sm text-gray-500">28 of 32 active</p>
                </div>
              </div>
              <div className="mt-2">
                <Progress value={87.5} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white shadow-md mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>View and manage your downline</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={rankFilter} onValueChange={setRankFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Filter by rank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranks</SelectItem>
                    <SelectItem value="Ruby">Ruby</SelectItem>
                    <SelectItem value="Gold">Gold</SelectItem>
                    <SelectItem value="Silver">Silver</SelectItem>
                    <SelectItem value="Bronze">Bronze</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Member
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Rank
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Volume
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Join Date
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage
                              src={member.avatar}
                              alt={member.name}
                            />
                            <AvatarFallback>
                              {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-xs text-gray-500">
                              {member.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="font-medium">
                          {member.rank}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm">PV: {member.personalVolume}</p>
                          <p className="text-xs text-gray-500">
                            GV: {member.groupVolume}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(member.status)}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm">
                            {formatDate(member.joinDate)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {member.sponsoredMembers} sponsored
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredMembers.length === 0 && (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">
                    No team members found matching your filters
                  </p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Last updated: October 15, 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle>Team Structure</CardTitle>
            <CardDescription>
              Visual representation of your downline organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 text-center">
              <div className="inline-block">
                <div className="mb-6">
                  <Avatar className="h-16 w-16 border-4 border-purple-100 mx-auto">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="Sarah Johnson"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <p className="mt-2 font-medium">Sarah Johnson</p>
                  <Badge className="mt-1">Elite Executive</Badge>
                </div>

                <div className="w-0.5 h-8 bg-gray-300 mx-auto mb-6"></div>

                <div className="flex flex-wrap justify-center gap-8">
                  {teamMembers.slice(0, 4).map((member) => (
                    <div key={member.id} className="text-center">
                      <Avatar className="h-12 w-12 border-2 border-blue-100 mx-auto">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="mt-2 text-sm font-medium">{member.name}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {member.rank}
                      </Badge>

                      {member.sponsoredMembers > 0 && (
                        <>
                          <div className="w-0.5 h-6 bg-gray-300 mx-auto my-2"></div>
                          <div className="flex justify-center gap-4">
                            {Array.from({
                              length: Math.min(member.sponsoredMembers, 2),
                            }).map((_, idx) => (
                              <div key={idx} className="text-center">
                                <Avatar className="h-8 w-8 border border-gray-200">
                                  <AvatarFallback className="text-xs">
                                    TM
                                  </AvatarFallback>
                                </Avatar>
                                <p className="mt-1 text-xs">Team Member</p>
                              </div>
                            ))}
                            {member.sponsoredMembers > 2 && (
                              <div className="text-center">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                                  <span className="text-xs text-gray-500">
                                    +{member.sponsoredMembers - 2}
                                  </span>
                                </div>
                                <p className="mt-1 text-xs">More</p>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Button variant="outline">View Full Organization Chart</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2023 Trévo Compensation Dashboard. All rights reserved.</p>
          <p className="mt-1">Last data update: October 15, 2023 at 10:30 AM</p>
        </div>
      </footer>
    </div>
  );
}
