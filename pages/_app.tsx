import Layout from "../components/layout"
import type { AppProps } from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from "react-bootstrap/SSRProvider"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
