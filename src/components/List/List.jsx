import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = async () => {

  const response = await fetch('http://localhost:3000/api/getData',{
    next:{
      tags:["list"]
    },
    cache:"no-store"
  });
  const data = await response.json();
  return (
    <div className='w-4/6 mx-auto bg-slate-300'>
      <div>
        {data?.map((element) => (
          <ListItem key={element._id} id={element._id} name={element.name} description={element.description} />
        ))}
      </div>
    </div>
  );
};

export default List;
