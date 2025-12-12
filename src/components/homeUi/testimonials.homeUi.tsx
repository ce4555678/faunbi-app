import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    emoji: "💜",
    name: "Marina S.",
    role: "Produtora de Conteúdo",
    content:
      "Economizamos 10 horas por semana só por não ter mais que revirar vídeos. O Faunbi é exatamente o que precisávamos.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
  },
  {
    id: 2,
    emoji: "⚡",
    name: "João P.",
    role: "Editor de Vídeo",
    content:
      "A transcrição automática economizou tempo valioso no meu fluxo de trabalho. Altamente recomendado!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
  },
  {
    id: 3,
    emoji: "🎯",
    name: "Ana L.",
    role: "Consultora de Mídia",
    content:
      "Conseguimos organizar melhor nossos arquivos de áudio. Interface intuitiva e muito funcional.",
    rating: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    id: 4,
    emoji: "🚀",
    name: "Carlos M.",
    role: "Produtor Musical",
    content:
      "A qualidade da transcrição é impressionante. Perfeito para organizar meus projetos.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    id: 5,
    emoji: "✨",
    name: "Sofia R.",
    role: "Jornalista",
    content:
      "Ferramenta essencial para profissionais de mídia. Não consigo imaginar trabalhar sem ela agora.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
  },
  {
    id: 6,
    emoji: "💎",
    name: "Pedro V.",
    role: "Criador de Podcast",
    content:
      "Excelente para transcever episódios. Ganho muito tempo na edição de conteúdo.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
  },
];

export default function TestimonialsHomeUi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Confiado por criadores de conteúdo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários dizem sobre o Faunbi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300 border border-muted"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl">{testimonial.emoji}</span>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <p
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `"${testimonial.content}"`,
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
