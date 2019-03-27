import React from "react";
import Person from "@material-ui/icons/Person";
import TableChart from "@material-ui/icons/TableChart";
import People from "@material-ui/icons/People";
import AccessTime from "@material-ui/icons/AccessTime";
import Settings from "@material-ui/icons/Settings";
import {clientLenguaje} from  "../translate/clientTranslate";

let profile;
let collaborators ;
let reports ;
let conf;
let leng ;
export  function ChangeLenguaje (lenguaje){
  
  leng= clientLenguaje(lenguaje);
  profile = leng.profile;
  collaborators = leng.collaborators;
  reports = leng.reports;
  conf = leng.conf;
  const primaryMenus = {
    menus: [
      { text: "Dashboard", icon: <TableChart  /> },
      { text: profile, icon: <Person /> },
      { text: collaborators, icon: <People />, link: "/collaborators" },
      { text: reports, icon: <AccessTime />, link: "/reports" },
      { text: conf, icon: <Settings />, link: "/settings" }
    ]
  };
  return primaryMenus;
}
