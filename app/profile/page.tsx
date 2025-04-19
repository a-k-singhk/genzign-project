"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  ShoppingBag,
  Heart,
  Shirt,
  Coins,
  Edit,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("designs");

  // Mock user data
  const user = {
    name: "Alex Johnson",
    username: "alex_designs",
    avatar: "/placeholder.svg?height=200&width=200",
    joinDate: "January 2023",
    tokens: 45,
    designs: 12,
    purchases: 8,
    likes: 34,
  };

  // Mock designs data
  const userDesigns = [
    {
      id: 1,
      title: "Cosmic Dreams",
      image: "/cosmic_dreams.jpg?height=400&width=300",
      likes: 243,
      price: 29.99,
      tokens: 15,
      date: "2 weeks ago",
    },
    {
      id: 2,
      title: "Urban Jungle",
      image: "/urban_jungle.jpg?height=400&width=300",
      likes: 187,
      price: 34.99,
      tokens: 20,
      date: "1 month ago",
    },
    {
      id: 3,
      title: "Neon Waves",
      image: "/neon_waves.jpg?height=400&width=300",
      likes: 312,
      price: 27.99,
      tokens: 12,
      date: "2 months ago",
    },
  ];

  // Mock purchases data
  const userPurchases = [
    {
      id: 1,
      title: "Retro Future",
      creator: "time_traveler",
      image: "/retro_future.jpg?height=400&width=300",
      price: 32.99,
      date: "3 weeks ago",
      status: "Delivered",
    },
    {
      id: 2,
      title: "Mountain Echo",
      creator: "nature_lover",
      image: "/mountain_echo.jpg?height=400&width=300",
      price: 28.99,
      date: "2 months ago",
      status: "Delivered",
    },
  ];

  // Mock liked designs data
  const likedDesigns = [
    {
      id: 1,
      title: "Digital Dreams",
      creator: "pixel_artist",
      image: "/digital_dreams.jpg?height=400&width=300",
      likes: 178,
      price: 31.99,
      tokens: 16,
    },
    {
      id: 2,
      title: "Ocean Vibes",
      creator: "sea_dreamer",
      image: "/ocean_vibes.jpg?height=400&width=300",
      likes: 225,
      price: 29.99,
      tokens: 15,
    },
    {
      id: 3,
      title: "Cyberpunk City",
      creator: "future_designer",
      image: "/Cyberpunkcity.jpg?height=400&width=300",
      likes: 289,
      price: 33.99,
      tokens: 19,
    },
  ];

  // Mock token history
  const tokenHistory = [
    {
      id: 1,
      type: "earned",
      amount: 15,
      description: "Design approved: Cosmic Dreams",
      date: "2 weeks ago",
    },
    {
      id: 2,
      type: "spent",
      amount: 20,
      description: "Purchased: Mountain Echo",
      date: "2 months ago",
    },
    {
      id: 3,
      type: "earned",
      amount: 15,
      description: "Design approved: Urban Jungle",
      date: "1 month ago",
    },
    {
      id: 4,
      type: "earned",
      amount: 12,
      description: "Design approved: Neon Waves",
      date: "2 months ago",
    },
    {
      id: 5,
      type: "earned",
      amount: 5,
      description: "Referral bonus",
      date: "3 months ago",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {user.name}
                    </h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                    <p className="text-sm text-muted-foreground">
                      Member since {user.joinDate}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brown-light text-brown-dark hover:bg-brown-light/10"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brown-light text-brown-dark hover:bg-brown-light/10"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5">
                    <Shirt className="h-4 w-4 text-brown-light" />
                    <span className="text-sm font-medium">
                      {user.designs} Designs
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShoppingBag className="h-4 w-4 text-brown-light" />
                    <span className="text-sm font-medium">
                      {user.purchases} Purchases
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4 text-brown-light" />
                    <span className="text-sm font-medium">
                      {user.likes} Likes
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Coins className="h-4 w-4 text-brown-light" />
                    <span className="text-sm font-medium">
                      {user.tokens} Tokens
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <Tabs
            defaultValue="designs"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-8">
              <TabsTrigger value="designs">My Designs</TabsTrigger>
              <TabsTrigger value="purchases">Purchases</TabsTrigger>
              <TabsTrigger value="liked">Liked Designs</TabsTrigger>
              <TabsTrigger value="tokens">Token History</TabsTrigger>
            </TabsList>

            <TabsContent value="designs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {userDesigns.map((design) => (
                  <Card
                    key={design.id}
                    className="overflow-hidden border-none shadow-md card-hover"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={design.image || "/placeholder.svg"}
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full py-1 px-2">
                        <Heart className="h-4 w-4 text-rose-500" />
                        <span className="text-xs font-medium">
                          {design.likes}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold text-lg">
                          {design.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Created {design.date}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">${design.price}</p>
                          <p className="text-xs text-muted-foreground">
                            Earns {design.tokens} tokens
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-brown-light text-brown-dark hover:bg-brown-light/10"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Create New Design Card */}
                <Card className="overflow-hidden border-none shadow-md card-hover flex flex-col items-center justify-center aspect-[3/4] bg-brown-light/10">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <div className="p-4 rounded-full bg-brown-light/20 mb-4">
                      <Shirt className="h-8 w-8 text-brown-light" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Create New Design
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Turn your ideas into unique shirt designs
                    </p>
                    <Button className="bg-brown-dark hover:bg-brown-darker text-white">
                      Start Creating
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="purchases">
              <div className="space-y-6">
                {userPurchases.map((purchase) => (
                  <Card key={purchase.id} className="border-none shadow-md">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={purchase.image || "/placeholder.svg"}
                            alt={purchase.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">
                                {purchase.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                by @{purchase.creator}
                              </p>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              {purchase.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mt-4">
                            <div className="flex items-center gap-4">
                              <p className="font-medium">${purchase.price}</p>
                              <p className="text-sm text-muted-foreground">
                                Purchased {purchase.date}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="mt-2 md:mt-0 border-brown-light text-brown-dark hover:bg-brown-light/10"
                            >
                              View Order
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="liked">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedDesigns.map((design) => (
                  <Card
                    key={design.id}
                    className="overflow-hidden border-none shadow-md card-hover"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={design.image || "/placeholder.svg"}
                        alt={design.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full py-1 px-2">
                        <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                        <span className="text-xs font-medium">
                          {design.likes}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold text-lg">
                          {design.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by @{design.creator}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">${design.price}</p>
                          <p className="text-xs text-muted-foreground">
                            or {design.tokens} tokens
                          </p>
                        </div>
                        <Button
                          size="sm"
                          className="bg-brown-dark hover:bg-brown-darker text-white"
                        >
                          Buy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tokens">
              <Card className="border-none shadow-md mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-brown-light/20">
                        <Coins className="h-8 w-8 text-brown-light" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">Token Balance</h3>
                        <p className="text-sm text-muted-foreground">
                          Use tokens to purchase designs
                        </p>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-3xl font-bold text-brown-dark">
                        {user.tokens}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Available Tokens
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-4">Token History</h3>
              <div className="space-y-4">
                {tokenHistory.map((transaction) => (
                  <Card key={transaction.id} className="border-none shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-full ${
                              transaction.type === "earned"
                                ? "bg-green-100 text-green-600"
                                : "bg-amber-100 text-amber-600"
                            }`}
                          >
                            {transaction.type === "earned" ? "+" : "-"}
                          </div>
                          <div>
                            <p className="font-medium">
                              {transaction.description}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <p
                          className={`font-semibold ${
                            transaction.type === "earned"
                              ? "text-green-600"
                              : "text-amber-600"
                          }`}
                        >
                          {transaction.type === "earned" ? "+" : "-"}
                          {transaction.amount} tokens
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
