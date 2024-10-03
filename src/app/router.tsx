import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import { Splash } from "@/pages/Splash/Splash";
import { Main } from "@/pages/Main/Main"
import { Networking } from "@/pages/Networking";

export const RouterView = React.memo(() => {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fade-out");
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
                <Route path={'/'} element={<Splash />} />
                <Route path={'/main'} element={<Main />} />
                <Route path={'/networking'} element={<Networking />} />
            </Routes>
        </div>
    )
})
