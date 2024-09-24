import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";

import {useTelegram} from "@/shared/lib/hooks/useTelegram";

import { RouterView } from './router'

function App() {
    const { expand } = useTelegram()

    useEffect(() => {
        expand()
    });

  return (
    <BrowserRouter>
      <RouterView/>
    </BrowserRouter>
  );
}

export default App;
