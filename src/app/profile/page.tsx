"use client";

import React from "react";
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
import {
  Award,
  Calendar,
  Edit,
  Mail,
  Phone,
  MapPin,
  User,
  Settings,
  Shield,
  FileText,
  Clock,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="bg-white shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                      alt="Sarah Johnson"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-xl font-bold">Sarah Johnson</h2>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">
                    Elite Executive
                  </Badge>
                  <p className="mt-2 text-sm text-gray-500">
                    Member since October 2020
                  </p>

                  <div className="mt-6 w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Rank Progress</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="mt-2 text-xs text-gray-500 text-center">
                      25% more to Diamond rank
                    </p>
                  </div>

                  <Button className="mt-6 w-full" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-gray-500">
                        sarah.johnson@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-gray-500">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Sponsor</p>
                      <p className="text-sm text-gray-500">Michael Thompson</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-sm font-medium mb-3">Achievements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-green-50 rounded-md">
                      <Award className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">
                        Fast Start Bonus Qualified
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-blue-50 rounded-md">
                      <Award className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm">Top Recruiter Q2 2023</span>
                    </div>
                    <div className="flex items-center p-2 bg-purple-50 rounded-md">
                      <Award className="h-5 w-5 text-purple-500 mr-2" />
                      <span className="text-sm">5-Year Anniversary</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4 grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="team">My Team</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                    <CardDescription>
                      Your key performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Personal Volume
                        </h4>
                        <p className="text-2xl font-bold">450 PV</p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <span className="flex items-center">
                            +12% from last month
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Team Size
                        </h4>
                        <p className="text-2xl font-bold">32 Members</p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <span className="flex items-center">
                            +3 new this month
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-500 mb-1">
                          Retention Rate
                        </h4>
                        <p className="text-2xl font-bold">94%</p>
                        <div className="mt-2 flex items-center text-sm text-green-600">
                          <span className="flex items-center">
                            +2% from last quarter
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-3">
                        Recent Activities
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">
                              Commission Payment Received
                            </p>
                            <p className="text-xs text-gray-500">
                              $3,250.75 was deposited to your account
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              October 1, 2023
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <User className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">
                              New Team Member Joined
                            </p>
                            <p className="text-xs text-gray-500">
                              Jennifer Adams joined your downline
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              September 28, 2023
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <Award className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">
                              Rank Advancement
                            </p>
                            <p className="text-xs text-gray-500">
                              You advanced to Elite Executive rank
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              September 15, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Goals</CardTitle>
                    <CardDescription>
                      Track your progress toward key milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-purple-500 mr-2" />
                            <span className="font-medium">
                              Diamond Rank Qualification
                            </span>
                          </div>
                          <span className="text-sm">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <p className="mt-1 text-xs text-gray-500">
                          Target date: December 31, 2023
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="font-medium">
                              Recruit 5 New Distributors
                            </span>
                          </div>
                          <span className="text-sm">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <p className="mt-1 text-xs text-gray-500">
                          3 of 5 completed - Target date: November 30, 2023
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-green-500 mr-2" />
                            <span className="font-medium">
                              Quarterly Volume Goal
                            </span>
                          </div>
                          <span className="text-sm">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                        <p className="mt-1 text-xs text-gray-500">
                          4,000 of 10,000 GVP - Target date: December 31, 2023
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Team</CardTitle>
                    <CardDescription>
                      Overview of your downline organization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Total Team Size
                          </h4>
                          <p className="text-2xl font-bold">32 Members</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Active Members
                          </h4>
                          <p className="text-2xl font-bold">28 (87.5%)</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="text-sm font-medium text-gray-500 mb-1">
                            Team Volume
                          </h4>
                          <p className="text-2xl font-bold">8,750 GVP</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          First Generation (Personally Sponsored)
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage
                                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                                  alt="John Smith"
                                />
                                <AvatarFallback>JS</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  John Smith
                                </p>
                                <p className="text-xs text-gray-500">
                                  Ruby Rank • 1,250 PV
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage
                                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                                  alt="Emily Davis"
                                />
                                <AvatarFallback>ED</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  Emily Davis
                                </p>
                                <p className="text-xs text-gray-500">
                                  Gold Rank • 980 PV
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage
                                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                                  alt="Michael Wilson"
                                />
                                <AvatarFallback>MW</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  Michael Wilson
                                </p>
                                <p className="text-xs text-gray-500">
                                  Silver Rank • 750 PV
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage
                                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer"
                                  alt="Jennifer Adams"
                                />
                                <AvatarFallback>JA</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">
                                  Jennifer Adams
                                </p>
                                <p className="text-xs text-gray-500">
                                  Bronze Rank • 320 PV
                                </p>
                              </div>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-800">
                              New
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        View Full Team Structure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Documents & Resources</CardTitle>
                    <CardDescription>
                      Access important files and resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          Commission Statements
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-blue-500 mr-3" />
                              <span className="text-sm">
                                October 2023 Commission Statement
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-blue-500 mr-3" />
                              <span className="text-sm">
                                September 2023 Commission Statement
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-blue-500 mr-3" />
                              <span className="text-sm">
                                August 2023 Commission Statement
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          Training Resources
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-green-500 mr-3" />
                              <span className="text-sm">
                                Compensation Plan Guide
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-green-500 mr-3" />
                              <span className="text-sm">
                                Team Building Strategies
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-green-500 mr-3" />
                              <span className="text-sm">
                                Product Training Manual
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          Tax Documents
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-red-500 mr-3" />
                              <span className="text-sm">
                                2022 Tax Form 1099
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-red-500 mr-3" />
                              <span className="text-sm">
                                2021 Tax Form 1099
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          Profile Information
                        </h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">
                                Full Name
                              </label>
                              <input
                                type="text"
                                value="Sarah Johnson"
                                className="mt-1 w-full p-2 border rounded-md"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">
                                Email Address
                              </label>
                              <input
                                type="email"
                                value="sarah.johnson@example.com"
                                className="mt-1 w-full p-2 border rounded-md"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                value="+1 (555) 123-4567"
                                className="mt-1 w-full p-2 border rounded-md"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">
                                Location
                              </label>
                              <input
                                type="text"
                                value="San Francisco, CA"
                                className="mt-1 w-full p-2 border rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">
                          Notification Preferences
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                Commission Payments
                              </p>
                              <p className="text-xs text-gray-500">
                                Receive notifications when commissions are paid
                              </p>
                            </div>
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                checked
                                className="h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                Team Updates
                              </p>
                              <p className="text-xs text-gray-500">
                                Receive notifications about your team's activity
                              </p>
                            </div>
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                checked
                                className="h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                Rank Advancement
                              </p>
                              <p className="text-xs text-gray-500">
                                Receive notifications about rank advancement
                                opportunities
                              </p>
                            </div>
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                checked
                                className="h-4 w-4"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                Marketing Updates
                              </p>
                              <p className="text-xs text-gray-500">
                                Receive updates about new marketing materials
                              </p>
                            </div>
                            <div className="flex items-center h-5">
                              <input type="checkbox" className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-3">Security</h4>
                        <div className="space-y-4">
                          <Button
                            variant="outline"
                            className="flex items-center"
                          >
                            <Shield className="h-4 w-4 mr-2" />
                            Change Password
                          </Button>
                          <Button
                            variant="outline"
                            className="flex items-center"
                          >
                            <Settings className="h-4 w-4 mr-2" />
                            Two-Factor Authentication
                          </Button>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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
