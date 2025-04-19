"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { useLikes } from "@/hooks/use-likes";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const designs = [
  {
    id: 1,
    title: "Cosmic Dreams",
    creator: "astro_designer",
    image: "/cosmic_dreams.jpg/?height=200&width=100",
    likes: 243,
    price: 29.99,
    tokens: 15,
    category: "abstract",
  },
  {
    id: 2,
    title: "Urban Jungle",
    creator: "city_vibes",
    image: "/urban_jungle.jpg?height=400&width=300",
    likes: 187,
    price: 34.99,
    tokens: 20,
    category: "nature",
  },
  {
    id: 3,
    title: "Neon Waves",
    creator: "digital_artist",
    image: "/neon_waves.jpg?height=400&width=300",
    likes: 312,
    price: 27.99,
    tokens: 12,
    category: "abstract",
  },
  {
    id: 4,
    title: "Retro Future",
    creator: "time_traveler",
    image: "/retro_future.jpg?height=400&width=300",
    likes: 156,
    price: 32.99,
    tokens: 18,
    category: "retro",
  },
  {
    id: 5,
    title: "Mountain Echo",
    creator: "nature_lover",
    image: "/mountain_echo.jpg?height=400&width=300",
    likes: 201,
    price: 28.99,
    tokens: 14,
    category: "nature",
  },
  {
    id: 6,
    title: "Digital Dreams",
    creator: "pixel_artist",
    image: "/digital_dreams.jpg?height=400&width=300",
    likes: 178,
    price: 31.99,
    tokens: 16,
    category: "digital",
  },
  {
    id: 7,
    title: "Ocean Vibes",
    creator: "sea_dreamer",
    image: "/ocean_vibes.jpg?height=400&width=300",
    likes: 225,
    price: 29.99,
    tokens: 15,
    category: "nature",
  },
  {
    id: 8,
    title: "Cyberpunk City",
    creator: "future_designer",
    image: "/Cyberpunkcity.jpg?height=400&width=300",
    likes: 289,
    price: 33.99,
    tokens: 19,
    category: "digital",
  },
];

export default function LikedPage() {
  const { likedItems, toggleLike } = useLikes(); // Added toggleLike
  const { addToCart, cartItems } = useCart();
  const { toast } = useToast();

  const likedDesigns = designs.filter((design) =>
    likedItems.includes(design.id)
  );

  const handleAddToCart = (design: (typeof designs)[0]) => {
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
  };

  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Your Liked Designs</h1>

          {likedDesigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {likedDesigns.map((design) => (
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
                          className={`w-32 ${
                            isInCart(design.id)
                              ? "bg-brown-darker hover:bg-brown-darkest"
                              : "bg-brown-dark hover:bg-brown-darker"
                          } text-white`}
                          onClick={() => handleAddToCart(design)}
                        >
                          {isInCart(design.id) ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              In Cart
                            </>
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
              <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No liked designs</h3>
              <p className="text-muted-foreground">
                Like some designs to see them here
              </p>
              <Button className="mt-6 bg-brown-dark hover:bg-brown-darker text-white">
                <Link href="/marketplace">Browse Designs</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
