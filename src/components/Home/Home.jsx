import React from "react";
import logoAC from "../../assets/LogoAC.jpg";
import styles from "../Home/Home.module.css";
import NavBar from "../NavBar/NavBar";
import {Button} from "react-bootstrap";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {GrGithub, GrDocumentPdf, GrCertificate} from "react-icons/gr";
import {FaLinkedin} from "react-icons/fa";
import {BsFillEyeFill} from "react-icons/bs";

import underLogo from "../../assets/underStock.svg";
import s3 from "../../assets/Amazon-S3.png";
import ec2 from "../../assets/AWS-ec2.png";
import rds from "../../assets/awsS3.png";
import bootstrap from "../../assets/bootstrap.svg";
import css from "../../assets/css.svg";
import express from "../../assets/express.png";
import github from "../../assets/github.svg";
import heroku from "../../assets/heroku.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import Postgre from "../../assets/Postgre.svg";
import postman from "../../assets/postman.png";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import scrum from "../../assets/scrum.png";
import sequelize from "../../assets/sequelize.svg";
import codigoQR from "../../assets/QR.jpg";
import mongoDB from "../../assets/mongodb.png";
import ts from "../../assets/tslogo.png";
import python from "../../assets/python.png";
import nest from "../../assets/nest.svg.png";
const Home = () => {
  const particlesInit = async (main) => {
    // console.log(main);
    // you can initiate the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container)
  };
  return (
    <div className={styles.container}>
      <NavBar></NavBar>

      <div className={styles.particles}>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#fffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.5,
                },
              },
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.7,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 60,
              },
              opacity: {
                value: 0.0,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {min: 1, max: 2},
              },
            },
            detectRetina: true,
          }}
        />
        <header className={styles.header}>
          <img
            name='about'
            className={styles.logoAC}
            src={logoAC}
            alt='not found'
          />
          <div className={styles.headerContent}>
            <div>
              <h1 className={styles.title}>Hola, soy </h1>
              <h1 className={styles.name}>Alex</h1>{" "}
            </div>
            <h2 className={styles.subTitle}>full-stack developer</h2>{" "}
          </div>
        </header>
        <div className={styles.containAbout}>
          <p className={styles.about}>
          Mi nombre es Alexander Jonatan Cañete tengo 20 años. Soy programador y desarrollador de pila completa con una pasión por enseñar y aprender nuevas tecnologías. Disfruto aplicar mis conocimientos en proyectos laborales y personales. Soy un amante y apasionado de la tecnología.
          </p>{" "}
        </div>
        <div className={styles.containDocuments}>
          <a
            href='https://certificates.soyhenry.com/cert?id=692bd34a-167f-49e9-9800-5c3aa2a9f6a5'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className={styles.buttonLinght} variant='light'>
              <GrCertificate /> Certificado
            </Button>{" "}
          </a>{" "}
          
        </div>
      </div>
      <div className={styles.body}>
        {/* <Button
          name='proyects'
          className={styles.ButtonProyects}
          variant='light'
        >
          Mi trabajo
        </Button>{" "}
        <div className={styles.containProyect}>
          <div className={styles.containProyectName}>
            <img className={styles.underLogo} src={underLogo} alt='' />
            <h1 className={styles.nameProyect}>UNDER STOCK</h1>
          </div>
          <div className={styles.containTecnology}>
            <h1 className={styles.tecnology}>Front-End</h1>
            <h1 className={styles.tecnology}>React.js</h1>
            <h1 className={styles.tecnology}>Redux-Toolkit</h1>
            <h1 className={styles.tecnology}>CSS3</h1>
            <h1 className={styles.tecnology}>Bootstrap</h1>
            <h1 className={styles.tecnology}>TypeScript</h1>
            <h1 className={styles.tecnology}>Javascript</h1>
            <h1 className={styles.tecnology}>Responsive Web Desing</h1>{" "}
            <h1 className={styles.tecnology}>AWS S3</h1>
            <h1 className={styles.tecnology}>Back-End</h1>
            <h1 className={styles.tecnology}>Express</h1>
            <h1 className={styles.tecnology}>Node.js</h1>
            <h1 className={styles.tecnology}>Sequelize Postgres</h1>
            <h1 className={styles.tecnology}>AWS EC2</h1>
            <h1 className={styles.tecnology}>AWS RDS</h1>
          </div>
          <div className={styles.containProyectDetail}>
            <p className={styles.proyectDetail}>
              Ésta página está inspirada en una tienda de ropa, es un proyecto
              creado para mi portafolio y para poder mostrar mi trabajo, es una
              página en la que se incluyen búsquedas asíncronas, filtrados y
              creación de productos, los datos están almacenados en una base de
              datos PostgreSql. La aplicación entera está deployada con AWS;
              Base de datos, Servidor de back-end, y front-end
            </p>
          </div>
          <div className={styles.containButtons}>
            <button className={styles.Button}>
              Repositorio <GrGithub />
            </button>

            <a
              href='http://undertockfront.s3-website-us-east-1.amazonaws.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className={styles.Button}>
                Ir al sitio <BsFillEyeFill />
              </button>
            </a>
          </div>
        </div>
        <div className={styles.containProyect}>
          <div className={styles.containProyectName}>
            <h1 className={styles.nameProyect}>SUBLIMACIONES APP</h1>
          </div>
          <div className={styles.containTecnology}>
            <h1 className={styles.tecnology}>Front-End</h1>
            <h1 className={styles.tecnology}>React.js</h1>
            <h1 className={styles.tecnology}>Javascript</h1>
            <h1 className={styles.tecnology}>Redux-Toolkit</h1>
            <h1 className={styles.tecnology}>CSS3</h1>{" "}
            <h1 className={styles.tecnology}>Responsive Web Desing</h1>{" "}
            <h1 className={styles.tecnology}>AWS S3</h1>
            <h1 className={styles.tecnology}>Back-End</h1>
            <h1 className={styles.tecnology}>Express</h1>
            <h1 className={styles.tecnology}>Node.js</h1>
            <h1 className={styles.tecnology}>Sequelize Postgres</h1>
            <h1 className={styles.tecnology}>AWS EC2</h1>
            <h1 className={styles.tecnology}>AWS RDS</h1>
          </div>
          <div className={styles.containProyectDetail}>
            <p className={styles.proyectDetail}>
              E-Commerce enfocado en la presentacion y venta de productos
              personalizados, administrado directamente por el cliente dueño de
              la página. Alojada en la Nube con Amazon Web Services
            </p>
          </div>
          <div className={styles.containButtons}>
            <button className={styles.Button}>
              Repositorio <GrGithub />
            </button>

            <a
              href='http://sublimaciones.s3-website-us-east-1.amazonaws.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className={styles.Button}>
                Ir al sitio <BsFillEyeFill />
              </button>
            </a>
          </div>
        </div> */}
        <Button
          name='techSkills'
          className={styles.ButtonProyects}
          variant='light'
        >
          Tecnologías
        </Button>{" "}
        <div className={styles.containProyect}>
          <div className={styles.containTecnology}>
            {" "}
            <div className={styles.containIcon}>
              <img src={nest} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Nest.js</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={python} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Python</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={ts} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>TypeScript</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={js} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>JavaScript</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={mongoDB} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>MongoDb</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={github} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>GitHub</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={bootstrap} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Bootstrap</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={css} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>CSS3</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={express} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Express</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={html} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>HTML</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={heroku} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Heroku</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={rds} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>AWS RDS</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={ec2} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>AWS EC2</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={s3} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>AWS S3</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={node} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Node.js</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={Postgre} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Postgre</h1>
            </div>{" "}
            <div className={styles.containIcon}>
              <img src={postman} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Postman</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={react} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>React</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={redux} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Redux</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={scrum} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Scrum</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={sequelize} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>Sequelize</h1>
            </div>
          </div>
        </div>
        <Button
          name='contact'
          className={styles.ButtonProyects}
          variant='light'
        >
          Contacto
        </Button>{" "}
        <div className={styles.containContact}>
          <div className={styles.containSpans}>

            <div className={styles.containLabels}>
              <span className={styles.spanContact}>
                <label className={styles.labelContact}>Nombre completo:</label>
                Alexander Jonatan Cañete
              </span>{" "}
              <span className={styles.spanContact}>
                <label className={styles.labelContact}>Email:</label>
                alexandercanete035@gmail.com
              </span>{" "}
           
              <div className={styles.containIconsLinks}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/chaque1111'
                >
                  <GrGithub className={styles.iconLink} />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/alexander-ca%C3%B1ete-831480238/'
                >
                  <FaLinkedin className={styles.iconLink} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
