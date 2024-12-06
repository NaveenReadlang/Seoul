import reactDOM from "react-dom/client";
import proApp from "./proApp"

const pro = reactDOM.createRoot(
    document.getElementById('programme')
);
pro.render(
    <proApp/>
);