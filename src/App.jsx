import { useLocation, useRoutes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Ophold from "./pages/ophold";
import Kontakt from "./pages/kontakt";
<<<<<<< HEAD
import ActivityPage from "./pages/activitypage/ActivityPage";
import MinListe from "./pages/minliste/MinListe";
import Weekendtur from "./pages/Weekendtur";
import Footer from "./components/footer/Footer";
=======
import Aktiviteter from "./pages/aktiviteter";
import MinListe from "./pages/min-liste";
import Footer from "./components/footer/Footer";
import Backoffice from "./pages/Backoffice";
import Login from "./pages/Login";
// importér flere sider...
>>>>>>> 4ec821c9554b10aee8bdf9abde2e09f0bf7f113e

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/ophold", element: <Ophold /> },
    { path: "/kontakt", element: <Kontakt /> },
<<<<<<< HEAD
    { path: "/activitypage", element: <ActivityPage /> },
    { path: "/minliste", element: <MinListe /> },
    { path: "/weekendtur", element: <Weekendtur /> },
    // { path: "/admin", element: <div>Backoffice</div> },
=======
    { path: "/aktiviteter", element: <Aktiviteter /> },
    { path: "/min-liste", element: <MinListe /> },
    {path: "/backoffice", element: <Backoffice />},
    { path: "/login", element: <Login/> }

>>>>>>> 4ec821c9554b10aee8bdf9abde2e09f0bf7f113e
  ]);

  return (
    <>
      <Nav isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <main>{routes}</main>
      {location.pathname !== "/backoffice" && <Footer />}
    </>
  );
}
