import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function ResetPasswordPage() {
  return (
    <AuthLayout title="Reset your password" subtitle="Enter your new password below">
      <ResetPasswordForm />
    </AuthLayout>
  )
}
