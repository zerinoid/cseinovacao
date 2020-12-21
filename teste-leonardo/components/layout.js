import Head from "next/head"
import Link from "next/link"

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                {/* <link rel="icon" href="/icon.png" /> */}
                <meta name="description" content="Teste petz" />
            </Head>
            <nav>
                <img alt="" src="/LOGO.svg" />
            </nav>
            <main>{children}</main>
        </div>
    )
}
