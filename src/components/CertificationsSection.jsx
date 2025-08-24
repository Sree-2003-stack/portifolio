import React from "react";

const certifications = [
  {
    name: "Python Complete Course for Beginners",
    link: "https://www.udemy.com/certificate/UC-550d16b0-de8c-42ef-9d10-e9c233f74a9a/",
    image: "https://img.icons8.com/color/96/python.png", // Python logo
  },
  {
    name: "Agile Scrum Master (SkillUp)",
    link: "https://simpli-web.app.link/e/vJtC0rfc1Vb",
     // Scrum logo
  },
  {
    name: "Microsoft Azure Fundamentals",
    link: "https://simpli-web.app.link/e/JmfUtVNb1Vb",
    image: "https://img.icons8.com/fluency/96/azure-1.png", // Azure logo
  },
];

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border bg-card p-6 shadow hover:shadow-lg transition text-center"
            >
              {/* Logo */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="mx-auto mb-4 h-16 w-16 object-contain"
                />
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold group-hover:text-primary">
                {cert.name}
              </h3>

              {/* Subtitle */}
              <p className="mt-2 text-sm text-muted-foreground">
                View Certificate →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
