import "../Styles/Pages/News.scss";

const News = () => {
  return (
    <>
      <div id="main-container">
        <div>
          <h1>Nouveauté</h1>
        </div>

        <ul>
          <li>
            <h2>intelligence artificiel</h2>
            <p>
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
          <li>
            <h3>Temporalité</h3>
          </li>
          <li>
            <p>
              ajout d'un calendrier pour suivre sa regularité ( taux de
              desertion ;) ).
            </p>
          </li>
          <li>
            <h4>Mobile</h4>
            <p>
              develloppement des application sur l'app store et le play Store.
            </p>
          </li>
          <li>
            <h5>Elargissement dans horizons</h5>
            <p>
              ajout de la possibilité d'etre utilisé sur les montres connectée.{" "}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
