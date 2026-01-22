import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { loginStyles } from "./style";
import { Button } from "@/components/ui/Button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export function LoginForm() {
  return (
    <div className={loginStyles.loginFormContainer}>
      <div className="relative">
        <Input
          placeholder="name@test.com"
          className=" cover"
          label="Email"
          type="email"
        />
        <EnvelopeIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <div>
        <div className="relative">
          <Input placeholder="6+ characters" label="Password" type="password" />
          <LockClosedIcon className="absolute right-3 top-[38px] w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
        <Link className={loginStyles.forgetPassword} href="/forget-password">
          <Typography weight="medium" variant="span">
            Forget Password?
          </Typography>
        </Link>
      </div>

      <Button variant="dark">Sign in</Button>

      <div className={loginStyles.divider}>
        <div className={loginStyles.dividerLine}></div>
        <span className={loginStyles.dividerText}>Or continue with</span>
        <div className={loginStyles.dividerLine}></div>
      </div>

      <Button
        variant="outline"
        className="w-full justify-center"
        icon={<GoogleIcon />}
      >
        Sign in with Google
      </Button>
    </div>
  );
}
