import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";

import Home from "../pages/home/Home.jsx";
import CategorieList from "../pages/categories/CategorieList.jsx";
import ArtisanList from "../pages/artisans/ArtisanList.jsx";
import ArtisanDetail from "../pages/artisans/ArtisanDetail.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "categories", element: <CategorieList /> },
            { path: "categories/:id", element: <ArtisanList /> },
            { path: "artisans/:id", element: <ArtisanDetail /> },
        ],
    },
]);

export default router;