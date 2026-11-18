import PageShell from "@/components/PageShell";
import { skills } from "@/lib/portfolio";
export const metadata = { title: "Skills | Cesar Delgado" };
export default function Skills() { return <PageShell title="Skills" intro="The languages and tools I work with." path="/skills"><ul className="skills-list">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></PageShell>; }
