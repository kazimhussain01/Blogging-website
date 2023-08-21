import Image from "next/image"

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-gray-400 bg-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 "
      src="/kazim.jpg" alt="kazim-image"
      width={220}
      height={220}
      priority={true}
      />
    </section>
  )
}

export default MyProfilePic
