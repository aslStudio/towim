import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'

function App() {
    const { expand, disableVerticalSwipes } = useTelegram()

    useEffect(() => {
        expand()
        disableVerticalSwipes()
    });

  return (
    <BrowserRouter>
      <RouterView/>
    </BrowserRouter>
  );
}

export default App;
