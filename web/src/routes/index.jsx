import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Rotas com Sidebar */}
            <Route element={<Layout mode={mode} toggleMode={toggleMode} />}>
                <Route path="/" element={<Outlet />} />
                <Route path="/landing-page"/>
                <Route path="/curriculo"/>
                <Route path="/design"/>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}