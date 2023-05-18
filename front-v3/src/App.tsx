import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "./components/layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
