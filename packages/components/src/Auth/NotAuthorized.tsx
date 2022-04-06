import React from "react";
import { Navigate } from "react-router-dom";

export const NotAuthorized: React.FC = () => <Navigate replace to="/login" />;
