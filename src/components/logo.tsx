import Image from "next/image";

export const Logo = () => (
  <span
    className="flex items-center gap-2"
    aria-label="Ir para página inicial da Faunbi"
  >
    <Image
      className="size-6 rounded-md"
      height={36}
      width={36}
      alt="Logo Faunbi"
      src="/icon512_maskable.png"
      priority
    />
    <span className="text-xl font-bold text-gray-900">Faunbi</span>
  </span>
);
