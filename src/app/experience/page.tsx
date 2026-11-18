import PageShell from "@/components/PageShell";
import { workExperience, educationExperience } from "@/lib/portfolio";
export const metadata = { title: "Experience | Cesar Delgado" };
export default function Experience() { return <PageShell title="Experience" path="/experience">{[["Work", workExperience], ["Education", educationExperience]].map(([label, entries]) => <section className="experience-section" key={label as string}><h2>{label as string}</h2><ul className="experience-list">{(entries as typeof workExperience).map(item => <li key={item.title}><div className="entry-heading"><h3>{item.title}</h3><span>{item.period}</span></div><p className="position">{item.position}</p><p>{item.summary}</p></li>)}</ul></section>)}</PageShell>; }
