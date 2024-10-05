import Gallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import '@/components/ImageGallery/ImageGallery.css';

const ImageGallery = (props) =>
{
    const imageList = props?.images?.map((image) =>
    {
        return {
            original: `/storage/resources/portafolio/${image}`,
            thumbnail: `/storage/resources/portafolio/${image}`
        }
    });

    return (
        <div>
            <Gallery items={imageList} showBullets showThumbnails={true} />
        </div>
    );
}

export default ImageGallery;
