import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/brand/mark-icon-white.png" alt="The Mark UChicago" width={28} height={34} />
          <span className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} The Mark UChicago
          </span>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          <li><Link href="/about" className="hover:text-white">About</Link></li>
          <li><Link href="/services" className="hover:text-white">Services</Link></li>
          <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
          <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
