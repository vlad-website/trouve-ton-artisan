import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);