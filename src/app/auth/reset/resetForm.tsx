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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { authClient } from "@/lib/auth-client";
import { BASE_ERROR_CODES } from "@/utils/error_codes_auth";
import { Spinner } from "@/components/ui/spinner";
import { Link } from "next-view-transitions";

const formSchema = z.object({
  email: z.email("Email inválido").max(100, "Email muito grande"),
});

const ResetPasswordForm = () => {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const token = turnstileRef.current?.getResponse();

    if (!token) {
      toast.error("Por favor, complete a verificação do Turnstile.");
      setLoading(false);

      return;
    }

    const { data: response, error } = await authClient.requestPasswordReset({
      email: data.email, // required
      redirectTo: "http://localhost:3000/auth/redefine_password",
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

    setIsSubmitted(true);
  };

  if (isSubmitted) {
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

          <div className="relative isolate flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold tracking-tight">
              Email enviado!
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Verifique sua caixa de entrada para obter instruções de
              redefinição de senha.
            </p>

            <Link href="/auth/login" className="mt-6 w-full">
              <Button className="w-full">Voltar para Login</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            Redefinir senha
          </p>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Digite seu email e enviaremos instruções para redefinir sua senha.
          </p>

          <Form {...form}>
            <div
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
                        placeholder="seu.email@exemplo.com"
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
              <Button type="submit" className="w-full">
                {loading ? (
                  <>
                    <Spinner /> Enviar
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
            </div>
          </Form>

          <div className="mt-5 space-y-3">
            <Link
              href="/auth/login"
              className="text-sm block underline text-muted-foreground text-center"
            >
              Voltar para login
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

export default ResetPasswordForm;
