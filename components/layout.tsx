import { Container } from "react-bootstrap"
import Head from "next/head"
import TopMenu from "./topmenu"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Hoggard Wagner Collection</title>
        <meta
          name="description"
          content="Documenting the art collection of Barry Hoggard and James Wagner"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopMenu />
      <Container>{children}</Container>
    </>
  )
}
