export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  summary: string;
  role: string;
  stack: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
  sections: Array<{
    title: string;
    body: string;
  }>;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "i4-ops-infrastructure-security",
    title: "i4 Ops Infrastructure Security",
    subtitle: "Public-safe founding-engineer work on zero-exfiltration infrastructure security.",
    category: "Cybersecurity Infrastructure",
    image: "/projects/i4-zero-exfiltration.svg",
    summary:
      "Founding-engineer work at the intersection of infrastructure security, cloud systems, and AI-era data risk. This case study intentionally stays at the product and engineering-principles level.",
    role:
      "Founding engineer contributing across product shaping, backend systems, cloud infrastructure, automation, and security-oriented engineering discipline.",
    stack: ["Go", "Python", "AWS", "Kubernetes", "Terraform", "Observability"],
    links: [
      {
        label: "Company site",
        href: "https://www.i4ops.com/"
      }
    ],
    sections: [
      {
        title: "Problem Space",
        body:
          "AI workflows increase pressure on teams to use sensitive operational data without letting that data leak into uncontrolled tools, logs, or downstream systems. The product work is focused on helping teams reason about data movement and protection boundaries."
      },
      {
        title: "What I Can Share",
        body:
          "My public-safe role spans secure systems design, cloud infrastructure, automation, telemetry, and product engineering. The work requires turning ambiguous security requirements into reliable workflows that engineering teams can operate."
      },
      {
        title: "What Stays Private",
        body:
          "This portfolio does not disclose company architecture, customer context, deployment details, hostnames, internal repositories, operational metrics, or implementation internals."
      }
    ]
  },
  {
    slug: "opentelemetry-go-sdk",
    title: "OpenTelemetry Go SDK",
    subtitle: "Public CNCF contribution work in Go-based observability infrastructure.",
    category: "Open Source",
    image: "/projects/opentelemetry-go.svg",
    summary:
      "OpenTelemetry Go work focused on telemetry behavior, distributed tracing, and production observability patterns in public infrastructure code.",
    role:
      "Contributor reviewing and improving behavior in a mature, widely used open-source telemetry ecosystem.",
    stack: ["Go", "OpenTelemetry", "Distributed Tracing", "CNCF", "Observability"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/open-telemetry/opentelemetry-go"
      }
    ],
    sections: [
      {
        title: "Context",
        body:
          "OpenTelemetry is foundational observability infrastructure. Contributions require careful attention to API behavior, compatibility, test coverage, and maintainability because changes affect many downstream systems."
      },
      {
        title: "Engineering Focus",
        body:
          "The work aligns with production-grade telemetry concerns: traces, spans, propagation behavior, and clear interfaces that application teams can depend on."
      },
      {
        title: "Why It Matters",
        body:
          "Strong observability primitives reduce debugging time and make distributed systems easier to operate, especially when services, queues, workers, and cloud components interact."
      }
    ]
  },
  {
    slug: "dynamic-queue-adaptation",
    title: "Dynamic Queue Adaptation",
    subtitle: "A deterministic offline prototype for intent-aware music recommendation.",
    category: "Recommender Systems",
    image: "/projects/dynamic-queue-adaptation.svg",
    summary:
      "A Python project testing whether manual queue insertions can improve short-term recommendation intent alignment compared with a static seed-only baseline.",
    role:
      "Designed the evaluation flow, implemented the reranking logic, and committed deterministic artifacts for reproducibility.",
    stack: ["Python", "Ranking", "Evaluation", "Recommender Systems"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/VatsalGoel3/dynamic-queue-adaptation"
      }
    ],
    sections: [
      {
        title: "Question",
        body:
          "Can a recommender adapt to a listener's short-term intent when the listener manually inserts tracks into a queue, instead of relying only on the original seed context?"
      },
      {
        title: "Approach",
        body:
          "The project compares a static baseline against an adaptive reranker using offline evaluation scenarios. It avoids external keys and stores outputs so results can be inspected and reproduced."
      },
      {
        title: "Result",
        body:
          "The adaptive reranker improved intent alignment in 3 of 4 tested scenarios, making it a useful prototype for exploring queue-aware recommendation behavior."
      }
    ]
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
