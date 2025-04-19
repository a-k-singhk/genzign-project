"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Search, Filter, Shirt } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import { useLikes } from "@/hooks/use-likes";
import Link from "next/link";

interface Design {
  id: number;
  title: string;
  creator: string;
  image: string;
  likes: number;
  price: number;
  tokens: number;
  category: string;
}

export default function MarketplacePage() {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { addLike, removeLike, likedItems } = useLikes();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("trending");
  const [filterCategory, setFilterCategory] = useState("all");

  const designs: Design[] = [
    {
      id: 1,
      title: "Cosmic Dreams",
      creator: "astro_designer",
      image: "/cosmic_dreams.jpg",
      likes: 243,
      price: 29.99,
      tokens: 15,
      category: "abstract",
    },
    {
      id: 2,
      title: "Urban Jungle",
      creator: "city_vibes",
      image: "/urban_jungle.jpg",
      likes: 187,
      price: 34.99,
      tokens: 20,
      category: "nature",
    },
    {
      id: 3,
      title: "Neon Waves",
      creator: "digital_artist",
      image: "/neon_waves.jpg",
      likes: 312,
      price: 27.99,
      tokens: 12,
      category: "abstract",
    },
    {
      id: 4,
      title: "Retro Future",
      creator: "time_traveler",
      image: "/retro_future.jpg",
      likes: 156,
      price: 32.99,
      tokens: 18,
      category: "retro",
    },
  ];

  const sortedDesigns = useMemo(() => {
    const filtered = designs.filter((design) => {
      const matchesSearch =
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.creator.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        filterCategory === "all" || design.category === filterCategory;
      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "trending") return b.likes - a.likes;
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });
  }, [searchQuery, filterCategory, sortBy]);

  const handleBuyNow = (design: Design) => {
    toast({
      title: "Purchase Initiated",
      description: `Proceeding to checkout for ${design.title}`,
    });
    // Add your buy now logic here
  };

  const toggleCart = (design: Design) => {
    const isInCart = cartItems.some((item) => item.id === design.id);

    if (isInCart) {
      removeFromCart(design.id);
      toast({
        title: "Removed from cart",
        description: `${design.title} has been removed from your cart`,
      });
    } else {
      addToCart({
        id: design.id,
        name: design.title,
        price: design.price,
        quantity: 1,
        image: design.image,
      });
      toast({
        title: "Added to cart",
        description: `${design.title} has been added to your cart`,
      });
    }
  };

  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  const toggleLike = (designId: number) => {
    likedItems.includes(designId) ? removeLike(designId) : addLike(designId);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Design Marketplace
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Explore and shop unique shirt designs created by our community
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search designs or creators..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <Select
                  value={filterCategory}
                  onValueChange={setFilterCategory}
                >
                  <SelectTrigger className="w-[160px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                    <SelectItem value="nature">Nature</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                    <SelectItem value="retro">Retro</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Designs</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="new">New Arrivals</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="liked">
                  <Link href="/liked">Liked</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {sortedDesigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedDesigns.map((design) => (
                <Card
                  key={design.id}
                  className="overflow-hidden border-none shadow-md"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    <button
                      onClick={() => toggleLike(design.id)}
                      className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full py-1 px-2"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          likedItems.includes(design.id)
                            ? "fill-rose-500 text-rose-500"
                            : "text-rose-500"
                        }`}
                      />
                      <span className="text-xs font-medium">
                        {design.likes +
                          (likedItems.includes(design.id) ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-lg">{design.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        by @{design.creator}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          ${design.price.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          or {design.tokens} tokens
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-brown-dark text-brown-dark hover:bg-brown-dark/10"
                          onClick={() => handleBuyNow(design)}
                        >
                          Buy Now
                        </Button>
                        <Button
                          size="sm"
                          className={`w-32 ${
                            isInCart(design.id)
                              ? "bg-brown-darker hover:bg-brown-darkest"
                              : "bg-brown-dark hover:bg-brown-darker"
                          } text-white`}
                          onClick={() => toggleCart(design)}
                        >
                          {isInCart(design.id) ? (
                            "Added To Cart"
                          ) : (
                            <>
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add To Cart
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Shirt className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No designs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
