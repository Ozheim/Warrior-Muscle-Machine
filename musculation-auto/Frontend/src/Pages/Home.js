import Videobackground from "../components/Videobackground";
import { Link } from "react-router-dom";
import bgvideo from "../assets/bgvideo.mp4";
import Accordion from "../components/Accordion";
import "../Styles/Pages/Home.scss";
import Header from "../components/Header";

export default function Example() {
  return (
    <div className="test">
      <Videobackground videoSrc={bgvideo} />
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-32 sm:pb-48 lg:pb-36">
          <div className="text-center pt-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl">
              Suivez et automatisez votre progression en musculation
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-100">
              Optimisez vos entraînements et atteignez vos objectifs plus
              rapidement grâce à notre application innovante. Suivez vos
              progrès, personnalisez vos routines et laissez notre technologie
              vous guider vers une meilleure performance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/Login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Je me lance !
              </Link>
              <Link to="/About">
                <a className="text-sm font-semibold leading-6 text-gray-400">
                  en apprendre plus <span aria-hidden="true">→</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
    </div>
  );
}
