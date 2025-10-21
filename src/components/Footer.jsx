export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-bold text-xl italic">IMPORTCAR</h3>
        <p className="text-sm text-gray-400 mt-2">
          Peças Importadas Automotivas. Qualidade, performance e inovação em cada produto.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">LINKS RÁPIDOS</h4>
        <ul className="space-y-1 text-gray-300">
          <li><a href="#hero" className="hover:text-primary">Início</a></li>
          <li><a href="#about" className="hover:text-primary">Sobre Nós</a></li>
          <li><a href="#products" className="hover:text-primary">Produtos</a></li>
          <li><a href="#differentials" className="hover:text-primary">Diferenciais</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">CONTATO</h4>
        <p className="text-gray-300 text-sm">📞 (43) xxxx-xxxx</p>
        <p className="text-gray-300 text-sm">✉ contato@importcar.com.br</p>
        <form className="mt-4 flex border border-gray-700 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Seu email"
            className="bg-transparent text-sm px-3 py-2 flex-1 outline-none"
          />
          <button className="bg-primary px-4 text-white font-bold">→</button>
        </form>
      </div>
    </footer>
  );
}
