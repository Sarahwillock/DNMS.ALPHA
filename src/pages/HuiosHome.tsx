import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CalendarDays, GraduationCap } from 'lucide-react';

export default function HuiosHome() {
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-amber-300 transition hover:text-white">
          <ArrowLeft size={18} /> Voltar ao portal
        </Link>

        <section className="border-2 border-amber-400 bg-neutral-950 p-8 md:p-12">
          <div className="mb-4 inline-block bg-amber-400 px-4 py-1 text-xs font-black uppercase tracking-[0.3em] text-black">
            Escola Huios
          </div>
          <h1 className="text-4xl font-black uppercase leading-none md:text-7xl">
            Página própria da Huios
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/75 md:text-xl">
            Aqui você pode separar o conteúdo da escola em um ambiente próprio, independente da MOVE, com módulos, calendário, professores e comunicados.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="border border-white/10 bg-neutral-950 p-6">
            <CalendarDays className="mb-4 text-amber-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Calendário</h2>
            <p className="mt-3 text-white/70">Coloque datas de aula, imersões, inscrições, provas e encontros presenciais.</p>
          </article>
          <article className="border border-white/10 bg-neutral-950 p-6">
            <BookOpen className="mb-4 text-amber-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Módulos</h2>
            <p className="mt-3 text-white/70">Organize trilhas, turmas, apostilas e materiais de apoio em blocos separados.</p>
          </article>
          <article className="border border-white/10 bg-neutral-950 p-6">
            <GraduationCap className="mb-4 text-amber-300" size={28} />
            <h2 className="text-2xl font-black uppercase">Professores</h2>
            <p className="mt-3 text-white/70">Mostre equipe, biografias, contatos e responsáveis de cada turma da Huios.</p>
          </article>
        </section>
      </div>
    </div>
  );
}
