import { Link } from "react-router-dom";
import "../Styles/Pages/Resetpassword.scss";
import Backgroundimage from "../assets/Reset_Password.png";

export default function forgotPassword() {
  return (
    <div class="main-container">
      <img
        src={Backgroundimage}
        alt="une image en fond qui montre un sportif devant un ordinateur affichant reset password"
        className="background-image-rs"
      />
      <section>
        <div class="max-w-lg mx-auto my-10 bg-gray-800 p-8 rounded-xl shadow shadow-slate-300 text-white">
          <h1 class="text-4xl font-medium">Mise à jour du mot de passe</h1>
          <p class="text-white pt-5">
            Remplissez le formulaire pour réinitialiser le mot de passe
          </p>

          <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
              <label for="email">
                <p class="font-medium text-white pb-2">Adresse Email</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="adresse-Email@site.fr"
                />
              </label>

              <button class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <span>Reinitialiser le mot de passe</span>
              </button>
              <Link to="/Registration">
                <p class="text-center">
                  Pas de compte?{" "}
                  <a class="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                    <span>Creer un compte maintenant</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}