import WMM from "../assets/WMM.png";
import OurMission from "../assets/background_login.jpg";
import "../Styles/Pages/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/login",
        data: { email, password },
      });
      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      navigate(`/Dashboard/${response.data.userId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="pd">
        <img
          src={OurMission}
          alt="une image en fond qui montre des sportifs"
          className="background-image"
        />
      </div>
      <div className="hover-login">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="Your Company" src={WMM} className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
              Se connecter a votre compte
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={signin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Adresse mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-200"
                  >
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <Link to="/forgotPassword">
                      <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Mot de passe oublié ?
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Se connecter
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Pas inscrit?{" "}
              <Link to="/Registration">
                <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Creer un compte
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
