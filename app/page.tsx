import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturedDesigns } from "@/components/featured-designs";
import { Testimonials } from "@/components/testimonials";
import { Sparkles, Shirt, Coins, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Design Your Dream Products with{" "}
                  <span className="text-brown-dark">AI</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Turn your creative ideas into custom T-Shirts, Hoodies and
                  Sneakers with just a text prompt. Earn tokens, build your
                  collection, join the community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brown-dark hover:bg-brown-darker text-white button-hover"
                >
                  <Link href="/create">Start Designing</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-brown-dark text-brown-dark hover:bg-brown-dark/10 button-hover"
                >
                  <Link href="/marketplace">Explore Designs</Link>
                </Button>
              </div>

              <div className="relative w-full max-w-4xl mt-8">
                <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/banner.png?height=720&width=1280"
                    alt="AI-generated shirt designs showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float hidden md:block">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brown-light" />
                    <p className="text-sm font-medium">Generated in seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose GenZign
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Sparkles className="h-10 w-10 text-brown-light" />}
                title="AI-Powered Design"
                description="Transform your ideas into unique shirt designs with our advanced AI technology."
              />
              <FeatureCard
                icon={<Shirt className="h-10 w-10 text-brown-light" />}
                title="Quality Products"
                description="Premium shirts printed with your custom designs, delivered right to your door."
              />
              <FeatureCard
                icon={<Coins className="h-10 w-10 text-brown-light" />}
                title="Earn Tokens"
                description="Get rewarded with tokens for your creativity that you can use to purchase other designs."
              />
              <FeatureCard
                icon={<ShoppingBag className="h-10 w-10 text-brown-light" />}
                title="Community Marketplace"
                description="Browse, buy, and sell designs in our vibrant community marketplace."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Featured Designs */}
        <FeaturedDesigns />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-brown-light/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Create Your Own Design?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of Gen Z creators who are designing and sharing
                their unique shirt styles.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brown-darker hover:bg-brown-dark text-white button-hover"
              >
                <Link href="/signup">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-none shadow-md card-hover">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-brown-light/10">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
