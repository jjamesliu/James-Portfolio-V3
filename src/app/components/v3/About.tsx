
export default function About() {
    return (
        <div className='flex flex-col gap-4 border border-gray-300 border-t-0 py-6 px-15'>

                <h1 className='font-semibold font-mono text-center'>ABOUT</h1>
                <p className='text-txt-color text-sm md:text-[1rem] sm:text-center text-center max-w-150 mx-auto'>
                    I&apos;m a software engineer passionate about building scalable, user-focused applications that make an impact.
                    I&apos;m always looking to connect with others so don&apos;t hesitate to reach out to me.
                    <span> Currently building <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 bg-clip-text text-transparent animate-gradient">SwiftyMail</span> @ UCLA.</span>
                </p>

        </div>
    )
}