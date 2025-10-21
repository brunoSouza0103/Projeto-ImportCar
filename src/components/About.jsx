export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 py-20 bg-gray-50 text-slate-800 px-10">
      <div className="max-w-lg">
        <h2 className="text-2xl font-bold mb-4 italic text-slate-700">SOBRE NÓS</h2>
        <p className="text-primary font-semibold mb-2">LÍDER EM PEÇAS IMPORTADAS</p>
        <p className="text-slate-600">
          Há mais de 15 anos no mercado, somos especialistas em peças importadas automotivas.
          Nossa missão é oferecer aos nossos clientes as melhores peças do mercado internacional,
          garantindo performance superior e durabilidade excepcional para todos os tipos de veículos.
        </p>
        <p className="mt-3 text-slate-500">
          Trabalhamos com os principais fabricantes mundiais e mantemos um rigoroso controle de qualidade.
          Cada peça é testada e certificada para garantir total segurança e confiabilidade.
        </p>
      </div>
      <img src="/electric-car.png" alt="Carro elétrico" className="max-w-md drop-shadow-xl" />
    </section>
  );
}
