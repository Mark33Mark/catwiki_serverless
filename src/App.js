import { Routes, Route } from "react-router-dom";

import Startup from "./pages/Startup";
import Landing from "./pages/Landing";
import BreedInfo from "./pages/BreedInfo";
import NoMatch from "./pages/NoMatch";

const App = () => {

  return (
    <Routes>
        <Route path="/" element={ <Startup/>} />
        <Route path="api" element={<Landing/>} />
        <Route path=":name" element={<BreedInfo/>} />
        <Route element={<NoMatch/>} />
    </Routes>
  );
};

export default App;
