import { Link, useParams } from 'react-router-dom';
import { UNITS } from '../data/units';

const content = {
  dinamus: {
    nextStep: 'Atualize esta página com cultos, agenda, links úteis e comunicados da Dinamus Alphaville.',
    primaryAction: 'Cadastrar agenda Dinamus',
    secondaryAction: 'Voltar para abas',
  },
  huios: {
    nextStep: 'Atualize esta página com turmas, módulos, calendário, materiais e orientações da Escola Huios.',
    primaryAction: 'Cadastrar módulos Huios',
    secondaryAction: 'Voltar para abas',
  },
};

export default function UnitLanding() {
  const { unitId } = useParams();
  const unit = UNITS.find((item) => item.id === unitId && item.id !== 'move');

  if (!unit) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
        <div className="border border-white/15 bg-neutral-950 p-8 text-center">
          <p className="mb-4 text-lg font-bold uppercase">Área não encontrada</p>
          <Link to="/" className="font-black uppercase text-move-blue">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const pageContent = content[unit.id as 'dinamus' | 'huios'];

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-6 inline-block text-sm font-black uppercase tracking-[0.2em] text-white/60 hover:text-white">
          ← Voltar para seleção de abas
        </Link>

        <div className="border border-white/15 bg-neutral-950 p-8 md:p-12">
          <div className={`mb-6 inline-flex border px-4 py-2 text-xs font-black uppercase tracking-[0.25em] ${unit.accent}`}>
            {unit.shortName}
          </div>
          <h1 className="mb-4 text-4xl font-black uppercase leading-none md:text-7xl">{unit.heroTitle}</h1>
          <p className="mb-8 max-w-3xl text-lg text-white/75 md:text-xl">{unit.description}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {unit.highlights.map((item) => (
              <div key={item} className="border border-white/10 bg-black/40 p-5">
                <p className="text-sm font-black uppercase tracking-[0.15em] text-white/60">Destaque</p>
                <p className="mt-3 text-xl font-black uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="border border-white/15 bg-neutral-950 p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-white/50">Próximo passo</p>
            <h2 className="mb-4 text-3xl font-black uppercase">Estrutura pronta para receber conteúdo real</h2>
            <p className="text-white/75">{pageContent.nextStep}</p>
          </div>

          <div className="border border-white/15 bg-neutral-950 p-8">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white/50">Ações rápidas</p>
            <div className="space-y-3">
              <button className="w-full border border-move-blue bg-move-blue px-5 py-4 text-left text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-move-pink hover:border-move-pink">
                {pageContent.primaryAction}
              </button>
              <Link to="/" className="block w-full border border-white/20 px-5 py-4 text-sm font-black uppercase tracking-[0.15em] text-white/80 transition hover:bg-white hover:text-black">
                {pageContent.secondaryAction}
              </Link>
            </div>
            {unit.instagram ? <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Instagram sugerido: {unit.instagram}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
