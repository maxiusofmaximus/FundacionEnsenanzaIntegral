import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Fundación Enseñanza Integral',
  description: 'Proyectos educativos y ayuda escolar gratuita para jóvenes en Colombia. Fundación enfocada en la inclusión digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
          <div className="container">
            <Image src="/file.svg" alt="logo" width={50} height={50} className="me-2" />
            <a className="navbar-brand text-white" href="#">Fundación Enseñanza Integral</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* Add navigation links here */}
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-dark text-light py-4">
          <div className="container text-center">
            <p>&copy; 2013-2025 Fundación Enseñanza Integral. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
