import {
  Tailwind,
  pixelBasedPreset,
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailVerificationProps {
  userName?: string;
  verificationLink?: string;
}

const VerifyEmailTemplate = ({
  userName = "User",
  verificationLink = "https://example.com/verify",
}: EmailVerificationProps) => {
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
              },
            },
          },
        }}
      >
        <Body className="font-sans m-0 p-0">
          <Container className="mx-auto w-full max-w-xl py-12 px-4">
            {/* Logo Section */}
            <Section className="mb-12">
              <Img
                src="https://www.faunbi.com/icon512_maskable.png"
                width="64"
                height="64"
                alt="Faunbi Logo"
                className="block rounded-md"
              />
            </Section>

            {/* Main Content */}
            <Section className="mb-12">
              <Text className="m-0 text-3xl font-bold text-black leading-tight">
                Verifique seu Email
              </Text>
              <Text className="mt-3 text-base text-gray-600 m-0 capitalize">
                Olá {userName},
              </Text>
              <Text className="mt-6 text-base text-gray-700 leading-relaxed m-0">
                Complete a verificação de sua conta usando o código abaixo.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="mb-12 text-center">
              <Button
                href={verificationLink}
                className="bg-brand text-white px-8 py-3 rounded-md font-semibold no-underline inline-block"
              >
                Verificar Email
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-12">
              <Text className="text-sm text-gray-600 m-0 mb-2">
                Ou copie e cole este link no seu navegador:
              </Text>
              <Link
                href={verificationLink}
                className="text-black underline text-sm break-all"
              >
                {verificationLink}
              </Link>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-8 text-center">
              <Text className="text-xs text-gray-500 m-0">
                © {new Date().getFullYear()} Faunbi. Todos os direitos
                reservados.
              </Text>
              <Text className="text-xs text-gray-500 mt-2 m-0">
                Itapeva, SP
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyEmailTemplate;
