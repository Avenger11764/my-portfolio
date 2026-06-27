"use client";

import { DATA } from "@/data/resume";

export function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DATA.name,
    "url": DATA.url,
    "image": `${DATA.url}${DATA.avatarUrl}`,
    "jobTitle": "Full-Stack Developer",
    "description": "Computer Science student specializing in React, Node.js, Electron.js, and modern databases",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KCC Institute of Technology and Management (KCCITM)"
    },
    "knowsAbout": [
      "Full-Stack Development",
      "Electron.js",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Databases"
    ],
    "sameAs": [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${DATA.name} Portfolio`,
    "url": DATA.url,
    "author": {
      "@type": "Person",
      "name": DATA.name
    },
    "description": "Portfolio showcasing full-stack development, desktop utilities, and open source contributions"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}