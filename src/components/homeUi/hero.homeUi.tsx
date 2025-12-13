import { Sparkles, Search } from "lucide-react";
import { Link } from "next-view-transitions";

export default function HeroHomeUi() {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-violet-100 border border-violet-300 rounded-full">
          <span className="text-violet-700 text-sm font-semibold">
            ⚡ Busca em tempo real com IA
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Encontre aquele momento em
          <span className="bg-linear-to-r from-violet-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">
            {" "}
            segundos
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Não procure mais em vídeos inteiros. Faunbi transcreve, indexa e
          entende cada segundo de seus vídeos e podcasts. Pesquise como faria no
          Google.
        </p>

        <div className="flex items-center justify-center mb-12">
          <Link href={"/auth/signup"}>
            <button className="px-8 py-4 bg-linear-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white rounded-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Sparkles /> Começar grátis
            </button>
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-linear-to-r from-violet-200/40 to-violet-300/40 blur-3xl rounded-3xl" />
          <div className="relative bg-linear-to-b from-gray-50 to-white border border-violet-200 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            <div className="max-w-xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8 flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                <Search size={18} className="text-violet-500" />
                <input
                  type="text"
                  placeholder={
                    "Buscar: 'quando mencionaram a estratégia de crescimento'"
                  }
                  className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
                  disabled
                />
              </div>

              {/* Results Preview */}
              <div className="space-y-3 text-left">
                <div className="bg-violet-50 rounded-lg p-4 border border-violet-100 hover:border-violet-300 transition cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 font-medium">
                        Reunião de Q4 - 14:32
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        dangerouslySetInnerHTML={{
                          __html: `"...a estratégia de crescimento para este trimestre
                        focará em..."`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-violet-200 transition cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 font-medium">
                        Podcast #45 - 28:15
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        dangerouslySetInnerHTML={{
                          __html: `"...estratégia de crescimento entre startups e grandes
                        empresas..."`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-violet-200 transition cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 font-medium">
                        Gravação - 05:42
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        dangerouslySetInnerHTML={{
                          __html: `"...nossas estratégias de crescimento precisam ser mais
                        agressivas..."`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                ✨ Resultados instantâneos de toda sua biblioteca
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
