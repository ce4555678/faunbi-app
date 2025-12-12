import {
  Clock,
  Database,
  Lightbulb,
  Mic,
  Sparkles,
  Upload,
} from "lucide-react";

export default function FeaturesHomeUi() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Construído para quem cria
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada detalhe foi pensado para otimizar o fluxo de trabalho de
            criadores, produtores e profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Upload size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Upload de Arquivo
            </h3>
            <p className="text-gray-600">
              Envie seus arquivos. Faunbi processa tudo automaticamente.
              Simples, rápido e seguro.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Lightbulb size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Busca que Entende
            </h3>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: `Tecnologia vetorial permite procurar por conceitos, não apenas
              palavras. "Fale sobre monetização" encontra tudo relacionado.`,
              }}
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Clock size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Timestamps Precisos
            </h3>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: `Cada resultado inclui o tempo exato. Nada de "aproximadamente
              aqui". Precisão ao segundo.`,
              }}
            />
          </div>

          {/* Feature 4 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Mic size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Transcrição Perfeita
            </h3>
            <p className="text-gray-600">
              IA última geração transcre­ve em 99+ idiomas com precisão de
              estúdio. Sotaque? Não é problema.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Database size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Organização Automática
            </h3>
            <p className="text-gray-600">
              Faunbi categoriza e indexa tudo. Seus dados estão seguros,
              organizados e sempre acessíveis.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white border border-violet-200 rounded-xl p-8 hover:border-violet-400 transition group shadow-sm hover:shadow-md">
            <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Sparkles size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Controle Total
            </h3>
            <p className="text-gray-600">
              Suas transcrições são 100% privadas e seguras. Você tem controle
              total sobre seus dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
