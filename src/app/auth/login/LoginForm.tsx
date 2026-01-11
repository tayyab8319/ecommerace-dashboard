import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { loginStyles } from "./style";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  return (
    <div className={loginStyles.loginFormContainer}>
      <Input
        placeholder="name@test.com"
        className=" cover"
        label="Email"
        type="email"
      />
      <div>
        <Input placeholder="6+ characters" label="Password" type="password" />
        <Link className={loginStyles.forgetPassword} href="/forget-password">
          <Typography weight="medium" variant="span">
            Forget Password?
          </Typography>
        </Link>
      </div>

      <Button variant="dark">Sign in</Button>
    </div>
  );
}
