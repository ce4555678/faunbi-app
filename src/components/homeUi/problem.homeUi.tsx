import { Clock, Zap } from "lucide-react";

export default function ProblemHomeUi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você faz quando não consegue encontrar aquele momento no
            vídeo?
          </h2>
          <p className="text-lg text-gray-600">
            A resposta provavelmente custa caro para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <Clock className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Horas Perdidas em Buscas Improdutivas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Assistir a vídeos inteiros arrastar a timeline centenas de vezes
              procurando por um detalhe. Seus produtores e editores gastam horas
              toda semana em uma tarefa que poderia ser resolvida em segundos.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <Zap className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Insights que Nunca Chegam ao Seu Destino
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Aquele feedback valioso, aquele insight crucial mencionado em uma
              reunião de 3 horas fica perdido. Você reenvia o vídeo inteiro.
              Aguarda respostas. Seu projeto não avança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
