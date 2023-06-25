import Image from "next/image";
import styles from "./page.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.button_container}>
        <a
          className={styles.isometric_button}
          href="https://www.youtube.com/channel/UCB55OE5A4hj4VyKPOSUtsrg"
          target="_blank"
        >
          <FaYoutube size={68} />
        </a>
        <a
          className={styles.isometric_button}
          href="https://api.whatsapp.com/send?phone=5515981574134&text=Ol%C3%A1%2C%20Bruno%20Garcia%20Moura%20aqui%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho%20de%20desenvolvimento%2C%20pode%20me%20ajudar%3F"
          target="_blank"
        >
          <FaWhatsapp size={68} />
        </a>
        <a
          className={styles.isometric_button}
          href="https://www.instagram.com/bgarciamoura/"
          target="_blank"
        >
          <FaInstagram size={68} />
        </a>
        <a
          className={styles.isometric_button}
          href="https://www.facebook.com/bruno.garciamoura"
          target="_blank"
        >
          <FaFacebook size={68} />
        </a>
      </div>
    </main>
  );
}
