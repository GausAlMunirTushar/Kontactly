import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to dashboard for authenticated users
  // In a real app, you'd check auth status here
  redirect("/dashboard")
}
