export default function SolutionHomeUi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-violet-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Faunbi resolve isso de forma elegante
          </h2>
          <p className="text-gray-600 text-lg">
            Três etapas. Uma solução completa.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-violet-200 rounded-xl p-8 flex gap-6 items-start hover:shadow-lg transition">
            <div className="w-16 h-16 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white text-2xl font-bold">①</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cole o link. Só isso.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload local ou URL. Não importa. Faunbi entende tudo. Em
                segundos, sua IA começa o trabalho pesado: transcrevendo,
                indexando, compreendendo.
              </p>
            </div>
          </div>

          <div className="bg-white border border-violet-200 rounded-xl p-8 flex gap-6 items-start hover:shadow-lg transition">
            <div className="w-16 h-16 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white text-2xl font-bold">②</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pesquise como você pensa
              </h3>
              <p
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: `Não procure por palavras-chave. Procure por ideias. "Quando ele
                fala sobre produtividade?" "Qual foi o momento engraçado?"
                Faunbi entende a intenção por trás de suas perguntas.`,
                }}
              />
            </div>
          </div>

          <div className="bg-white border border-violet-200 rounded-xl p-8 flex gap-6 items-start hover:shadow-lg transition">
            <div className="w-16 h-16 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white text-2xl font-bold">③</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pule direto para o momento
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Encontrou? Clique. O arquivo abre no segundo exato onde aquele
                assunto é abordado. Sem arrasto de timeline. Sem perda de tempo.
                Produtividade pura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
