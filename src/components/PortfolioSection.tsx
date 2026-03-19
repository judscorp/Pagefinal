import { useState } from "react";

const projects = [
  {
    category: "Landing pages",
    title: "Landing page institucional e captação",
    description: "Página criada para apresentar serviços e captar clientes de forma automatizada.",
    image: "/images/landing.png",
    tools: ["Lovable", "Vercel", "GitHub"],
  },
  {
    category: "Dashboards",
    title: "Dashboard de controle operacional",
    description: "Painel visual para acompanhamento de dados, pedidos e desempenho do negócio.",
    image: "/images/dashboard1.png",
    tools: ["Looker Studio", "Google Sheets"],
  },
  {
    category: "Dashboards",
    title: "Painel inteligente de gestão",
    description: "Sistema visual com métricas e relatórios para tomada de decisão.",
    image: "/images/dashboard2.png",
    tools: ["Data", "Integrations"],
  },
  {
    category: "Automação",
    title: "Automação inteligente com múltiplos agentes",
    description: "Fluxo avançado com IA integrando atendimento, agenda e dados.",
    image: "/images/n8n-big.png",
    tools: ["n8n", "OpenAI", "API"],
  },
  {
    category: "Automação",
    title: "Automação de tarefas operacionais",
    description: "Automação para coleta e envio de dados entre sistemas.",
    image: "/images/n8n-small.png",
    tools: ["n8n", "Gmail", "Slack"],
  },
  {
    category: "Sistemas internos",
    title: "Identidade tecnológica Just Tech",
    description: "Construção de uma marca voltada para inovação e eficiência.",
    image: "/images/logo.png",
    tools: ["Design", "Branding"],
  },
];

const filters = [
  "Todos",
  "Automação",
  "Sistemas internos",
  "Landing pages",
  "Dashboards",
  "Ferramentas de gestão",
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-[#071A0F] to-[#0F3D2E] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-4">
          Projetos e soluções desenvolvidas
        </h2>

        <p className="text-gray-300 mb-10">
          Sistemas, automações e ferramentas criadas para melhorar a operação de pequenos negócios através da tecnologia.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-green-500 text-black"
                  : "border-green-400 text-green-300 hover:bg-green-400 hover:text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="bg-[#0B1F17] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-600 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#0F3D2E] p-6 rounded-lg max-w-lg w-full relative">
              <button
                className="absolute top-3 right-3 text-white"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <h3 className="text-xl font-bold mb-3">
                {selectedProject.title}
              </h3>

              <p className="mb-3 text-gray-300">
                <strong>Problema:</strong> Processos manuais e falta de organização.
              </p>

              <p className="mb-3 text-gray-300">
                <strong>Solução:</strong> Implementação de sistema automatizado.
              </p>

              <p className="mb-3 text-gray-300">
                <strong>Ferramentas:</strong> {selectedProject.tools.join(", ")}
              </p>

              <p className="text-gray-300">
                <strong>Possibilidades:</strong> Aplicável a diversos negócios para melhorar produtividade.
              </p>
            </div>
          </div>
        )}

        {/* SOLUTIONS LIST */}
        <div className="mt-20">
          <h3 className="text-2xl mb-6">
            O que podemos construir para o seu negócio
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li>Automação de atendimento</li>
            <li>Sistema de pedidos</li>
            <li>Dashboard de controle</li>
            <li>Landing page / Portfólio</li>
            <li>Diagnósticos digitais</li>
            <li>Integrações entre sistemas</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl mb-4">
            Quer implementar algo assim no seu negócio?
          </h3>

          <div className="flex gap-4 justify-center">
            <button className="bg-green-500 px-6 py-2 rounded text-black">
              Solicitar diagnóstico
            </button>

            <button className="border border-green-400 px-6 py-2 rounded">
              Falar com especialista
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
