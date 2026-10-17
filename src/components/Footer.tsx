import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 px-6 py-8 text-xs text-secondary">
      <span>© {new Date().getFullYear()} NMG Systems LLC</span>
      <span aria-hidden>·</span>
      <Link href="/privacy" className="transition-colors hover:text-foreground">
        Privacy
      </Link>
      <span aria-hidden>·</span>
      <Link href="/terms" className="transition-colors hover:text-foreground">
        Terms
      </Link>
      <span aria-hidden>·</span>
      <a href="mailto:noah@nmgsystems.dev" className="transition-colors hover:text-foreground">
        Contact
      </a>
    </footer>
  );
}
