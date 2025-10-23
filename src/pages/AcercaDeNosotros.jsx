import React from 'react';
import headermenu from '../components/headermenu';
import footergeneral from '../components/footergeneral';
//Images
import avatarmarvin from '../assets/img/AcercaDe/Marvin.png'
import avatarkey from '../assets/img/AcercaDe/Key.jpg'
import avatarangel from '../assets/img/AcercaDe/Angel.jpg'
import avatarcolin from '../assets/img/AcercaDe/Colin.jpg'
import avatarturrubiates from '../assets/img/AcercaDe/Turrubiates.jpg'
import avatarisrael from '../assets/img/AcercaDe/Israel.jpg'
import './AcercaDeNosotros.css';

const AcercaDe = () => {
  const scrummaster =
  {
    nombre: "Dr. Laura Vital Turrubiates",
    rol: "Scrum Master",
    descripcion: "Responsable de dar al esquipo scrum los requerimientos del sistema.",
    avatar: avatarturrubiates
  }
  // Datos de los integrantes del equipo
  const integrantes = [
    {
      
      id: 2,
      nombre: "Keyni Karely Castañeda Hernández",
      rol: "Product Owner",
      descripcion: "Responsable del correcto desarrollo.",
      avatar: avatarkey
    },
    {
      id: 3,
      nombre: "Marvin Javier Sánchez Carrasco",
      rol: "Team development",
      descripcion: "Web Developer (HTML, ReactJS, JavaScript, CSS)",
      avatar: avatarmarvin
    },
    {
      id: 4,
      nombre: "Israel Gómez Acosta",
      rol: "Team development",
      descripcion: "Diseñador(UI)",
      avatar: avatarisrael
    },

    {
      id: 5,
      nombre: "Angel Adolfo Cáliz Góngora",
      rol: "Team development",
      descripcion: "QA(Tester)",
      avatar: avatarangel
    },
    {
      id: 6,
      nombre: "Colin Espinosa",
      rol: "Team development",
      descripcion: "UX(User Experience)",
      avatar: avatarcolin
    }
    
  ];

  return (

    <div className="my-5">
      <div className='container'>
        {headermenu()}
        <section className="mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark">Nuestro Equipo</h1>
            <p className="lead text-muted">Conoce a las personas detrás de SandwichManía</p>
          </div>
          <div className="row g-4 scrummaster">
              <div className="col-md-1 col-lg-12">
                <div className="card h-120 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <div className="mb-3 Avatar">
                      <img src={scrummaster.avatar} alt="Avatar" className="display-5" />

                    </div>
                    <h5 className="card-title fw-bold text-dark">{scrummaster.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-primary">{scrummaster.rol}</h6>
                    <p className="card-text text-muted">{scrummaster.descripcion}</p>
                  </div>
                </div>
              </div>
          </div>

          <div className="row g-3">
            {integrantes.map(integrante => (
              <div key={integrante.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <div className="mb-3 Avatar">
                      <img src={integrante.avatar} alt="Avatar" className="display-1" />

                    </div>
                    <h5 className="card-title fw-bold text-dark">{integrante.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-primary">{integrante.rol}</h6>
                    <p className="card-text text-muted">{integrante.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección del Objetivo de la Página */}
        <section className="py-5 bg-light rounded-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="display-5 fw-bold mb-4">Nuestro Objetivo</h2>
                <div className="text-start">
                  <p className="lead mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <p className="mb-0">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {footergeneral()}
    </div>
  );
};

export default AcercaDe;