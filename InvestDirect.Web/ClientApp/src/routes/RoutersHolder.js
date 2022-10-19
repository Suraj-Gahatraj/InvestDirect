import React from 'react'
import { routes } from "../constants/routes";
import Home from '../Pages/Home/Index'


    export const CLIENT_ROUTES = [
        {
          key:"/",
          path: routes.homePage,
          Element:<Home/>,
        },
       
      ];
 