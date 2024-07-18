import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';

const BlurHashImage = ({ src, blurhash, width, height, alt, className }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div style={{ position: 'relative', width, height }} className={className}>
            {!imageLoaded && (
                <Blurhash
                    hash={blurhash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}
            <img
                src={src}
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? 'block' : 'none', width, height }}
                alt={alt}
            />
        </div>
    );
};

export default BlurHashImage;
