import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { registerStyles } from "./style";
import { Button } from "@/components/ui/Button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export function RegisterForm() {
  return (
    <div className={registerStyles.registerFormContainer}>
      <div className="relative">
        <Input
          placeholder="John Doe"
          label="Full Name"
          type="text"
        />
        <UserIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative">
        <Input
          placeholder="name@test.com"
          label="Email"
          type="email"
        />
        <EnvelopeIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative">
        <Input
          placeholder="6+ characters"
          label="Password"
          type="password"
        />
        <LockClosedIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div className="relative">
        <Input
          placeholder="6+ characters"
          label="Confirm Password"
          type="password"
        />
        <LockClosedIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      <Button variant="dark">Create Account</Button>

      <div className={registerStyles.divider}>
        <div className={registerStyles.dividerLine}></div>
        <span className={registerStyles.dividerText}>Or continue with</span>
        <div className={registerStyles.dividerLine}></div>
      </div>

      <Button
        variant="outline"
        className="w-full justify-center"
        icon={<GoogleIcon />}
      >
        Sign up with Google
      </Button>
    </div>
  );
}

