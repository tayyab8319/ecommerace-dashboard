import Logo from "@/static/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./RegisterForm";
import { registerStyles } from "./style";
import { RegisterVector } from "@/components/vectors/RegisterVector";
import { Typography } from "@/components/ui/Typography";

export default function Register() {
  return (
    <div className={registerStyles.container}>
      <div className={registerStyles.content}>
        <div className={registerStyles.registerCoverContainer}>
          <div className={registerStyles.coverImage}>
            <RegisterVector />
          </div>
        </div>
        <div className={registerStyles.formWrapper}>
          <Image src={Logo} alt="logo" width={110} height={110} />
          <div className={registerStyles.header}>
            <h2></h2>
            <Typography variant="h4" weight="medium">
              Create your account
            </Typography>
            <Typography variant="span" color="muted">
              Already have an account?{" "}
              <Link className={registerStyles.signInLink} href="/auth/login">
                <Typography variant="span" weight="medium" color="primary">
                  Sign in
                </Typography>
              </Link>{" "}
            </Typography>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

