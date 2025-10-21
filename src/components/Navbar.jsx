import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      const threshold = home ? Math.max(home.offsetHeight - 80, 80) : 80;
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`flex justify-between fixed w-full top-0 z-50 px-10 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-gray-800"
          : "bg-white text-gray-800 shadow-sm"
      }`}
    >
      <h1 className="text-2xl font-bold italic tracking-tight">
        <a
          href="#"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-red-600 hover:text-red-700 transition"
        >
          ImportCar
        </a>
      </h1>

      <ul className="flex gap-10 text-sm font-semibold">
        <li>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="hover:text-red-600 transition-colors"
          >
            SOBRE NÓS
          </a>
        </li>
        <li>
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, "#products")}
            className="hover:text-red-600 transition-colors"
          >
            PRODUTOS
          </a>
        </li>
        <li>
          <a
            href="#differentials"
            onClick={(e) => handleSmoothScroll(e, "#differentials")}
            className="hover:text-red-600 transition-colors"
          >
            DIFERENCIAIS
          </a>
        </li>
      </ul>
    </nav>
  );
}
