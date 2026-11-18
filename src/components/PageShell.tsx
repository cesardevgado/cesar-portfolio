import Link from "next/link";
import type { ReactNode } from "react";
const links = [["/projects", "Work"], ["/skills", "Skills"], ["/experience", "Experience"], ["/contact", "Contact"]];
export default function PageShell({ title, intro, children, path }: {title: string; intro?: string; children: ReactNode; path: string}) {
  return <div className="page-shell"><header className="page-header"><Link className="home-link" href="/">← Cesar Delgado</Link><nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>)}</nav></header><main id="main-content"><h1>{title}</h1>{intro && <p className="page-intro">{intro}</p>}{children}</main><footer><Link href="/">← Back home</Link><a href="https://cesardelgado.art" target="_blank" rel="noopener noreferrer">Art <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></footer></div>;
}
