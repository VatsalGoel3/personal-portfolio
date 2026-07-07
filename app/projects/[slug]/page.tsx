import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import TerminalText from "@/components/TerminalText";
import TerminalWindow from "@/components/TerminalWindow";
import { caseStudies, getCaseStudy } from "@/utils/caseStudies";

const siteUrl = "https://vatsalgoel-portfolio.netlify.app";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

interface ProjectCaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectCaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  const path = `/projects/${study.slug}`;

  return {
    title: `${study.title} | Vatsal Goel`,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${study.title} | Vatsal Goel`,
      description: study.summary,
      url: path,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vatsal Goel portfolio preview"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Vatsal Goel`,
      description: study.summary,
      images: ["/og-image.png"]
    }
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    headline: study.title,
    description: study.summary,
    image: `${siteUrl}${study.image}`,
    url: `${siteUrl}/projects/${study.slug}`,
    author: {
      "@type": "Person",
      name: "Vatsal Goel",
      url: siteUrl
    },
    about: study.stack
  };

  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative min-h-screen bg-[#0a192f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_1px),linear-gradient(to_bottom,#ffffff05_2px,transparent_1px)] bg-[size:24px_24px] bg-fixed" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-emerald-400"
          >
            <FaArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <TerminalWindow title={`${study.slug}.md`} className="mb-8">
            <TerminalText text={`cat case_studies/${study.slug}.md`} className="mb-6 text-sm opacity-80" />
            <div className="grid gap-8 p-2 md:grid-cols-[1.1fr_0.9fr] md:p-4">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  {study.category}
                </p>
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
                  {study.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-gray-300">
                  {study.subtitle}
                </p>
                <p className="mt-5 text-base leading-7 text-gray-400">
                  {study.summary}
                </p>
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </TerminalWindow>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <TerminalWindow title="role.sh">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-3 text-xl font-bold text-emerald-400">Role</h2>
                  <p className="leading-7 text-gray-300">{study.role}</p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-bold text-emerald-400">Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {study.links.length > 0 && (
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-emerald-400">Links</h2>
                    <div className="space-y-3">
                      {study.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-emerald-400"
                        >
                          {link.label}
                          <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TerminalWindow>

            <TerminalWindow title="notes.md">
              <div className="space-y-8">
                {study.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>
                    <p className="leading-7 text-gray-400">{section.body}</p>
                  </section>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </section>
    </main>
  );
}
