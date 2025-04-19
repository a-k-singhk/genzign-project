import { ArrowRight, Sparkles, Shirt, ShoppingBag, Coins } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Sparkles className="h-8 w-8 text-brown-light" />,
      title: "Describe Your Design",
      description: "Enter a text prompt describing your dream shirt design and let our AI bring it to life.",
    },
    {
      icon: <Shirt className="h-8 w-8 text-brown-light" />,
      title: "Customize Your Shirt",
      description: "Choose your shirt style, adjust colors, and fine-tune the design to match your vision.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-brown-light" />,
      title: "Order Your Creation",
      description: "Purchase your custom shirt and we'll handle the printing and delivery to your doorstep.",
    },
    {
      icon: <Coins className="h-8 w-8 text-brown-light" />,
      title: "Earn & Spend Tokens",
      description: "Earn tokens for your designs and use them to buy shirts created by other community members.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-off-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating your custom shirt is simple, fun, and rewarding with our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brown-light/20 mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brown-light/30 -translate-y-1/2">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-brown-light" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
