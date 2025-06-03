import React from "react";

const experiences = [
  {
    title: "Stagiaire en cybersécurité",
    company: "CS Group / Sopra Steria",
    duration: "6 mois - 2025",
    description: [
      "Veille en cybersécurité (Cyberwatch)",
      "Recommandations sécurité",
      "Mesures de hardening",
      "Audits automatisés",
      "Rapports et gestion d’incidents",
      "Sensibilisation des équipes",
    ],
  },
  {
    title: "Responsable de la supervision",
    company: "Thales SIX GTS",
    duration: "5 mois - 2024",
    description: [
      "Supervision avec Hawk/Grafana",
      "Équipe de 20 personnes",
      "Gestion des infrastructures réseau",
      "Organisation et management",
    ],
  },
];

const ExperienceAndContact = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-white">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Expériences professionnelles</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-cyan-400">
                {exp.company} – {exp.duration}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 list-disc list-inside text-sm">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact & CV</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
  href="/portfolio/CV_Leo_Chouarbi.pdf"
  download="CV_Leo_Chouarbi.pdf"
  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full shadow-md"
>
  Télécharger mon CV
</a>

          <a
            href="https://www.linkedin.com/in/leo-chouarbi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md"
          >
            LinkedIn
          </a>
          <a
            href="mailto:chouarbi@et.esiea.fr"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full shadow-md"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExperienceAndContact;
