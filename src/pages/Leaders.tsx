import { motion } from 'motion/react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const leaders = [
  {
    name: 'Hugo',
    role: 'Líder Lobby',
    image: '/lider1.jpg',
    bio: 'Líder visionário focado em despertar o propósito em cada jovem.',
    instagram: 'https://www.instagram.com/move.alphaville/',
    whatsapp: '5511990179029',
  },
  {
    name: 'Guilherme e Bia',
    role: 'Líderes Conecta',
    image: '/lideres.jpeg',
    bio: 'Dedicados a construir conexões reais e profundas através dos GCs.',
    instagram: 'https://www.instagram.com/move.alphaville/',
    whatsapp: '5511952809396',
  },
  {
    name: 'Robinho e Bea',
    role: 'Rock de 12 a 14 anos',
    image: '/robinho-bea.JPEG',
    bio: 'Liderando os pré-adolescentes com propósito, cuidado e identidade em Cristo.',
    instagram: 'https://www.instagram.com/move.alphaville/',
    whatsapp: '5511986115207',
  },
  {
    name: 'Gab',
    role: 'Rock de 15 a 18 anos',
    image: '/gab.jpg',
    bio: 'Ajudando adolescentes a crescerem em fé, maturidade e propósito.',
    instagram: 'https://www.instagram.com/move.alphaville/',
    whatsapp: '5511986115207',
  },
];

export default function Leaders() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute right-0 top-0 -z-10 h-[320px] w-[320px] bg-move-blue/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[320px] w-[320px] bg-move-pink/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl p-4 sm:p-6 md:p-10 lg:p-16">
        <header className="mb-6 sm:mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bauhaus text-3xl uppercase leading-none sm:text-5xl md:text-7xl lg:text-8xl">
              LÍDERES <br />
              <span className="text-move-blue">DA CASA</span>
            </h1>

            <div className="mb-6 mt-4 h-2 w-20 bg-move-pink sm:mb-8 sm:w-24" />

            <p className="max-w-2xl text-xs font-bold uppercase tracking-[0.16em] text-gray-400 sm:text-sm md:text-xl">
              Conheça as pessoas que dedicam suas vidas para construir o MOVE e
              servir a nossa comunidade.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 xl:gap-12">
          {leaders.map((leader, index) => {
            const whatsappLink = `https://wa.me/${leader.whatsapp}?text=${encodeURIComponent(
              `Oi! Quero falar com ${leader.name} sobre o MOVE.`
            )}`;

            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-move-blue/30 transition-all duration-500 group-hover:border-move-blue">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full scale-105 object-cover object-center transition-all duration-700 group-hover:scale-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-8">
                    <span className="mb-3 inline-block bg-move-pink px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white sm:mb-4 sm:text-xs">
                      {leader.role}
                    </span>

                    <h2 className="mb-2 text-2xl font-black uppercase italic tracking-tighter sm:text-3xl md:text-5xl">
                      {leader.name}
                    </h2>

                    <p className="mb-5 max-w-md text-sm font-medium text-gray-300 sm:mb-6">
                      {leader.bio}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={leader.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-move-blue hover:bg-move-blue"
                      >
                        <Instagram size={18} />
                      </a>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-move-pink hover:bg-move-pink"
                        aria-label={`Falar com ${leader.name} no WhatsApp`}
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <section className="glass-card relative mt-12 overflow-hidden border-move-blue p-6 sm:mt-20 sm:p-8 lg:mt-32 lg:p-12">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <MapPin size={90} className="text-move-blue sm:size-[120px]" />
          </div>

          <div className="relative z-10">
            <h3 className="mb-4 text-2xl font-black uppercase sm:mb-6 sm:text-3xl">
              ONDE NOS ENCONTRAR?
            </h3>

            <p className="mb-6 max-w-xl font-bold tracking-wide text-gray-400 sm:mb-8">
              Estamos todos os sábados e sextas nos GCs e eventos mensais no
              prédio da Igreja Dinamus Alphaville.
            </p>

            <a
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-move-blue px-6 py-4 font-black uppercase tracking-tighter text-white transition-colors hover:bg-move-pink sm:px-8"
            >
              VER LOCALIZAÇÃO
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
