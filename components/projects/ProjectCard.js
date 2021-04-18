import Link from "next/link";

import style from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  const { name, id, category, coverImage } = props;
  // const convertedDate = new Date(dateCreated).toLocaleDateString("en-US", {
  //   month: "long",
  //   year: "numeric",
  // });
  // const nameTrim = name.replace(/\s/g, "");

  return (
    <div className={style.project}>
      <Link href={`${category}/${id}`} className={style.project}>
        <div className={style.picture}>
          <div className={style.content}>
            <div className={style.text}>
              <h2>{name}</h2>
              <ul>
                <li>{category}</li>
              </ul>
            </div>
          </div>
          <img src={coverImage} alt={name} className={style.img} />
        </div>
      </Link>
    </div>
  );
}
