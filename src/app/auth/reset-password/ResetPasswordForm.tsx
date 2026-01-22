import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { resetPasswordStyles } from "./style";
import { Button } from "@/components/ui/Button";
import {
  LockClosedIcon,
  KeyIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export function ResetPasswordForm() {
  return (
    <div className={resetPasswordStyles.resetPasswordFormContainer}>
      <Typography variant="p" color="muted">
        Enter your new password below. Make sure it&apos;s at least 6 characters
        long.
      </Typography>
      <div className="relative">
        <Input
          placeholder="6+ characters"
          label="New Password"
          type="password"
        />
        <KeyIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative">
        <Input
          placeholder="6+ characters"
          label="Confirm New Password"
          type="password"
        />
        <LockClosedIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      <Button variant="dark">Reset Password</Button>

      <Link
        className="flex items-center justify-center hover:underline pt-2"
        href="/auth/login"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        <Typography weight="medium" variant="span" color="primary">
          Back to Sign in
        </Typography>
      </Link>
    </div>
  );
}

