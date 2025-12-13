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

interface PasswordResetProps {
  resetLink?: string;
}

const PasswordResetTemplate = ({
  resetLink = "https://example.com/reset",
}: PasswordResetProps) => {
  return (
    <Html>
      <Head />
      <Preview>Redefina sua senha</Preview>
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
                Redefinir Senha
              </Text>
              <Text className="mt-3 text-base text-gray-600 m-0">Olá,</Text>
              <Text className="mt-6 text-base text-gray-700 leading-relaxed m-0">
                Recebemos uma solicitação para redefinir sua senha.
              </Text>
            </Section>
            {/* Warning Section */}
            <Section className="mb-12 p-4 bg-gray-50 rounded-md border-l-4 border-brand">
              <Text className="m-0 text-sm text-gray-700 pl-2">
                <strong>Atenção:</strong> Se você não solicitou uma redefinição
                de senha, ignore este email e sua conta permanecerá segura.
              </Text>
            </Section>{" "}
            {/* Reset Button */}
            <Section className="mb-12 text-center">
              <Button
                href={resetLink}
                className="bg-brand text-white px-8 py-3 rounded-md font-semibold no-underline inline-block"
              >
                Redefinir Senha
              </Button>
            </Section>
            {/* Alternative Link */}
            <Section className="mb-12">
              <Text className="text-sm text-gray-600 m-0 mb-2">
                Ou copie e cole este link no seu navegador:
              </Text>
              <Link
                href={resetLink}
                className="text-black underline text-sm break-all"
              >
                {resetLink}
              </Link>
            </Section>
            {/* Security Note */}
            <Section className="mb-12">
              <Text className="text-xs text-gray-500 m-0 leading-relaxed">
                Por segurança, nunca compartilhe este link com ninguém. A Faunbi
                jamais pedirá sua senha por email.
              </Text>
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

export default PasswordResetTemplate;
