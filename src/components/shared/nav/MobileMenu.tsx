import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { navLinks } from "./navLinks";

type MobileMenuProps = {
  user?: { name?: string; email?: string } | null;
  onLogout: () => void;
};

const MobileMenu = ({ user, onLogout }: MobileMenuProps) => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium hover:bg-accent",
                  isActive(link.href) && "bg-accent",
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <div className="my-2 border-t" />
          {user ? (
            <>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                >
                  Dashboard
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="destructive"
                  onClick={onLogout}
                  className="mt-2"
                >
                  Logout
                </Button>
              </SheetClose>
            </>
          ) : (
            <>
              <SheetFooter>
                <div className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Button variant="outline" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild>
                      <Link href="/register">Sign up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
