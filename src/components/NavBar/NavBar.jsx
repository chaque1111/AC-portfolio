import React from "react";
import styles from "../NavBar/NavBar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import {AiOutlineMenu} from "react-icons/ai";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.containName}>
        <h1 className={styles.name}>Alexander Jonatan Cañete</h1>
      </div>
      <div className={styles.containLinks}>
        <ul className={styles.ul}>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-150}
            duration={200}
          >
            <li className={styles.Link}>Inicio</li>
          </Link>
          <Link
            to='proyects'
            spy={true}
            smooth={true}
            offset={-150}
            duration={200}
          >
            <li className={styles.Link}>Proyectos</li>
          </Link>
          <Link
            to='techSkills'
            spy={true}
            smooth={true}
            offset={-150}
            duration={200}
          >
            <li className={styles.Link}>Tecnologías</li>
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-150}
            duration={200}
          >
            <li className={styles.Link}>Contacto</li>
          </Link>
        </ul>
      </div>
      <div className={styles.containDropdown}>
        <Dropdown>
          <Dropdown.Toggle
            className={styles.buttonIco}
            variant='secondary'
            id='dropdown-basic'
          >
            <AiOutlineMenu></AiOutlineMenu>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.containItems}>
            <Link
              id='uwu'
              to='about'
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
            >
              <Dropdown.Item className={styles.Item}>Inicio</Dropdown.Item>{" "}
            </Link>
            <Link
              to='proyects'
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
            >
              <Dropdown.Item className={styles.Item}>Proyectos</Dropdown.Item>
            </Link>
            <Link
              to='techSkills'
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
            >
              <Dropdown.Item className={styles.Item}>Tecnologías</Dropdown.Item>
            </Link>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
            >
              <Dropdown.Item className={styles.Item}>Contacto</Dropdown.Item>{" "}
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
