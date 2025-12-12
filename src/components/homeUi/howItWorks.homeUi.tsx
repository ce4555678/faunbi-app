import { Search, Video, Zap } from "lucide-react";

export default function HowItWorksHomeUi() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-violet-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Seu fluxo de trabalho, simplificado
        </h2>
        <p className="text-gray-600 text-center text-lg mb-16 max-w-2xl mx-auto">
          Do upload à descoberta em minutos, não horas
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <Video className="text-white" size={24} />
            </div>
            <div className="bg-white border border-violet-200 rounded-xl p-8 pt-20 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Compartilhe
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arquivo local ou URL. Faunbi entende todos os formatos. Você
                decide como compartilhar.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <Zap className="text-white" size={24} />
            </div>
            <div className="bg-white border border-violet-200 rounded-xl p-8 pt-20 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Processamos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa IA trabalha nos bastidores: transcreve, indexa,
                compreende. Você recebe uma notificação quando pronto.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <Search className="text-white" size={24} />
            </div>
            <div className="bg-white border border-violet-200 rounded-xl p-8 pt-20 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Descubra</h3>
              <p className="text-gray-600 leading-relaxed">
                Pesquise livremente. Encontre o que procura em segundos. Pule
                direto ao timestamp certo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
