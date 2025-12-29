import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import Home from "../pages/home/Home.jsx";
import CategorieList from "../pages/categories/CategorieList.jsx";
import ArtisanList from "../pages/artisans/ArtisanList.jsx";
import ArtisanDetail from "../pages/artisans/ArtisanDetail.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import PlaceholderPage from "../pages/PlaceholderPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "categories", element: <CategorieList /> },
            { path: "categories/:id", element: <ArtisanList /> },
            { path: "artisans/:id", element: <ArtisanDetail /> },
            { path: "recherche", element: <SearchPage /> },
            { path: "mentions-legales",
                element: (
                    <PlaceholderPage 
                        title="Mentions légales" 
                        subtitle="Cette page est en cours de construction." 
                        image="/images/page_construction.jpg"
                    />
                ),
            },
            { path: "donnees-personnelles",
                element: (
                    <PlaceholderPage 
                        title="Données personnelles" 
                        subtitle="Cette page est en cours de construction." 
                        image="/images/page_construction.jpg"
                    />
                ),
            },
            { path: "accessibilite",
                element: (
                    <PlaceholderPage 
                        title="Accessibilité" 
                        subtitle="Cette page est en cours de construction." 
                        image="/images/page_construction.jpg"
                    />
                ),
            },
            { path: "cookies",
                element: (
                    <PlaceholderPage 
                        title="Cookies" 
                        subtitle="Cette page est en cours de construction." 
                        image="/images/page_construction.jpg"
                    />
                ),
            },
            { path: "*",
                element: (
                    <PlaceholderPage 
                        title="404" 
                        subtitle="Oups... cette page n'existe pas." 
                        image="/images/404.jpg"
                    />
                ),
            },
        ],
    },
]);

export default router;