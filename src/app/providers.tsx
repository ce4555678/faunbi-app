"use client";
import { ReactNode, useEffect, useEffectEvent } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getSelectorsByUserAgent } from "react-device-detect";
import { $mobile } from "@/store/mobile.store";
import { authClient } from "@/lib/auth-client";
import { $session } from "@/store/session.store";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  const queryClient = new QueryClient();
  const getIsMobile = useEffectEvent(() => {
    const { isMobile }: { isMobile: boolean } = getSelectorsByUserAgent(
      navigator.userAgent
    );
    $mobile.set(isMobile);
  });

  const getSession = useEffectEvent(async () => {
    const { data: session } = await authClient.getSession();

    if (session?.user) {
      const user = session.user;
      $session.set({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatarUrl: user.image || "",
        },
        status: "authenticated",
      });
    } else {
      $session.set({
        user: null,
        status: "unauthenticated",
      });
    }
  });

  useEffect(() => {
    getSession();
    getIsMobile();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
