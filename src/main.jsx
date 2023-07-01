import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.config";

import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes} from "react-router-dom";

import ErrorPage from "./pages/error.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register";
import Dashboard from "./pages/admin/dashboard";
import AdminLayout from "./pages/admin-layout";
import ApiariesList from "./pages/admin/apiaries/apiaries-list";
import AddApiary from "./pages/admin/apiaries/add-apiary";
import EditApiary from "./pages/admin/apiaries/edit-apiary";

import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import AddBeeHive from "./pages/admin/beehives/add-beehive";
import ViewBeeHive from "./pages/admin/beehives/view-beehive";
import EditBeeHive from "./pages/admin/beehives/edit-beehive";
import BeeHivesList from "./pages/admin/beehives/beehives-list";
import ApiariesLayout from "./pages/admin/apiaries/apiaries-layout";
import BeeHivesLayout from "./pages/admin/beehives/beehives-layout";
import ViewApiary from "./pages/admin/apiaries/view-apiary";
import {ApolloProvider} from "@apollo/client";
import {client} from "./network/clients.js";
import {QueryClient, QueryClientProvider} from 'react-query'

import Cookies from 'js-cookie'

const queryClient = new QueryClient()

const ProtectedRoute = (
    {
        isLoggedIn,
        redirectPath = '/login',
        children,
    }) => {
    if (!Cookies.get('authToken')) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorPage />}>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route
                path="/dashboard"
                element={
                <ProtectedRoute isLoggedIn={Cookies.get('authToken')}>
                    <AdminLayout/>
                </ProtectedRoute>}
                errorElement={<ErrorPage/>}
            >
                <Route index element={<Dashboard/>}></Route>
                <Route path="/dashboard/apiaries" element={<ApiariesLayout/>}>
                    <Route index element={<ApiariesList/>}></Route>
                    <Route path="add" element={<AddApiary/>}> </Route>,
                    <Route path="view/:id" element={<ViewApiary/>}> </Route>,
                    <Route path="edit/:id" element={<EditApiary/>}> </Route>,
                </Route>
                <Route path="/dashboard/beehives" element={<BeeHivesLayout/>}>
                    <Route index element={<BeeHivesList/>}></Route>
                    <Route path="add" element={<AddBeeHive/>}> </Route>,
                    <Route path="view/:id" element={<ViewBeeHive/>}> </Route>,
                    <Route path="edit/:id" element={<EditBeeHive/>}> </Route>,
                </Route>
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ApolloProvider client={client}>
                <Provider store={configureStore}>
                    <RouterProvider router={router}/>
                </Provider>
            </ApolloProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
