import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './category/Category';
import CourseItem from './CourseItem';
const Course = () => {
    const totalCourses = useLoaderData();
    return (
        <div className="flex flex-col md:flex-row justify-between ">
            <div className=" md:basis-1/4  border-r-2 border-b-2 md:border-b-0 p-4 md:h-[100vh] border-red-400">
                <h2 className='text-center border-b font-bold py-4 '>All Course Category</h2>
                <ul className='flex text-center flex-col gap-5 md:ml-5 mt-10 justify-center'>
                    {
                        totalCourses.map(categories => <Category
                            categories={categories}
                            key={categories.id}
                        ></Category>)
                    }
                </ul>

            </div>
            <div className="md:basis-3/4 mx-5	">
                <h2 className='text-center py-3 font-bold uppercase'>Our Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-base-100 shadow-xl p-3">
                    {
                        totalCourses.map(course =>
                            <CourseItem
                                key={course.id}
                                course={course}
                            ></CourseItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;