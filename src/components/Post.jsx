import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const params = useParams();
  const status = 200;
  const navigate = useNavigate();

  if (status === 404) {
    <Navigate to='/not found' />; // Navigate can be used for redirection
  }

  const onClick = () => {
    navigate('/about'); // Navigation using events
  };
  // ex:- http://domain/:id/:name
  return (
    <div>
      <h2>Post: {params.id}</h2>
      <h2>Name: {params.name}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default Post;
