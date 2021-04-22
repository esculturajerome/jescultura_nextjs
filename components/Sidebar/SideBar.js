import Link from "next/link";
import Contacts from "../UI/Contacts/Contacts";
import Class from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={Class.sidebar}>
      <Link href="/">
        <img
          className={Class.profile}
          src="/images/profile.jpeg"
          alt="Jerome Profile"
        />
      </Link>
      <p className={Class.desc}>A Minimalist tech enthusiast.</p>
      <Link href="/">
        <img className={Class.icon} src="/images/logo.svg" alt="Jerome Icon" />
      </Link>
      <nav>
        <ul>
          <Link href="/">
            <li>Work</li>
          </Link>
          <Link href="/Website">
            <li>- Website</li>
          </Link>
          <Link href="/Design">
            <li>- Design</li>
          </Link>
          <Link href="/Application">
            <li>- Application</li>
          </Link>
        </ul>
        <ul>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
      <Contacts />
    </div>
  );
}
