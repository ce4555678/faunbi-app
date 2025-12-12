import { CheckCircle2, Zap, Building2, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PricingSectionFaunbi() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 border border-violet-200 rounded-full bg-violet-50">
            <span className="text-violet-700 text-xs font-semibold uppercase tracking-wide">
              Planos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Pague pelo valor entregue — Planos flexíveis para todos os times
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transcrição, busca inteligente e automações para desenvolvedores,
            criadores, agências, educação e atendimento. Comece grátis e escale
            conforme precisar.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Starter Card */}
          <Card className="relative border border-violet-200 rounded-3xl p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-100 inline-flex items-center justify-center">
                  <Zap size={24} className="text-violet-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-extrabold text-gray-900">
                    Starter
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Ideal para profissionais individuais e pequenas equipes
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Perfeito para quem precisa transformar áudios e vídeos em texto
                pesquisável, resumos e insights — sem complexidade.
              </p>

              {/* Pricing box */}
              <div className="bg-violet-50/60 border border-violet-100 rounded-2xl p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Incluído todo mês
                  </p>
                </div>

                <div className="pt-4 border-t border-violet-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Crédito Mensal Base
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-violet-600">
                      $5
                    </span>
                    <span className="text-sm text-gray-500">/mês</span>
                  </div>

                  <p className="mt-3 text-sm text-gray-600">
                    Uso adicional:{" "}
                    {/* <strong className="text-gray-800">$0.20 / 1k req</strong> •{" "} */}
                    <strong className="text-gray-800">$0.02 / min</strong>
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    (Estimativa: $0.01/min ≈ $1.20/h)
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                <FeatureItem text="Transcrição automática e diarização" />
                <FeatureItem text="Resumo inteligente e busca por palavra-chave" />
                <FeatureItem text="Exportação em múltiplos formatos (VTT, SRT, TXT)" />
                <FeatureItem text="Organização por projetos e tags" />
                <FeatureItem text="Documentação com exemplos práticos" />
              </ul>

              <div>
                <Button
                  aria-label="Começar agora - Starter"
                  className="w-full rounded-xl py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-150 flex items-center justify-center gap-2"
                >
                  Começar Agora
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Card */}
          <Card className="relative border-2 border-violet-600 rounded-3xl p-10 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-linear-to-r from-violet-600 to-violet-700 text-white px-4 py-2 rounded-full shadow-md text-sm font-extrabold">
                Recomendado
              </Badge>
            </div>

            <CardHeader className="p-0 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-600 rounded-xl inline-flex items-center justify-center">
                  <Building2 size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                    Enterprise
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Escala, compliance e suporte para operações críticas
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Soluções customizadas para times que precisam de SLA,
                integrações com pipelines e suporte dedicado — desde agências
                até grandes corporações.
              </p>

              <div className="bg-violet-50/60 border border-violet-100 rounded-2xl p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Sob demanda
                  </p>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-center justify-between">
                      {/* <span className="text-gray-700 text-sm">
                        Requisições API
                      </span> */}
                      <strong className="text-lg font-extrabold text-violet-600">
                        Customizado
                      </strong>
                    </div>
                    <div className="h-px bg-linear-to-r from-violet-200 via-violet-100 to-transparent" />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm">Transcrição</span>
                      <strong className="text-lg font-extrabold text-violet-600">
                        Customizado
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-violet-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Descontos progressivos
                  </p>
                  <p className="text-gray-700 text-sm font-semibold">
                    Quanto maior o volume, melhor o preço
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                <FeatureItem text="Tudo do Starter incluso" />
                <FeatureItem text="Webhooks e integrações personalizadas" />
                <FeatureItem text="SLA 99.9% e suporte prioritário 24/7" />
                <FeatureItem text="Relatórios avançados e acesso a dados brutos" />
                <FeatureItem text="Onboarding técnico e consulting opcional" />
              </ul>

              <div>
                <Button
                  aria-label="Falar com vendas - Enterprise"
                  className="w-full rounded-xl py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-150 flex items-center justify-center gap-2"
                >
                  Falar com Vendas
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA / FAQ link */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
            Dúvidas?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Temos planos e integrações para qualquer fluxo de trabalho — da
            criação de conteúdo ao processamento em larga escala.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition"
          >
            Agendar uma consulta <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start text-gray-700">
      <CheckCircle2 size={20} className="text-violet-500 shrink-0 mt-1" />
      <span className="font-medium text-base leading-relaxed">{text}</span>
    </li>
  );
}
