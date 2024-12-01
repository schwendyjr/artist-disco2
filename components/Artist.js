import React from 'react';
import Album from './Album';

const Artist = () => {
    const artist = {
        name: 'Taylor Swift',
        image: 'https://media.npr.org/assets/img/2014/10/30/ts_photo_pr0500_0878_hirescrop-copy-1c18fc94f85d107d07d172a09685d53004d25857.jpg?s=1100&c=85&f=jpeg', // Hardcoded URL
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
        <div className="artist">
            <h1>{artist.name}'s Albums</h1>
            <img src={artist.image} alt={artist.name} className="artist-image" />
            {artist.albums.map(album => (
                <Album key={album.title} album={album} />
            ))}
        </div>
    );
};

export default Artist;
