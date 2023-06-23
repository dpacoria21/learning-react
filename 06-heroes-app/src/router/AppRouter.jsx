import { Route, Routes } from "react-router-dom";

import { HeroesRoutes} from '../heroes';
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
// import { MarvelPage } from "../heroes/pages/MarvelPage"
// import { DcPage } from "../heroes/pages/DcPage"
// import { LoginPage } from "../auth/pages/LoginPage"

export const AppRouter = () => {
    return (
        <>
            
            <Routes>



                {/* Segunda forma de hacerlo
                    <Route path="/login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage />}/>
                        </Routes>
                    </PublicRoute>
                }/> */}

                {/* Forma mas corta */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }/>

                {/* <Route path="/login" element={<LoginPage />}/> */}
                {/* <Route path="/*" element={<HeroesRoutes />}/> */}

            </Routes>
        </>
    )
}