import Image from "next/image";

export default function Profile() {
    return (
        <div className='py-8 mx-auto border border-gray-400 border-dotted border-t-0'>
            <div className='relative w-35 h-35 mx-auto'>
                <Image src="/jamesliuprofilepicture.png"
                alt="James Liu Profile Picture"
                className='object-cover object-[center_10%] rounded-lg'
                fill
                />
            </div>
            <div className='flex flex-col items-center mt-4 gap-1'>
                <h1 className='text-3xl font-bold'>James Liu</h1>
                <h3 className='text-xl font-medium text-txt-color'>Full Stack Developer</h3>
            </div>
        </div>
    )
}