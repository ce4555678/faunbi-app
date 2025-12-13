"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { BASE_ERROR_CODES } from "@/utils/error_codes_auth";
import { Spinner } from "@/components/ui/spinner";
import { $session } from "@/store/session.store";
import { redirect } from "next/navigation";
import { useStore } from "@nanostores/react";

const formSchema = z.object({
  email: z.email("Email inválido").max(100, "Email muito grande"),
  password: z
    .string("A senha é necessária")
    .min(8, "A senha deve ter pelo menos 8 caracteres."),
});

const LoginForm = () => {
  const session = useStore($session);
  const isAuthenticated = useEffectEvent(() => {
    if (session.status == "authenticated") redirect("/dashboard");
  });

  useEffect(() => {
    isAuthenticated();
  }, [session]);

  const [loading, setLoading] = useState<boolean>(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    const token = turnstileRef.current?.getResponse();

    if (!token) {
      toast.error("Por favor, complete a verificação do Turnstile.");
      setLoading(false);

      return;
    }

    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/dashboard",
      fetchOptions: {
        headers: {
          "x-captcha-response": token,
        },
      },
    });

    if (error) {
      const msg = BASE_ERROR_CODES[error.code as keyof typeof BASE_ERROR_CODES];
      toast.error(msg);
      turnstileRef.current?.reset();
      setLoading(false);
      form.reset();
      return;
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative max-w-sm w-full border rounded-xl px-8 py-8 shadow-lg/5 dark:shadow-xl bg-linear-to-b from-muted/50 dark:from-transparent to-card overflow-hidden">
        <div
          className="absolute inset-0 z-0 -top-px -left-px"
          style={{
            backgroundImage: `
        linear-gradient(to right, color-mix(in srgb, var(--card-foreground) 8%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--card-foreground) 8%, transparent) 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        <div className="relative isolate flex flex-col items-center">
          <Logo />
          <p className="mt-4 text-xl font-semibold tracking-tight">
            Faça login na sua conta
          </p>

          <Form {...form}>
            <form
              className="w-full space-y-6 mt-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                options={{ theme: "light" }}
                onError={() => {
                  toast.error(
                    "A verificação de segurança falhou. Tente novamente."
                  );
                }}
                onExpire={() => {
                  toast.error(
                    "A verificação de segurança expirou. Tente novamente."
                  );
                  turnstileRef.current?.reset();
                }}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner className="size-4" /> Entrar
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-5 space-y-5">
            <Link
              href="/auth/reset"
              className="text-sm block underline text-muted-foreground text-center"
            >
              Esqueceu sua senha?
            </Link>
            <p className="text-sm text-center">
              Não tem uma conta?
              <Link
                href="/auth/signup"
                className="ml-1 underline text-muted-foreground"
              >
                Criar uma conta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
