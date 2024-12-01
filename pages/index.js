import React from 'react';
import Artist from '../components/Artist';

const Home = () => {
    const artist = {
        name: 'Taylor Swift',
        image: 'https://link-to-taylor-swift-image.com',
        albums: [
            {
                title: 'Taylor Swift',
                tracks: ['Tim McGraw', 'Picture to Burn', 'Teardrops on My Guitar', 'A Place in This World']
            },
            {
                title: 'Fearless',
                tracks: ['Fearless', 'Fifteen', 'Love Story', 'Hey Stephen']
            }
        ]
    };

    return (
        <div className="app">
            <h1>MyTunes</h1>
            <Artist artist={artist} />
        </div>
    );
};

export default Home;
