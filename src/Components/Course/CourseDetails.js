import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf'



const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, name, img, total_view } = courseDetails;
  const ref = React.createRef();



  return (
    <div className='flex justify-center md:w-3/4  mx-3 md:mx-auto mt-10 '
      ref={ref}>

      <div className="card  lg:card-side bg-slate-300 md:p-10 shadow-xl"

      >
        <figure><img
          className='image-full w-96'
          src={img} alt="Album" /></figure>
        <div className="card-body">
          <div className='flex justify-center'>
            <ReactToPdf targetRef={ref} x={.5} y={.5} scale={0.5} filename="joldi-nam.pdf">
              {({ toPdf }) => (

                <button onClick={toPdf} className='btn btn-outline gap-2 shadow-lg hover:bg-slate-600 hover:border-0'> Download pdf <FaFilePdf className='text-2xl'> </FaFilePdf></button>
              )}
            </ReactToPdf>

            {/* 
            <button



              className='btn btn-outline gap-2 shadow-lg hover:bg-slate-600 hover:border-0'> Download pdf <FaFilePdf className='text-2xl'> </FaFilePdf></button> */}


          </div>
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <div className="card-actions justify-between items-center">
            <div>
              <p> Total enrolled : {total_view}</p>
            </div>
            <div>

            </div>
            <Link to={`/checkout/${id}`}>
              <button className="btn bg-slate-600 border-0 hover:bg-slate-900 text-white">Get Premium</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;