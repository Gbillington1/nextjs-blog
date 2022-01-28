import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts';

export default function FirstPost({ allPostsData }) {

    const post = allPostsData[0];

    return (
        <Layout>

            <Head>
                <title className="text-2xl font-bold">First Post</title>
            </Head>

            <h1 className="text-xl">{post.title}</h1>  
            <p>unfinished</p>
        
        </Layout>

    );
}

export async function getStaticProps() {

    const allPostsData = getSortedPostsData();
    console.log(allPostsData);
    return {
        props: {
            allPostsData
        }
    }

}