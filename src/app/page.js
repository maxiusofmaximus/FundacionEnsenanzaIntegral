'use client';

import Swal from 'sweetalert2';
import Image from 'next/image';

export default function HomePage() {
  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire('¡Gracias!', 'Tu mensaje ha sido enviado con éxito.', 'success');
        } else {
          Swal.fire('Error', 'Hubo un problema al enviar tu mensaje.', 'error');
        }
      })
      .catch(() => {
        Swal.fire('Error', 'No se pudo enviar el mensaje.', 'error');
      });
  };

  return (
    <main>
      <section id="inicio" className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4">Bienvenidos a Fundación Enseñanza Integral</h1>
          <p className="lead">Formando el futuro a través de la educación integral</p>
          <Image src="/imagenes/logo.avif" alt="Logo" width={200} height={200} className="img-fluid mt-4" />
        </div>
      </section>
      <section id="ventajas" className="ventajas-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nuestras Ventajas</h2>
          <div className="row">
            <div className="col-md-4">
              <Image src="/imagenes/est-1.avif" alt="Ventaja 1" width={100} height={100} className="img-fluid" />
              <p>Ventaja 1</p>
            </div>
            <div className="col-md-4">
              <Image src="/imagenes/est-2.avif" alt="Ventaja 2" width={100} height={100} className="img-fluid" />
              <p>Ventaja 2</p>
            </div>
            <div className="col-md-4">
              <Image src="/imagenes/est-3.avif" alt="Ventaja 3" width={100} height={100} className="img-fluid" />
              <p>Ventaja 3</p>
            </div>
          </div>
        </div>
      </section>
      <section id="nosotros" className="nosotros-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Sobre Nosotros</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-3">
              <Image src="/imagenes/estudiantes.png" alt="Sobre Nosotros" width={150} height={150} className="img-fluid" />
            </div>
            <div className="col-md-3">
              <p>Texto sobre nosotros.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="eventos" className="eventos-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Cronograma de Eventos</h2>
          <div id="eventosCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">{/* Indicadores */}</div>
            <div className="carousel-inner bg-warning">{/* Contenido del carrusel */}</div>
            <button className="carousel-control-prev" type="button" data-bs-target="#eventosCarousel" data-bs-slide="prev">{/* Botón anterior */}</button>
          </div>
        </div>
      </section>
      <section id="programas" className="programas-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nuestros Programas</h2>
          <div className="row">{/* Programas */}</div>
        </div>
      </section>
      <section id="unete" className="unete-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Únete a Fundación Enseñanza Integral</h2>
          <div className="text-center">{/* Contenido */}</div>
        </div>
      </section>
      <section id="contacto" className="contacto-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Contáctenos</h2>
          <div className="row justify-content-center">
            <form onSubmit={handleContactFormSubmit} className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
