import React from 'react';
import pic from '../images/services/resized/Food.png';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoViewTry = () => {
    return (
        <PhotoProvider>
            <PhotoView src="../images/services/resized/Food.png">
                <img src="/src/images/services/resized/Food.png-thumbnail.jpg" alt="" />
            </PhotoView>
        </PhotoProvider>
    );
};

export default PhotoViewTry;
