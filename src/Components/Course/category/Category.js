import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
  const { category, id } = categories;
  return (
    <li className='border py-2 bg-slate-100 rounded'>
      <Link to={`/course/${id}`}
      >
        {category}
      </Link>
    </li>
  );
};

export default Category;