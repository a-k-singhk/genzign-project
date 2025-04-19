import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Fashion Design Student",
      content:
        "GenZign has completely changed how I express myself through fashion. The AI understands my aesthetic perfectly!",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Jamie Rivera",
      role: "Content Creator",
      content:
        "I've earned enough tokens from my designs to get 3 free shirts. The community loves my style and I love theirs!",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "Digital Artist",
      content:
        "The quality of both the AI generation and the printed shirts is outstanding. My designs look exactly as I imagined.",
      rating: 4,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 bg-brown-light/10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators who are designing and sharing their unique styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
