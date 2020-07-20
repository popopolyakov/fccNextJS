import '../styles/global.sass'
import Home from './index'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (<>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" />
        </Head>
        <Component {...pageProps} />
    </>)
}