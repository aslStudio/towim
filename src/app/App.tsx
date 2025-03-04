import React, {useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"

import {useTelegram} from "@/shared/lib/hooks/useTelegram"
import {AuthProvider} from "@/shared/lib/providers/AuthProvider"
import {KeyboardOffsetProvider} from "@/shared/lib/providers"

import { RouterView } from './router'

function App() {
    const { expand, disableVerticalSwipes, openFullScreen } = useTelegram()

    useEffect(() => {
        expand()
        openFullScreen()
        disableVerticalSwipes()
    });

  return (
      <KeyboardOffsetProvider>
          <AuthProvider>
              <BrowserRouter>
                  <RouterView />
              </BrowserRouter>
          </AuthProvider>
      </KeyboardOffsetProvider>
  );
}

export default App;
