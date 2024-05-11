import Home from "../src/pages/Home"
import Directors from "../src/pages/Directors"
import Actors from "../src/pages/Actors"
import Movie from "../src/pages/Movie"
import ErrorPage from "./pages/ErrorPage"

const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
   },
   {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
   },
   
   {
    path: "/movies/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
   }
  ];

export default routes;