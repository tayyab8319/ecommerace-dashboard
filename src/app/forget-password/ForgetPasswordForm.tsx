import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { forgetPasswordStyles } from "./style";
import { Button } from "@/components/ui/Button";
import { EnvelopeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function ForgetPasswordForm() {
  return (
    <div className={forgetPasswordStyles.forgetPasswordFormContainer}>
      <Typography variant="p" color="muted">
        Enter your email address and we&apos;ll send you a link to reset your
        password.
      </Typography>
      <div className="relative">
        <Input
          placeholder="name@test.com"
          label="Email"
          type="email"
        />
        <EnvelopeIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      <Button variant="dark">Send Reset Link</Button>

      <Link
        className={forgetPasswordStyles.backToLoginLink}
        href="/auth/login"
      >
        <ArrowLeftIcon className="inline w-4 h-4 mr-1" />
        <Typography weight="medium" variant="span" color="primary">
          Back to Sign in
        </Typography>
      </Link>
    </div>
  );
}

