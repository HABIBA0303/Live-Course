import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="bg-gray-200 ">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-20 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-3xl font-bold leading-none sm:text-5xl">Welcome to
                        <span className="text-indigo-400"> Live Course Online </span>Platform
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Start here if you are new to programming or new to Android development. These courses show you how to build Android apps using best practices recommended by Google. No programming experience needed.</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
                        <Link to='/courses'>
                            <button className="px-8 py-3 m-2 text-lg  rounded  bg-green-700 text-white">Our Courses</button>
                        </Link>
                    </div>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    86K
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Downloads</p>
                            <p className="text-gray-700">
                                Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
                                Amazon. They’re very famous and very high-maintenance effort.
                            </p>
                        </div>
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    1.3K
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Subscribers</p>
                            <p className="text-gray-700">
                                One day, after filming a scene deep in the rainforest, the three
                                actors and their agents decide to head back to home base by foot.
                            </p>
                        </div>
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    52M
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Cookies</p>
                            <p className="text-gray-700">
                                Suddenly, they come to a large river. On the riverbank, they find a
                                small rowboat, but it’s only big enough to hold two of them at one
                                time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;