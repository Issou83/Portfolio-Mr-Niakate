import React from 'react';
import { Link } from 'react-router-dom';

const GithubProject = (link) => {
    console.log({link});
    return (
       <>
            <Link  to={link} />
            </>
    );
};

export default GithubProject;