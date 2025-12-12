import {
  Tailwind,
  pixelBasedPreset,
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailVerificationProps {
  verificationCode: string;
  userName?: string;
  verificationLink?: string;
}

const VerifyEmailTemplate = ({
  verificationCode = "123456",
  userName = "User",
  verificationLink = "https://example.com/verify",
}: EmailVerificationProps) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

  return (
    <Html>
      <Head />
      <Preview>Verifique seu email para ativar sua conta</Preview>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#7c3aed",
                success: "#059669",
              },
            },
          },
        }}
      >
        <Body className="bg-violet-50 font-sans">
          <Container className="mx-auto my-10 w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            {/* Logo */}
            <Section className="mb-8 text-center">
              <Img
                src={`data:image/png;base64,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`}
                width="120"
                height="120"
                alt="Faunbi Logo"
                className="mx-auto"
              />
            </Section>

            {/* Header */}
            <Section className="mb-8 text-center">
              <Text className="text-2xl font-bold text-brand">
                Verifique seu Email
              </Text>
              <Text className="mt-2 text-base text-gray-600">
                Bem-vindo(a), <Text className="capitalize">{userName}</Text>!
              </Text>
            </Section>

            <Hr className="my-6 border-gray-200" />

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="mb-4 text-base text-gray-700">
                Obrigado por se registrar em nossa plataforma. Para completar
                sua conta, você precisa verificar seu endereço de email.
              </Text>

              <Text className="mb-6 text-base text-gray-700">
                Use o código abaixo para verificar sua conta:
              </Text>

              {/* Code Box */}
              <Section className="mb-8 rounded-lg bg-violet-100 p-6 text-center">
                <Text className="m-0 text-4xl font-bold tracking-widest text-brand">
                  {verificationCode}
                </Text>
                <Text className="mt-2 text-sm text-gray-600">
                  Este código expira em 24 horas
                </Text>
              </Section>

              {/* Verification Button */}
              <Section className="mb-8 text-center">
                <Button
                  href={verificationLink}
                  className="rounded-lg bg-brand px-6 py-3 font-semibold text-white no-underline hover:bg-opacity-90"
                >
                  Verificar Email
                </Button>
              </Section>

              <Text className="text-base text-gray-700">
                Ou acesse este link:
              </Text>
              <Link
                href={verificationLink}
                className="text-sm text-brand underline"
              >
                {verificationLink}
              </Link>
            </Section>

            <Hr className="my-6 border-gray-200" />

            {/* Security Notice */}
            <Section className="mb-6 rounded-lg bg-violet-50 p-4">
              <Text className="m-0 text-sm font-semibold text-violet-900">
                🔒 Aviso de Segurança
              </Text>
              <Text className="mt-2 text-sm text-blue-800">
                Se você não se registrou em nossa plataforma, ignore este email.
                Nunca compartilhe seu código de verificação com ninguém.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-xs text-gray-500">
                © 2025 Faunbi. Todos os direitos reservados.
              </Text>
              <Text className="text-xs text-gray-500">Itapeva SP</Text>
              <Section className="mt-4 flex justify-center gap-4">
                <Link href="https://twitter.com" className="text-xs text-brand">
                  Twitter
                </Link>
                <Text className="text-xs text-gray-400">•</Text>
                <Link
                  href="https://facebook.com"
                  className="text-xs text-brand"
                >
                  Facebook
                </Link>
                <Text className="text-xs text-gray-400">•</Text>
                <Link
                  href="https://instagram.com"
                  className="text-xs text-brand"
                >
                  Instagram
                </Link>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyEmailTemplate;
