import Logo from "@/static/images/logo.png";
import Image from "next/image";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { resetPasswordStyles } from "./style";
import { ResetPasswordVector } from "@/components/vectors/ResetPasswordVector";
import { Typography } from "@/components/ui/Typography";

export default function ResetPassword() {
  return (
    <div className={resetPasswordStyles.container}>
      <div className={resetPasswordStyles.content}>
        <div className={resetPasswordStyles.resetPasswordCoverContainer}>
          <div className={resetPasswordStyles.coverImage}>
            <ResetPasswordVector />
          </div>
        </div>
        <div className={resetPasswordStyles.formWrapper}>
          <Image src={Logo} alt="logo" width={110} height={110} />
          <div className={resetPasswordStyles.header}>
            <h2></h2>
            <Typography variant="h4" weight="medium">
              Reset your password
            </Typography>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}

