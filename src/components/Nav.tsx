import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo-blue.png"
            alt="The Mark UChicago"
            width={153}
            height={45}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-full bg-mark-blue px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
