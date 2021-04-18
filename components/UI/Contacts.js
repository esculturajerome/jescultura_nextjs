import Class from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={Class.contact}>
      <p className={Class.title}>Contact</p>
      <ul>
        <li>
          Email:
          <a
            href="mailto:esculturajerome@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            esculturajerome@gmail.com
          </a>
        </li>
        <li>
          Github:
          <a
            href="https://github.com/esculturajerome"
            rel="noopener noreferrer"
            target="_blank"
          >
            esculturajerome
          </a>
        </li>
        <li>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/jeromeescultura/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Jerome Escultura
          </a>
        </li>
        <li>
          Whatsapp:
          <a
            href="https://api.whatsapp.com/send?phone=+639566754237"
            rel="noopener noreferrer"
            target="_blank"
          >
            +639566754237
          </a>
        </li>
      </ul>
    </div>
  );
}
