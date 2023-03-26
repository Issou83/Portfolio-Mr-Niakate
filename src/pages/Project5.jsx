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
                <Project projectNumber={4} />
                <Buttons left={"/projet-4"} right={"/projet-6"}/>
            </div>
        </main>
    );
};

export default Project4;