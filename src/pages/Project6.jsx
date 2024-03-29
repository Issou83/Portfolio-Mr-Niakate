import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons'
import Project from '../components/Project';

const Project4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={5} />
                <Buttons left={"/projet-5"} right={"/projet-7"}/>
            </div>
        </main>
    );
};

export default Project4;