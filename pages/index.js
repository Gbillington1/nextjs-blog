import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (

    <section className="">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="text-xl mx-auto">
          <p>
            Hello, I'm <span className="font-semibold">Graham</span>. I'm a student and a software engineer. I'm currently learning <a className="text-blue-600 hover:underline" href="https://reactjs.org">React.js</a> and <a className="text-blue-600  hover:underline" href="https://nextjs.org">Next.js</a>. Check out my <a className="text-blue-600 hover:underline" href="https://tiktok.com/@grahambillington">TikTok</a>!
          </p>
          <p className="py-4">
            Check out <Link href="/posts/first-post"><a className="text-blue-600 hover:underline">this link</a></Link> that I am building to test things, lol.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a className="text-blue-600 hover:underline" href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </section>

  )
}
