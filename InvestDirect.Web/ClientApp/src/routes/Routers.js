import React from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom";
import  {CLIENT_ROUTES } from "./Routesholder";


export default function Routers() {
 
  return (
   
<BrowserRouter>
        <Routes>
        {CLIENT_ROUTES.map((x) => (
            <Route
           key={x.key}
              path={x.path}
              element={x.Element}
           ></Route>
           ))}
         
        </Routes>
      </BrowserRouter>
   
  )
}
