import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = "Graham Billington"
export const siteTitle = "Billington's Blog"

export default function Layout({ children, home }) {
    return (

        <div className="container mx-auto max-w-xl p-6">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    name="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content="siteTitle" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className="flex flex-col items-center">
                {home ? (
                    <>

                        <Image
                            priority
                            src="/images/proPic.jpg"
                            className="rounded-full"
                            height="144"
                            width="144"
                            alt={name}
                        />
                        <h1 className="text-5xl py-8 font-bold tracking-tighter">{name}</h1>

                    </>
                ) : (
                    <>

                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/propic.jpg"
                                    className="rounded-full"
                                    height="144"
                                    width="144"
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className="text-lg my-4">
                            <Link href="/">
                                <a className="text-inherit">{name}</a>
                            </Link>
                        </h2>

                    </>
                )}
            </header>
            <main>{children}</main>
            {
                !home && (
                    <div className="my-12">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}