import Head from 'next/head'
import { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/authContext';
import { NextPage } from "next";
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import '../styles/index.css'
import 'react-toastify/dist/ReactToastify.css';

type CustomPage = NextPage & {
    requiresAuth?: boolean;
    redirectUnauthenticatedTo?: string;
};
interface CustomAppProps extends Omit<AppProps, "Component"> {
    Component: CustomPage;
}

function MyApp({ Component, pageProps }: CustomAppProps) {
    return (
        <>
            <Head>
                <title>Seras Application</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* {Component.requiresAuth && (
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `if(!document.cookie || document.cookie.indexOf('token_seras') === -1)
            				{location.replace("/login?next=" +encodeURIComponent(location.pathname + location.search))}
            				else {document.documentElement.classList.add("render")}`,
                    }}
                />
            )} */}
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
            <ToastContainer />
        </>
    )
}

export default MyApp