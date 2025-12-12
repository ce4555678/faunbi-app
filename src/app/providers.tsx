import { ReactNode } from "react";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <>{children}</>;
}
