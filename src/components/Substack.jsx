import React from 'react'

const Substack = () => {
    return (
        <div className='flex flex-col justify-content p-40'>
            <div className='flex flex-col'>
                <h1 className="text-black dark:text-white text-3xl md:text-5xl">
                    Read My Laura Dev Substack
                </h1>
            </div>
            <div className='flex flex-col justify-content'>
                <p className='flex flex-col text-black dark:text-white text-xl'>Welcome to my Substack, where I dive deep into the world of coding and programming with clear, practical lessons designed for learners at all levels. Whether you’re just starting out or looking to sharpen your skills, my weekly posts break down complex concepts into easy-to-understand tutorials, real-world examples, and hands-on projects. Join a growing community of passionate developers and elevate your programming journey with tips, best practices, and insights that help you build confidence and code smarter every day.</p>
            </div>
            <div className='flex flex-col justify-content'>
                <Link
                    aria-label="Go to Learn More about Laura Dev"
                    to="skills"
                    smooth={true}
                    duration={500}
                    href="https://lauradev1.substack.com/?utm_campaign=profile&utm_medium=profile-page"
                >
                    <button
                        aria-label="read my substack"
                        className="flex flex-row items-center justify-center space-x-2 bg-white animate-bounce rounded-full text-black text-xl cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
                    >
                        <p>Read My Substack</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Substack