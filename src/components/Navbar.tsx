
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Eventos", href: "#eventos" },
    { name: "Trilha", href: "/trilha", isRoute: true },
    { name: "Parcerias", href: "#parcerias" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" }
  ];

  // Check if we're on the trilha page
  const isOnTrilhaPage = location.pathname === '/trilha';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold"
          >
            <span className="text-espirito-blue">Espírito</span>
            <span className="text-espirito-orange">Bitcoin</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            item.isRoute ? (
              <Link
                key={index}
                to={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? "text-espirito-blue hover:text-espirito-orange" : "text-white hover:text-espirito-orange"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              // If we're on trilha page, redirect to home page with anchor
              isOnTrilhaPage ? (
                <Link
                  key={index}
                  to={`/${item.href}`}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? "text-espirito-blue hover:text-espirito-orange" : "text-white hover:text-espirito-orange"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? "text-espirito-blue hover:text-espirito-orange" : "text-white hover:text-espirito-orange"
                  }`}
                >
                  {item.name}
                </a>
              )
            )
          ))}
          <a 
            href={isOnTrilhaPage ? "/#evento" : "#evento"}
            className="btn-primary"
          >
            Próximo Evento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-espirito-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={index}
                  to={item.href}
                  className="font-medium text-espirito-blue hover:text-espirito-orange transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                // If we're on trilha page, redirect to home page with anchor
                isOnTrilhaPage ? (
                  <Link
                    key={index}
                    to={`/${item.href}`}
                    className="font-medium text-espirito-blue hover:text-espirito-orange transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="font-medium text-espirito-blue hover:text-espirito-orange transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )
            ))}
            <a 
              href={isOnTrilhaPage ? "/#evento" : "#evento"}
              className="btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Próximo Evento
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
