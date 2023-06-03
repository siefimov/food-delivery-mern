import React from 'react';

const Input = ({ type, id, title, value, onChange, name }) => {
  return (
    <div className='flex flex-col p-5'>
      <label htmlFor={id} className='mb-2'>
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className='rounded-md border p-1 outline-none focus:ring text-center '
      />
    </div>
  );
};

export default Input;
