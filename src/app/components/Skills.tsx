export default function Skills() {
    const allSkills = ["React", "TypeScript", "Javascript", "TailwindCSS", 
        "Next.js", "HTML/CSS", "Python", "Java", "C", "Git"]

    return (
        <div className='flex flex-col gap-2 border border-gray-400 border-t-0 border-dotted py-6 px-15'>
            <h1 className='font-mono font-semibold mb-2'>SKILLS</h1>

            <div className='flex flex-row md:gap-x-3 md:gap-y-3 gap-x-2 gap-y-2 flex-wrap justify-center'>
                {allSkills.map((skill, index) => (
                <div key={index}
                className='bg-[rgb(240,240,240)] w-fit border border-gray-300 px-2 py-2 rounded-lg
                hover:scale-110 duration-300 hover:bg-green-400 text-txt-color hover:text-gray-800'>
                    <p className='text-xs md:text-[1rem]'>{skill}</p>
                </div>
                )
                )}
            </div>

        </div>
    )
}