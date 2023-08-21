import Link from "next/link"
import getFormattedDate from "../../../../lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "../../../../lib/posts"
import { notFound }from "next/navigation"

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}


export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 text-slate-300 mx-auto">
            <h1 className="text-3xl text-white font-black mt-5 mb-0">{title}</h1>
            <p className="mt-0 font-bold">
                {pubDate}
            </p>
            <article>
                <section className="mt-4 text-lg" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p className="mt-6">
                    <Link className='text-lg font-bold underline' href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}