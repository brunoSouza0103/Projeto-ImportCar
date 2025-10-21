const cards = [
  { title: "Entrega Rápida", desc: "Entregamos em todo o Brasil com prazos reduzidos e segurança total.", icon: "🚚" },
  { title: "Garantia Estendida", desc: "Produtos com 2 anos de garantia e suporte técnico especializado.", icon: "🛡️" },
  { title: "Suporte 24/7", desc: "Atendimento disponível 24h por dia, 7 dias por semana.", icon: "🎧" },
  { title: "Qualidade Certificada", desc: "Certificados pelos principais fabricantes de veículos elétricos.", icon: "🏆" },
];

export default function Differentials() {
  return (
    <section id="differentials" className="py-20 bg-white text-slate-800 text-center">
      <h2 className="text-2xl font-bold italic mb-10 text-slate-700">NOSSOS DIFERENCIAIS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
        {cards.map((c, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-3">{c.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-primary">{c.title}</h3>
            <p className="text-slate-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
