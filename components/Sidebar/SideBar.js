import Link from "next/link";
import Contacts from "../UI/Contacts";
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
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/Website">- Website</Link>
          </li>
          <li>
            <Link href="/Design">- Design</Link>
          </li>
          <li>
            <Link href="/Application">- Application</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Contacts />
    </div>
  );
}
