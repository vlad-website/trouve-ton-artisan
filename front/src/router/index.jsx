import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages vides
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
]);

export default router;