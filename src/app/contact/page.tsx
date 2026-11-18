import PageShell from "@/components/PageShell";
import { contacts } from "@/lib/portfolio";
export const metadata = { title: "Contact | Cesar Delgado" };
export default function Contact() { return <PageShell title="Let’s talk." intro="Find me online or send me an email." path="/contact"><ul className="contact-list">{contacts.map(contact => <li key={contact.label}><a href={contact.href} {...(contact.href.startsWith("https:") ? {target: "_blank", rel: "noopener noreferrer"} : {})}><span>{contact.label}</span><span aria-hidden="true">↗</span>{contact.href.startsWith("https:") && <span className="sr-only"> (opens in a new tab)</span>}</a></li>)}</ul></PageShell>; }
