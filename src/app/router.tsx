import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import { Splash } from "@/pages/Splash/Splash";
import { Main } from "@/pages/Main/Main"
import { Networking } from "@/pages/Networking";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { RouterPathes } from "@/shared/lib/types";

export const RouterView = React.memo(() => {
    const location = useLocation();

    const { BackButton } = useTelegram();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fade-out");

        if ([RouterPathes.AUTH, RouterPathes.MAIN].includes(location.pathname as RouterPathes)) {
            BackButton.hide()
        } else {
            BackButton.show()
        }
    }, [location, displayLocation]);

    return (
        <div
            className={transitionStage}
            onAnimationEnd={() => {
                if (transitionStage === 'fade-out') {
                    setTransitionStage('fade-in')
                    setDisplayLocation(location)
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path={RouterPathes.AUTH} element={<Splash />} />
                <Route path={RouterPathes.MAIN} element={<Main />} />
                <Route path={RouterPathes.NETWORKING} element={<Networking />} />
            </Routes>
        </div>
    )
})
