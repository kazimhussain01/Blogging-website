import Image from 'next/image'
import Posts from './component/Posts'

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center text-white'>
        Hello and Welcome &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className='font-bold'>Kazim Hussain</span>.
        </span>
      </p>
      <Posts/> 
    </main>
    )
}
