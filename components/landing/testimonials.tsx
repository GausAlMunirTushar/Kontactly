import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Sales Manager",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Kontactly has transformed how our sales team manages leads. The Google sync feature is a game-changer!",
      rating: 5,
    },
    {
      name: "Ahmed Rahman",
      role: "Entrepreneur",
      company: "StartupBD",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The team collaboration features are excellent. We can now share contacts seamlessly across our organization.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Marketing Director",
      company: "GrowthCo",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Smart reminders ensure we never miss follow-ups. Our conversion rate has increased by 40% since using Kontactly.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Real Estate Agent",
      company: "PropertyPro",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "The tagging system helps me categorize clients perfectly. I can find any contact in seconds!",
      rating: 5,
    },
    {
      name: "Fatima Al-Zahra",
      role: "Business Owner",
      company: "ConsultPro",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Import/export features saved us hours of manual work. The interface is intuitive and powerful.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      company: "DevStudio",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Security features give us peace of mind. Role-based access is exactly what we needed for our team.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by thousands of users</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers say about their experience with Kontactly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
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
