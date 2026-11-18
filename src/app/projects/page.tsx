import Image from "next/image";
import PageShell from "@/components/PageShell";
import { projects } from "@/lib/portfolio";

export const metadata = { title: "Work | Cesar Delgado" };

export default function Projects() {
  return (
    <PageShell title="Selected work" intro="Web apps, tools, and experiments." path="/projects">
      <ul className="project-list">
        {projects.map((project) => {
          const crop = project.thumbnailCrop;
          return (
            <li key={project.title}>
              <article className="project-row">
                {/* Decorative identification: the adjacent heading names the project. */}
                <div className={`project-thumbnail${crop ? "" : " project-thumbnail-logo"}`} aria-hidden="true">
                  {crop ? <Image
                    src={project.thumbnail}
                    alt=""
                    width={750}
                    height={1334}
                    sizes={`(max-width: 600px) ${Math.ceil(56 * 750 / crop.size)}px, ${Math.ceil(76 * 750 / crop.size)}px`}
                    style={{
                      width: `${750 / crop.size * 100}%`,
                      left: `${-crop.x / crop.size * 100}%`,
                      top: `${-crop.y / crop.size * 100}%`,
                    }}
                  /> : <Image
                    src={project.thumbnail}
                    alt=""
                    width={609}
                    height={262}
                    sizes="(max-width: 600px) 56px, 76px"
                  />}
                </div>
                <div>
                  <h2>
                    {project.demoHref && !project.demoLabel ? <a href={project.demoHref} target="_blank" rel="noopener noreferrer">
                      {project.title} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a> : project.title}
                  </h2>
                  <p>{project.description}</p>
                  {project.demoLabel && project.demoHref && (
                    <p>
                      <a className="underline underline-offset-4" href={project.demoHref} target="_blank" rel="noopener noreferrer">
                        {project.demoLabel} <span aria-hidden="true">↗</span>
                        <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                      </a>
                    </p>
                  )}
                  <ul className="tags" aria-label="Technologies">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
