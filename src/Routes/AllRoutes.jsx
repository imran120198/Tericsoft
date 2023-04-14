import React from "react";
import Navbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cycling from "../Pages/Cycling";
import Featured from "../Pages/Featured";
import Armoury from "../Pages/Armoury";
import Aquatics from "../Pages/Aquatics";
import Equestrain from "../Pages/Equestrain";
import Extreme from "../Pages/Extreme";
import Golf from "../Pages/Golf";
import Gymnastics from "../Pages/Gymnastics";
import LakeAndSea from "../Pages/LakeAndSea";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cycling />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/armoury" element={<Armoury />} />
        <Route path="/aquatics" element={<Aquatics />} />
        <Route path="/equestrian" element={<Equestrain />} />
        <Route path="/extreme" element={<Extreme />} />
        <Route path="/golf" element={<Golf />} />
        <Route path="/gymnastics" element={<Gymnastics />} />
        <Route path="/lakeandSea" element={<LakeAndSea />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
