import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return <main id="main-content" className="landing"><div className="landing-content"><Image className="portrait" src="/images/cesar-oc.png" alt="Illustration of Cesar Delgado holding a cup of coffee" width={300} height={300} preload /><h1>Cesar Delgado</h1><p className="tagline">I build web apps, tools, and games.</p><nav className="landing-nav" aria-label="Main navigation"><Link className="primary" href="/projects">Work</Link><Link href="/skills">Skills</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link></nav><a className="art-link" href="https://cesardelgado.art" target="_blank" rel="noopener noreferrer">Art <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></main>;
}
