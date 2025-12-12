import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MenuHomeUi({
  links,
  menu,
}: {
  links: {
    title: string;
    href: string;
  }[];
  menu: {
    login: {
      title: string;
      href: string;
    };
    start: {
      title: string;
      href: string;
    };
  };
}) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="hover:bg-violet-50">
          <Menu size={24} className="text-gray-700" />
        </Button>
      </SheetTrigger>
      <SheetHeader className="sr-only">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <SheetContent side="right" className="w-72 p-0 flex flex-col">
        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <p className="text-sm text-gray-500 mt-1">Navegue por Faunbi</p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6 py-6 space-y-1">
          {links.map((item) => (
            <SheetClose asChild key={item.title}>
              <Link
                href={item.href}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition duration-200 font-medium"
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {/* Divider */}
        <div className="px-6">
          <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* CTA Buttons */}
        <div className="px-6 py-6 space-y-3">
          <Button
            variant="outline"
            className="w-full font-semibold text-gray-700 hover:bg-gray-50 border-gray-200"
          >
            {menu.login.title}
          </Button>
          <Button className="w-full bg-linear-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold shadow-md hover:shadow-lg transition">
            {menu.start.title}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
