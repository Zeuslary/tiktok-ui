import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = ({ src, alt, fallback = images.noImg, ...props }, ref) => {
    const [altImg, setAltImg] = useState('');

    return (
        <img
            src={altImg || src || fallback}
            alt={alt}
            {...props}
            onError={(e) => setAltImg(fallback)}
            ref={ref}
        />
    );
};

export default forwardRef(Image);
