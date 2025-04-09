import React, { useState } from 'react';

const DotGrid = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <div
            className="dot-grid"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`dot ${hovered ? 'move-to-second' : ''}`}></div>
            <div className={`dot empty-dot ${hovered ? 'move-to-third' : ''}`}></div>
            <div className={`dot ${hovered ? 'move-to-first' : ''}`}></div>
            <div className="dot"></div>
        </div>
    );
};

export default DotGrid;
