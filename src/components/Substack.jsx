import React from 'react'

const Substack = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center p-10 lg:p-40 font-jost text-black dark:text-white">
            <div className="flex flex-col w-full md:p-20 lg:w-1/2 lg:pr-10 space-y-10">
                <div>
                    <h1 className="text-black dark:text-white text-3xl md:text-5xl">
                        Read My Laura Dev Substack
                    </h1>
                </div>
                <p>This is my substack</p>
                <a href="https://lauradev1.substack.com/?utm_campaign=profile&utm_medium=profile-page">Laura Dev Substack</a>
            </div>
        </div>
    )
}

export default Substack