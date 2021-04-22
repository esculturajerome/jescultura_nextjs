import { Fragment } from "react";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/UI/AboutMe/AboutMe";
import ProfileBanner from "../../components/UI/ProfileBanner/ProfileBanner";

export default function About() {
  return (
    <Fragment>
      <Header />
      <ProfileBanner />
      <AboutMe />
    </Fragment>
  );
}
