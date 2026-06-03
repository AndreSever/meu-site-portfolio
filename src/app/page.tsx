import { MotionWrapper } from "@/components/motion-wrapper";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <MotionWrapper>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio - Andre Severino</h1>
          <p className="text-lg text-gray-600 mb-8">
            Portfolio profissional estratégico para consolidar e expor minha trajetória de carreira
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Conquistas</h2>
              <p className="text-gray-600">Marcos importantes e resultados alcançados</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Projetos</h2>
              <p className="text-gray-600">Realizações detalhadas com impacto</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Entregáveis</h2>
              <p className="text-gray-600">Produtos e soluções desenvolvidos</p>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
