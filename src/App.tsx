import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./root/routes";

const App: React.FC = () => {

  const routes = useRoutes();

  return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
  );
}

export default App;
