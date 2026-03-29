import React from "react";

interface SchemaMarkupProps {
  type: "SoftwareApplication" | "WebApplication";
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
}

export default function SchemaMarkup({
  type,
  name,
  description,
  applicationCategory,
  operatingSystem,
}: SchemaMarkupProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
