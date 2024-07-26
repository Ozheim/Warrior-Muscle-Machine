import React, { Component } from "react";
import "../Styles/Pages/About.scss";
import Background_aboutus from "../assets/Background_aboutus.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="title-header">
            <h1>A propos de nous </h1>
          </div>
        </header>
        <body>
          <img src={Background_aboutus} alt="" className="background" />
          <div className="page-container">
            <section className="first-section">
              d
              <article>
                <h1>Notre mission</h1>
                <p>
                  Chez Warrior Muscle Machine, notre mission est de transformer
                  la manière dont les passionnés de musculation et de fitness
                  suivent et optimisent leurs performances. Nous croyons
                  fermement que chaque athlète, qu'il soit débutant ou
                  expérimenté, mérite les meilleurs outils pour atteindre ses
                  objectifs et repousser ses limites.
                </p>
                <h1>L'Inspiration Derrière Warrior Muscle Machine</h1>
                <p>
                  Pourquoi Warrior Muscle Machine : L'idée de Warrior Muscle
                  Machine est née de ma propre frustration avec les méthodes
                  traditionnelles de suivi des progrès en musculation. En
                  combinant ma passion pour le fitness et mes compétences en
                  développement, j'ai voulu créer une solution qui simplifie la
                  vie des athlètes.
                </p>
              </article>
              <article>
                <h1>Les Défis et Réussites</h1>
                <h2>Les défis :</h2>
                <p>
                  Développer Warrior Muscle Machine seul n'a pas été facile.
                  J'ai dû surmonter de nombreux obstacles techniques et trouver
                  des solutions innovantes pour offrir une plateforme
                  performante et intuitive.
                </p>
                <h2>Les réussites :</h2>
                <p>
                  Malgré les défis, je suis fier d'avoir construit une
                  plateforme qui aide déjà de nombreux utilisateurs à atteindre
                  leurs objectifs de fitness. Voir les progrès de mes
                  utilisateurs est ma plus grande satisfaction.
                </p>
              </article>
            </section>
            <section className="second-section">
              <article>
                <h1>Mon Engagement</h1>
                <h2>Engagement personnel :</h2>
                <p>
                  En tant que créateur unique de Warrior Muscle Machine, je
                  m'engage à continuer à améliorer la plateforme en écoutant les
                  retours des utilisateurs et en intégrant les dernières
                  innovations technologiques. Mon objectif est de fournir un
                  outil indispensable pour tous les passionnés de musculation.
                </p>
              </article>
              <article>
                <h1>Fonctionnalités Développées</h1>
                <h2>Fonctionnalités clés :</h2>
                <p>
                  Suivi de Performance : Suivez vos séances d'entraînement,
                  enregistrez vos progrès et analysez vos statistiques de
                  performance. Personnalisation des Programmes : Créez des
                  routines d'entraînement adaptées à vos objectifs et à vos
                  besoins spécifiques. Ressources Éducatives : Accédez à des
                  conseils d'experts, des vidéos d'exercices et des articles sur
                  la nutrition et la récupération. Communauté : Bien que je sois
                  le seul développeur, j'ai créé une communauté où les
                  utilisateurs peuvent se soutenir et partager leurs
                  expériences.
                </p>
              </article>
            </section>
          </div>
        </body>
      </div>
    );
  }
}

export default About;
