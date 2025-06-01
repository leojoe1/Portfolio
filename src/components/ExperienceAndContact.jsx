// src/components/ExperienceAndContact.jsx
import React from "react";

const experiences = [
  {
    title: "Stagiaire en cybersécurité",
    company: "CS Group / Sopra Steria",
    duration: "6 mois - 2025",
    description:
      "Au sein de l’équipe Sécurité des Systèmes d’Information (SSI), je participe activement à la protection et à l’amélioration du niveau de sécurité de l’organisation. Mes missions couvrent la veille de sécurité (cyberwatch) pour détecter les vulnérabilités et menaces émergentes, la formulation de recommandations adaptées pour renforcer la sécurité des systèmes, la mise en œuvre de mesures de hardening afin de réduire la surface d’attaque, ainsi que la réalisation d’audits automatisés pour identifier et corriger les failles potentielles. J’interviens également dans la rédaction de rapports, la gestion des incidents et la sensibilisation des équipes, contribuant ainsi à la résilience et à la conformité globale du système d’information.",
  },
  {
    title: "Responsable de la Supervision",
    company: "Thales SIX GTS",
    duration: "5 mois - 2024",
    description:
      "J'ai effectué un stage de fin d’études chez Thales SIX GTS, au sein d’un projet de grande envergure dans le domaine des télécommunications. Intégré à une équipe d'une vingtaine de personnes, ma mission était d'effectuer la supervision de l'ensemble des machines et équipements de la plateforme à travers Hawk dans un premier temps puis Grafana. Ce stage m’a offert une précieuse opportunité de travailler dans une équipe nombreuse et de comprendre les méthodes d’organisation et de management nécessaires pour des projets de cette envergure. J’ai également développé des compétences nouvelles en gestion des infrastructures réseau.",
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
              <p className="text-sm text-cyan-400">{exp.company} – {exp.duration}</p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact & CV</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/CV_Leo_Chouarbi.pdf"
            download
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
            href="mailto:leo.chouarbi@example.com"
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
