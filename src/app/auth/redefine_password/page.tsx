import NewPasswordForm from "./redefine-password-form";
import { Suspense } from "react";

export const metadata = {
  title: "Nova senha",
};

export default async function NewPasswordPage() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
}
