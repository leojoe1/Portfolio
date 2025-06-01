import { useState } from "react";
import {
  FaPython, FaJsSquare, FaReact, FaGitAlt, FaNodeJs,
  FaDocker, FaTerminal, FaGithub, FaGitlab, FaBitbucket,
  FaAws
} from "react-icons/fa";
import {
  SiTailwindcss, SiPostgresql, SiMongodb, SiGrafana, SiAnsible,
  SiGooglecloud, SiWireshark
} from "react-icons/si";


const skillsData = [
  // Langages
  { name: "JavaScript", type: "Langage", icon: <FaJsSquare size={28} /> },
  { name: "Python", type: "Langage", icon: <FaPython size={28} /> },
  { name: "Bash", type: "Langage", icon: <FaTerminal size={28} /> },
  { name: "C", type: "Langage" },
  { name: "C++", type: "Langage" },

  // Frameworks
  { name: "React", type: "Framework", icon: <FaReact size={28} /> },
  { name: "Tailwind", type: "Framework", icon: <SiTailwindcss size={28} /> },
  { name: "Node.js", type: "Framework", icon: <FaNodeJs size={28} /> },

  // Outils
  { name: "Docker", type: "Outil", icon: <FaDocker size={28} /> },
  { name: "Docker Compose", type: "Outil" },
  { name: "Git", type: "Outil", icon: <FaGitAlt size={28} /> },
  { name: "Grafana", type: "Outil" },
  { name: "Prometheus", type: "Outil" },
  { name: "Ansible", type: "Outil" },

  // Bases de données
  { name: "PostgreSQL", type: "Base de données", icon: <SiPostgresql size={28} /> },
  { name: "MongoDB", type: "Base de données", icon: <SiMongodb size={28} /> },
  { name: "MySQL", type: "Base de données"},

  // Cybersécurité
  { name: "Burp Suite", type: "Cybersécurité" },
  { name: "Metasploit", type: "Cybersécurité" },
  { name: "SQLMap", type: "Cybersécurité" },
  { name: "XSSer", type: "Cybersécurité" },
  { name: "John the Ripper", type: "Cybersécurité" },
  { name: "Aircrack-ng", type: "Cybersécurité" },
  { name: "Hydra", type: "Cybersécurité" },
  { name: "Medusa", type: "Cybersécurité" },
  { name: "Wifite", type: "Cybersécurité" },
  { name: "RainbowCrack", type: "Cybersécurité" },
  { name: "CrackMapExec", type: "Cybersécurité" },
  { name: "Mimikatz", type: "Cybersécurité" },
  { name: "BloodHound", type: "Cybersécurité" },
  { name: "gtfobins", type: "Cybersécurité" },
  { name: "DefectDojo", type: "Cybersécurité" },
  { name: "Wazuh", type: "Cybersécurité" },
  { name: "ELK Stack", type: "Cybersécurité" },
  { name: "OSSEC", type: "Cybersécurité" },
  { name: "Zeek", type: "Cybersécurité" },
  { name: "Fail2ban", type: "Cybersécurité" },
  { name: "Auditd", type: "Cybersécurité" },
  { name: "ClamAV", type: "Cybersécurité" },
  { name: "SELinux", type: "Cybersécurité" },
  { name: "Snort", type: "Cybersécurité" },
  { name: "Reco ANSSI", type: "Cybersécurité" },
  { name: "CIS Benchmark", type: "Cybersécurité" },

  // Réseau / Firewall
  { name: "iptables", type: "Réseau" },
  { name: "ufw", type: "Réseau" },
  { name: "firewalld", type: "Réseau" },
  { name: "Stormshield", type: "Réseau" },
  { name: "OpenVPN", type: "Réseau" },
  { name: "fwbuilder", type: "Réseau" },

  // Cloud
  { name: "AWS Cloud", type: "Cloud" },
  { name: "Google Cloud", type: "Cloud" },

  // Reconnaissance / Scanning
  { name: "DNSRecon", type: "Reconnaissance" },
  { name: "Recon-ng", type: "Reconnaissance" },
  { name: "Nmap", type: "Reconnaissance" },
  { name: "Rustscan", type: "Reconnaissance" },
  { name: "Maltego", type: "Reconnaissance" },

  // Reverse Engineering / Forensic
  { name: "Volatility", type: "Forensic" },
  { name: "Ghidra", type: "Forensic" },
  { name: "Radare2", type: "Forensic" },
  { name: "IDA9 Pro", type: "Forensic" },

  // Web Vuln Scanner
  { name: "OWASP ZAP", type: "Web" },
  { name: "Nikto", type: "Web" },
  { name: "Dirbuster", type: "Web" },
  { name: "Dirb", type: "Web" },
  { name: "GoBuster", type: "Web" },

  // Exploit
  { name: "Exploit Pack", type: "Cybersécurité" }
];

const filters = [
  "Tous",
  "Langage",
  "Framework",
  "Outil",
  "Base de données",
  "Cybersécurité",
  "Réseau",
  "Cloud",
  "Reconnaissance",
  "Forensic",
  "Web"
];

const SkillGrid = () => {
  const [selected, setSelected] = useState("Tous");
  const [expanded, setExpanded] = useState(false);

  const filteredSkills =
    selected === "Tous"
      ? skillsData
      : skillsData.filter((s) => s.type === selected);

  const skillsToShow = expanded ? filteredSkills : filteredSkills.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Mes Compétences</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelected(type);
              setExpanded(false); // reset scroll when filter changes
            }}
            className={`px-4 py-2 rounded-full border ${
              selected === type
                ? "bg-white text-black font-semibold"
                : "bg-transparent border-white text-white"
            } transition duration-300`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsToShow.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-900 text-center rounded-xl py-6 px-4 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-2 flex justify-center">{skill.icon}</div>
            <div className="text-sm font-medium">{skill.name}</div>
          </div>
        ))}
      </div>

      {filteredSkills.length > 12 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cyan-400 hover:underline font-medium"
          >
            {expanded ? "Voir moins ▲" : "Voir plus ▼"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SkillGrid;