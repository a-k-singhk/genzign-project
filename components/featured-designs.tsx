"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Check } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { useLikes } from "@/hooks/use-likes";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function FeaturedDesigns() {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const { likedItems, toggleLike } = useLikes();
  const { toast } = useToast();
  const router = useRouter();

  const designs = [
    {
      id: 1,
      title: "Cosmic Dreams",
      creator: "astro_designer",
      image: "/cosmic_dreams.jpg?height=400&width=300",
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
  ];

  const handleCartToggle = (design: (typeof designs)[0]) => {
    const isInCart = cartItems.some((item) => item.id === design.id);

    if (isInCart) {
      removeFromCart(design.id);
      toast({
        title: "Removed from cart",
        description: `${design.title} has been removed from your cart`,
        variant: "destructive",
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

  const handleBuyNow = (designId: number) => {
    router.push(`/checkout?design=${designId}`);
  };

  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Designs</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Explore popular creations from our community
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-brown-light text-brown-dark hover:bg-brown-light/10"
          >
            <Link href="/marketplace">View All Designs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design) => (
            <Card
              key={design.id}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/4] relative overflow-hidden group">
                <Link href={`/design/${design.id}`}>
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => toggleLike(design.id)}
                  className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full py-1 px-2 z-10"
                  aria-label={
                    likedItems.includes(design.id)
                      ? "Unlike design"
                      : "Like design"
                  }
                >
                  <Heart
                    className={`h-4 w-4 ${
                      likedItems.includes(design.id)
                        ? "fill-rose-500 text-rose-500"
                        : "text-rose-500"
                    }`}
                  />
                  <span className="text-xs font-medium">
                    {design.likes + (likedItems.includes(design.id) ? 1 : 0)}
                  </span>
                </button>
              </div>
              <CardContent className="p-4">
                <div className="mb-3">
                  <Link href={`/design/${design.id}`}>
                    <h3 className="font-semibold text-lg hover:text-brown-dark transition-colors">
                      {design.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    by @{design.creator}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">${design.price.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      or {design.tokens} tokens
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-brown-dark text-brown-dark hover:bg-brown-dark/10"
                      onClick={() => handleBuyNow(design.id)}
                    >
                      Buy Now
                    </Button>
                    <Button
                      size="sm"
                      className={`w-32 ${
                        isInCart(design.id)
                          ? "bg-brown-darker hover:bg-brown-darkest"
                          : "bg-brown-dark hover:bg-brown-darker"
                      } text-white transition-colors`}
                      onClick={() => handleCartToggle(design)}
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
      </div>
    </section>
  );
}
