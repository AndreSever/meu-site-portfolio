import { MotionWrapper } from "@/components/motion-wrapper";
import { Navigation } from "@/components/navigation";

export default function Entregaveis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <MotionWrapper>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Entregáveis</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-700 mb-4">
              Produtos e soluções desenvolvidos
            </p>
            <p className="text-gray-600">
              [Adicione seus entregáveis aqui]
            </p>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
