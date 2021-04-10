import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <h1>SIDEBAR</h1>
      <ul>
        <Link href="/Website">Website</Link>
        <Link href="/Application">Application</Link>
        <Link href="/Design">Design</Link>
      </ul>
      ;
    </div>
  );
}
