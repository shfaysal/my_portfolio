import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="nav">
      <Link className="logo" href="/">
        SR
      </Link>
      <nav aria-label="Primary">
        <Link href="/#projects">Projects</Link>
        <Link href="/projects">All Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
