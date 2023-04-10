import React from "react";
import styles from "../NavBar/NavBar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import {AiOutlineMenu} from "react-icons/ai";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.containName}>
        <h1 className={styles.name}>Alexander Jonatan Cañete</h1>
      </div>
      <div className={styles.containLinks}>
        <ul className={styles.ul}>
          <li className={styles.Link}>Inicio</li>
          <li className={styles.Link}>Proyectos</li>
          <li className={styles.Link}>Tecnologías</li>
          <li className={styles.Link}>Contacto</li>
        </ul>
      </div>
      <div className={styles.containDropdown}>
        {" "}
        <Dropdown>
          <Dropdown.Toggle
            className={styles.buttonIco}
            variant='secondary'
            id='dropdown-basic'
          >
            <AiOutlineMenu></AiOutlineMenu>
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.containItems}>
            <Dropdown.Item className={styles.Item} href='#/action-1'>
              Inicio
            </Dropdown.Item>
            <Dropdown.Item className={styles.Item} href='#/action-2'>
              Proyectos
            </Dropdown.Item>
            <Dropdown.Item className={styles.Item} href='#/action-3'>
              Tecnologías
            </Dropdown.Item>
            <Dropdown.Item className={styles.Item} href='#/action-3'>
              Contacto
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
