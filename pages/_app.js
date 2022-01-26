import "../styles/global.css";

export default function App({ Component, pageProps }) {
    return <Component className="box-border" {...pageProps} />
}