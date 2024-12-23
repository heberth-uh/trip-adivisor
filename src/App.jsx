import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Styles
import './App.css'
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlacesPage from "./pages/PlacesPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage"
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: `/:type/results/location/:locationId`,
        element: <PlacesPage />
    },
    {
        path: `/:type/get-details/:placeId`,
        element: <PlaceDetailsPage />
    }
])

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
