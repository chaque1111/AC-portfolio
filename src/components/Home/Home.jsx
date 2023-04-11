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
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1500,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {min: 1, max: 1},
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
            Soy Full Stack Developer Graduado y Certificado en Henry. Mi nombre
            es Alexander Cañete, tengo 19 años y resido en Chaco, Argentina.
            Ingresé en el mundo de la programación hace tres años. Me considero
            un apasionado de la tecnología, amo programar y siempre me destaqué
            en ello; mis areas de trabajo son Front-end y Back-end. Como
            profesional le doy gran importancia al trabajo en equipo y tengo
            pasión por aprender nuevas Tecnologías para aplicarlas en mis
            proyectos.
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
          <a
            target='_blank'
            rel='noopener noreferrer'
            download='AC_En.pdf'
            href='https://acrobat.adobe.com/id/urn:aaid:sc:VA7:00a2b969-e879-47b6-887c-b395c31997af'
          >
            <Button className={styles.buttonLinght} variant='light'>
              <GrDocumentPdf /> CV-Español
            </Button>{" "}
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            download='AC_En.pdf'
            href='https://acrobat.adobe.com/id/urn:aaid:sc:VA7:078c97bb-745f-4603-b8c4-817105d04ae2'
          >
            <Button className={styles.buttonLinght} variant='light'>
              <GrDocumentPdf /> CV-Ingles
            </Button>
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <Button
          name='proyects'
          className={styles.ButtonProyects}
          variant='light'
        >
          Mi trabajo
        </Button>{" "}
        <div className={styles.containProyect}>
          <div className={styles.containProyectName}>
            <h1 className={styles.nameProyect}>SUBLIMACIONES APP</h1>
          </div>
          <div className={styles.containTecnology}>
            <h1 className={styles.tecnology}>Front-End</h1>
            <h1 className={styles.tecnology}>React.js</h1>
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
        </div>
        <Button
          name='techSkills'
          className={styles.ButtonProyects}
          variant='light'
        >
          Tecnologías
        </Button>{" "}
        <div className={styles.containProyect}>
          <div className={styles.containTecnology}>
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
              <img src={github} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>GitHub</h1>
            </div>
            <div className={styles.containIcon}>
              <img src={js} alt='not found' className={styles.icon} />
              <h1 className={styles.iconName}>JavaScript</h1>
            </div>{" "}
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
            <div className={styles.containQr}>
              <img className={styles.image} src={codigoQR} alt='not found' />
            </div>
            <div className={styles.containLabels}>
              <span className={styles.spanContact}>
                <label className={styles.labelContact}>Nombre completo:</label>
                Alexander Jonatan Cañete
              </span>{" "}
              <span className={styles.spanContact}>
                <label className={styles.labelContact}>Email:</label>
                alexandercanete035@gmail.com
              </span>{" "}
              <span className={styles.spanContact}>
                <label className={styles.labelContact}>Teléfono:</label>
                +54 9 362 523-5556
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
