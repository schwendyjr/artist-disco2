import React, { useState } from 'react';

const Album = ({ album }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="album">
            <div onClick={() => setIsOpen(!isOpen)} className="album-header">
                {album.title} {isOpen ? '-' : '+'}
            </div>
            {isOpen && (
                <ul>
                    {album.tracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Album;
