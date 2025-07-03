import { RegisterForm } from "@/components/auth/register-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout title="Create your account" subtitle="Start managing your contacts smarter">
      <RegisterForm />
    </AuthLayout>
  )
}
