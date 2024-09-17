import "../Styles/Pages/Soon.scss";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const News = () => {
  return (
    <>
      <Header />
      <div id="main-container">
        <ul>
          <li id="news-ia">
            <h2 className="flex-start-title-soonPage">
              intelligence artificiel
            </h2>
            <p className="flex-start-p-soonPage">
              Un coach virtuel intelligent qui analyse les données globales de
              l'utilisateur ainsi que les performances sur chaque exercice, afin
              de fournir un accompagnement personnalisé. Un formulaire intégré
              permet de mesurer le niveau de fatigue et le ressenti après chaque
              séance, permettant à l'IA d'exploiter toutes les données
              disponibles pour déterminer si l'athlète est en situation de
              surentraînement ou s'il ne s'entraîne pas avec suffisamment
              d'intensité. Ces analyses sont ajustées en fonction des objectifs
              spécifiques de chacun, garantissant une approche individualisée et
              optimale.
            </p>
          </li>
          <li className="flex-end-title-soonPage">
            <h3>Temporalité</h3>
          </li>
          <li>
            <p className="flex-end-p-soonPage">
              L'ajout d'un calendrier est la nouveauté parfaite pour te donner
              un suivi précis de ta régularité. Tu sauras exactement quand tu as
              déserté une séance (et ouais, on sait que ça arrive), ou bien si
              tu es en mode machine ! Un outil essentiel pour ne pas lâcher
              prise.
            </p>
          </li>
          <li>
            <h4 className="flex-start-title-soonPage">Mobile</h4>
            <p className="flex-start-p-soonPage">
              Le développement des applications sur l'App Store et le Play Store
              est en route, et bientôt tu pourras tout gérer directement depuis
              ton smartphone. Plus besoin de te prendre la tête, tout sera au
              bout de tes doigts pour un accès rapide et simple, que tu sois au
              boulot ou à la salle !
            </p>
          </li>
          <li className="flex-end-title-soonPage">
            <h5>Élargissement des horizons</h5>
          </li>
          <li>
            <p className="flex-end-p-soonPage">
              Tu pourras bientôt utiliser l'appli sur ta montre connectée.
              Imagine, tu lances tes séances, suis tes stats et reçois des
              notifications direct sur ton poignet. Pas besoin de sortir ton tel
              à chaque fois, c’est l'avenir, et on y arrive vite !
            </p>
          </li>
        </ul>
      </div>
      <div id="footer-news">
        <Footer />
      </div>
    </>
  );
};

export default News;
