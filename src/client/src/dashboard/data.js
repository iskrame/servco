import React from "react";
import Person from "@material-ui/icons/Person";
import TableChart from "@material-ui/icons/TableChart";
import People from "@material-ui/icons/People";
import AccessTime from "@material-ui/icons/AccessTime";
import Settings from "@material-ui/icons/Settings";
export const primaryMenus = {
  menus: [
    { text: "DashBoard", icon: <TableChart /> },
    { text: "Perfil", icon: <Person /> },
    { text: "Colaboradores", icon: <People />, link: "/collaborators" },
    { text: "Reportes", icon: <AccessTime />, link: "/reports" },
    { text: "Configuraciones", icon: <Settings />, link: "/settings" }
  ]
};
