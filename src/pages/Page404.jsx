import React from 'react';

const Page404 = ({location}) => {
  return (
    <div className="d-flex align-items-center">
        <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
    );
}

export default Page404;