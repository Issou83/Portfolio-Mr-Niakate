import React from 'react';
import Buttons from '../components/Buttons';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from "framer-motion";
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div>
            <Mouse />
            <div className="home">
            <Navigation />
            <Logo/>
            <SocialNetwork />
            <div className="home-main">
                <div className="main-content">
                    <motion.h1 
                    drag 
                    onDragEnd 
                    dragConstraints={{
                        left:-250,
                        right: 950,
                        top: -200,
                        bottom: 250
                    }}>NK.WebDev</motion.h1>
                    <motion.h2 drag 
                    onDragEnd 
                    dragConstraints={{
                        left:-250,
                        right: 950,
                        top: -200,
                        bottom: 250
                    }}>
                        <DynamicText />
                    </motion.h2>
                </div>
            </div>
            <Buttons right={"/projet-1"} />
            </div>
        </div>
    );
};

export default Home;