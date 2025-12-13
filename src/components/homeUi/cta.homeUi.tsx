import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default function CtaHomeUi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto bg-linear-to-r from-violet-500 to-violet-600 rounded-2xl p-12 text-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Não se trata de economizar tempo.
        </h2>
        <p className="text-xl text-violet-100 mb-2">Se trata de recuperá-lo.</p>
        <p className="text-lg text-violet-200 mb-8">
          Comece agora. Sem cartão de crédito. Sem compromisso. Apenas você e
          suas horas de volta.
        </p>
        <Link href={"/auth/signup"}>
          <button className="px-8 py-4 bg-white hover:bg-gray-100 text-violet-600 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center gap-2 shadow-lg">
            Começar Minha Jornada <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
}
