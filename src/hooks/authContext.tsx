import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import api from "../pages/api/api"
import { sleep } from "./hooks";

type authContextType = {
    user: {};
    authenticate: () => void;
    logout: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
};

const authContextDefaultValues: authContextType = {
    user: null,
    authenticate: () => { },
    logout: () => { },
    isLoading: true,
    isAuthenticated: null
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setAuthenticated] = useState(null)

    const logout = () => {
        Cookies.remove("token_seras");
        setUser(null);
        setIsLoading(false)
        router.push("/login");
        sleep(500).then(()=>setAuthenticated(false))
    };

    const authenticate = async () => {
        const token = Cookies.get('token_seras')
        sleep(1000).then(()=>setAuthenticated(true))
        if (token && token !== undefined) {
            sleep(1000).then(()=>setAuthenticated(true))
            if (window.location.pathname === '/login') router.push('/')
            // api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            // await api.get('admin/me')
            //     .then(result => {
            //         if (result.data.code === 200) {
            //             setAuthenticated(true)
            //             if (window.location.pathname === '/login') router.push('/')
            //         }
            //         setIsLoading(false)
            //     })
            //     .catch(error => {
            //         setAuthenticated(false)
            //         Cookies.remove("token_seras")
            //         router.push('/login')
            //     })
        }
        setIsLoading(false)
    };

    useEffect(() => {
        const token = Cookies.get("token_seras");
        if (!token) return;
        authenticate();
    }, []);

    useEffect(() => {
        const Component = children.type;
        if (!Component.requiresAuth) return;

        if (isAuthenticated) return;
        const token = Cookies.get("token_seras");
        if (!token) {
            return logout();
        }

        if (!isLoading) {
            authenticate();
        }
    }, [isLoading, isAuthenticated, children.type.requiresAuth]);

    return (
        <AuthContext.Provider value={{ user, authenticate, logout, isLoading, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);