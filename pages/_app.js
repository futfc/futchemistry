import '../styles/globals.css'
import Script from "next/script";

function MyApp({Component, pageProps}) {
	return <>
		<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-WEHGX10QVT"/>
		<Script id="google-analytics" strategy="afterInteractive">
			{`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-WEHGX10QVT');
			`}
		</Script>
		<Component {...pageProps} />
	</>
}

export default MyApp
