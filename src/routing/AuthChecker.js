import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

export const AuthChecker = ({authToken, Component}) => {
    let location = useLocation();

    return authToken ? <Component /> : <Navigate to="/" state={{ from: location }} />;
};
