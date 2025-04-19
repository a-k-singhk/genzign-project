"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Create", href: "/create" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brown-dark">GenZign</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-brown-dark transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Cart Button - Fixed nested link issue */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex relative text-muted-foreground hover:text-brown-dark"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brown-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </Button>

          <div className="hidden sm:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-brown-dark text-brown-dark hover:bg-brown-dark/10"
            >
              <Link href="/signin">Log In</Link>
            </Button>
            <Button
              asChild
              className="bg-brown-dark hover:bg-brown-darker text-white"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-brown-dark transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-brown-dark text-brown-dark hover:bg-brown-dark/10"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Log In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-brown-dark hover:bg-brown-darker text-white"
                  >
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-brown-dark mt-4"
                  asChild
                >
                  <Link href="/cart" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Cart</span>
                      {cartItemCount > 0 && (
                        <span className="ml-auto bg-brown-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {cartItemCount}
                        </span>
                      )}
                    </div>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
