import React from "react";
import { useParams } from "react-router-dom";

import Bab1 from "./Bab1";
import Bab2 from "./Bab2";
import Bab3 from "./Bab3";
import Bab4 from "./Bab4";
import Bab5 from "./Bab5";
import Bab6 from "./Bab6";
import Bab7 from "./Bab7";
import Bab8 from "./Bab8";

export default function BabWrapper() {
  const { id } = useParams();

  const pages = {
    1: <Bab1 />,
    2: <Bab2 />,
    3: <Bab3 />,
    4: <Bab4 />,
    5: <Bab5 />,
    6: <Bab6 />,
    7: <Bab7 />,
    8: <Bab8 />,
  };

  return pages[id] || <div>Bab tidak ditemukan.</div>;
}
