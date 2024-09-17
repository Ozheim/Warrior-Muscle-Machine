import React, { Component } from "react";
import "../Styles/Pages/About.scss";
import Header from "../components/Header";
import firstPicture from "../assets/Our-mission-piucture-aboutus.jpg";
import secondPicture from "../assets/inspiration_picture.jpg";
import thirdPicture from "../assets/Challenge_picture.jpg";
import fourthPicture from "../assets/success_picture.jpg";
import Footer from "../components/Footer";
class About extends Component {
  render() {
    return (
      <div>
        <div class="text-center p-8">
          <Header />

          <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Pourquoi nous choisir ?
          </h2>

          <div class="flex flex-wrap items-center mt-20 text-left text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={firstPicture}
                alt="gem"
                class="inline-block rounded shadow-lg border border-merino-400 picture"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Notre mission{" "}
              </h3>
              <p class="sm:text-lg mt-6">
                Chez Warrior Muscle Machine, notre mission est de transformer la
                manière dont les passionnés de musculation et de fitness suivent
                et optimisent leurs performances. Nous croyons fermement que
                chaque athlète, qu'il soit débutant ou expérimenté, mérite les
                meilleurs outils pour atteindre ses objectifs et repousser ses
                limites.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-20 text-left text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={secondPicture}
                alt="project members"
                class="inline-block rounded shadow-lg border border-merino-400 picture"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                L'Inspiration Derrière Warrior Muscle Machine
              </h3>
              <p class="sm:text-lg mt-6">
                Pourquoi Warrior Muscle Machine : L'idée de Warrior Muscle
                Machine est née de ma propre frustration avec les méthodes
                traditionnelles de suivi des progrès en musculation. En
                combinant ma passion pour le fitness et mes compétences en
                développement, j'ai voulu créer une solution qui simplifie la
                vie des athlètes.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-20 text-left  text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={thirdPicture}
                alt="editor"
                class="inline-block rounded shadow-lg border border-merino-400 picture"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Les Défis
              </h3>
              <p class="sm:text-lg mt-6">
                Développer Warrior Muscle Machine seul n'a pas été facile. J'ai
                dû surmonter de nombreux obstacles techniques et trouver des
                solutions innovantes pour offrir une plateforme performante et
                intuitive.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-20 text-left text-center">
            <div class="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={fourthPicture}
                alt="bulk editing"
                class="inline-block rounded shadow-lg border border-merino-400 picture"
              />
            </div>
            <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Les réussites
              </h3>
              <p class="sm:text-lg mt-6">
                Malgré les défis, je suis fier d'avoir construit une plateforme
                qui aide déjà de nombreux utilisateurs à atteindre leurs
                objectifs de fitness. Voir les progrès de mes utilisateurs est
                ma plus grande satisfaction.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
