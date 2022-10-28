import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  const { id, img, name, title } = course;
  return (
    <div className="card gap-4 bg-slate-200 shadow-xl shadow-slate-400">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-[160px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{title ? title.slice(0, 80) : title}</p>
        <div className="card-actions">
          <Link to={`/course/${id}`}>
            <button className="btn btn-outline hover:bg-slate-600 hover:border-0">See Details</button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default CourseItem;