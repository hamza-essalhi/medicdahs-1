import React from 'react'

export default function Loading() {
    return (
        <div role="status" className="animate-pulse flex-1 flex-col loading mx-3 my-2 flex backdrop-blur-sm p-4 items-center justify-center max-sm:min-w-full max-sm:m-0 max-sm:mt-3 min-w-max">

            <svg class="w-100px max-sm:w-50px mt-10 max-sm:mt-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <form className="row flex flex-1 flex-col p-4 items-center justify-center w-full mt-4 max-sm:p-1">
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-20% mb-4"></div>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-72 mb-4"></div>
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-20% mb-4"></div>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-72 mb-4"></div>
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-20% mb-4"></div>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-72 mb-4"></div>
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-20% mb-4"></div>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-72 mb-4"></div>
                </div>
                <div className='w-full flex gap-3 p-3 max-sm:text-exsm items-center'>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-20% mb-4"></div>
                    <div class="max-sm:h-7 h-10 bg-gray-400 rounded-md dark:bg-gray-700 w-72 mb-4"></div>
                </div>
                

            </form>
        </div>
    )
}
