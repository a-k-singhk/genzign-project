"use client";

import { Suspense } from "react";
import { CheckoutContent } from "./checkout-content";
import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutPage() {
  return (
    <div className="container py-10">
      <Suspense
        fallback={
          <div className="space-y-8">
            <Skeleton className="h-8 w-1/3" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <Skeleton className="h-64 w-full" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
