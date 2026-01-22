import Logo from "@/static/images/logo.png";
import Image from "next/image";
import { ForgetPasswordForm } from "./ForgetPasswordForm";
import { forgetPasswordStyles } from "./style";
import { ForgetPasswordVector } from "@/components/vectors/ForgetPasswordVector";
import { Typography } from "@/components/ui/Typography";

export default function ForgetPassword() {
  return (
    <div className={forgetPasswordStyles.container}>
      <div className={forgetPasswordStyles.content}>
        <div className={forgetPasswordStyles.forgetPasswordCoverContainer}>
          <div className={forgetPasswordStyles.coverImage}>
            <ForgetPasswordVector />
          </div>
        </div>
        <div className={forgetPasswordStyles.formWrapper}>
          <Image src={Logo} alt="logo" width={110} height={110} />
          <div className={forgetPasswordStyles.header}>
            <h2></h2>
            <Typography variant="h4" weight="medium">
              Forgot your password?
            </Typography>
          </div>
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
}

