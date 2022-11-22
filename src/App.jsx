import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes";
import Pesudo from "./admin/index";

function App() {
  return (
    <div className="App">
      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} element={<Pesudo>{<route.components />}</Pesudo>} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
