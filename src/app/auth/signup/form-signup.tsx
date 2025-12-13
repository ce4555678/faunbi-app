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
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Activity, memo, useRef, useState } from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { BASE_ERROR_CODES } from "@/utils/error_codes_auth";
import { Spinner } from "@/components/ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { Link } from "next-view-transitions";

const formSchema = z
  .object({
    name: z
      .string("O nome é necessário")
      .min(3, "O nome deve ter pelo menos 3 caracteres.")
      .max(50, "O nome é muito grande"),
    email: z.email("Email inválido").max(100, "Email muito grande"),
    password: z
      .string("A senha é necessária")
      .min(8, "A senha deve ter pelo menos 8 caracteres."),
    confirmPassword: z
      .string("Confirmação de senha é necessária")
      .min(8, "A senha deve ter pelo menos 8 caracteres."),
    terms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos de uso e política de privacidade",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
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

    const { error, data: response } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
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
      form.reset();
    }

    if (response?.user) {
      toast.success("E-mail enviado!", {
        description: "Verifique sua caixa de email",
      });

      turnstileRef.current?.reset();
      form.reset();
      setIsSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <>
      <Activity mode={isSubmitted ? "visible" : "hidden"}>
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
                Email de verificação enviado!
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Verifique sua caixa de entrada para confirmar seu cadastro e
                ativar sua conta.
              </p>

              <Link href="/" className="mt-6 w-full">
                <Button>Voltar ao início</Button>
              </Link>
            </div>
          </div>
        </div>
      </Activity>

      <Activity mode={isSubmitted == false ? "visible" : "hidden"}>
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
                Criar uma nova conta
              </p>

              {isSubmitted && (
                <Alert variant={"default"} className="my-4 text-green-700">
                  <CheckCircle2Icon />
                  <AlertTitle>E-mail enviado!</AlertTitle>
                  <AlertDescription className="text-green-800">
                    Verifique sua caixa de email
                  </AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form
                  className="w-full space-y-6 mt-6"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Seu nome"
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
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Senha"
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
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar Senha</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Confirme sua senha"
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
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start gap-3 space-y-0">
                        <FormControl className="mt-1">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-label="Aceitar termos e política de privacidade"
                          />
                        </FormControl>
                        <div className="flex-1 space-y-2">
                          <FormLabel className="text-xs sm:text-sm font-normal leading-relaxed cursor-pointer">
                            Aceito os{" "}
                            <Link
                              href="/termos"
                              className="underline text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                              passHref
                              target="_blank"
                            >
                              termos
                            </Link>{" "}
                            e{" "}
                            <Link
                              href="/privacidade"
                              className="underline text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                              passHref
                              target="_blank"
                            >
                              privacidade
                            </Link>
                          </FormLabel>
                          <FormMessage className="text-xs" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Turnstile
                    className="w-full"
                    ref={turnstileRef}
                    siteKey={
                      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string
                    }
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
                        <Spinner className="size-4" /> Cadastrar
                      </>
                    ) : (
                      "Cadastrar"
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-5">
                <p className="text-sm text-center">
                  Já tem uma conta?
                  <Link
                    href="/auth/login"
                    className="ml-1 underline text-muted-foreground"
                  >
                    Fazer login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Activity>
    </>
  );
};

export default memo(SignupForm);
