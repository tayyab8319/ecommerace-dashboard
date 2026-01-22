import Logo from "@/static/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { loginStyles } from "./style";
import { LoginVector } from "@/components/vectors/LoginVector";
import { Typography } from "@/components/ui/Typography";

export default function Login() {
  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.content}>
        <div className={loginStyles.loginCoverContainer}>
          <div className={loginStyles.coverImage}>
            <LoginVector />
          </div>
        </div>
        <div className={loginStyles.formWrapper}>
          <Image src={Logo} alt="logo" width={110} height={110} />
          <div className={loginStyles.header}>
            <h2></h2>
            <Typography variant="h4" weight="medium">
              Sign in to your account
            </Typography>
            <Typography variant="span" color="muted">
              Don&apos;t have an account?{" "}
              <Link className={loginStyles.signUpLink} href="/auth/register">
                <Typography variant="span" weight="medium" color="primary">
                  Get Started
                </Typography>
              </Link>{" "}
            </Typography>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
