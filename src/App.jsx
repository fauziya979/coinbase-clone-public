import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Learn from "./pages/Learn";
import AssetDetail from "./pages/AssetDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Individuals from "./pages/Individuals";
import Businesses from "./pages/Businesses";
import Institutions from "./pages/Institutions";
import Developers from "./pages/Developers";
import Company from "./pages/Company";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/individuals" element={<Individuals />} />
      <Route path="/businesses" element={<Businesses />} />
      <Route path="/institutions" element={<Institutions />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/company" element={<Company />} />
      <Route path="/assets/:symbol" element={<AssetDetail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;


