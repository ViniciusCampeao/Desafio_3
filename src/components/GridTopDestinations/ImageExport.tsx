import React from 'react';
import GridItem from './index';

const ImageGrid: React.FC = () => {
  const images = [
    { src: 'https://mybucketomyproject.s3.us-east-2.amazonaws.com/ImageGrid1', title: '17,648 Travelers', subtitle: 'United Kingdom', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://mybucketomyproject.s3.us-east-2.amazonaws.com/ImageGrid1', title: 'Travelers', subtitle: 'United States', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://mybucketomyproject.s3.us-east-2.amazonaws.com/ImageGrid1', title: 'Travelers', subtitle: 'Canada', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://mybucketomyproject.s3.us-east-2.amazonaws.com/ImageGrid2.png', title: 'Travelers', subtitle: 'Australia', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://mybucketomyproject.s3.us-east-2.amazonaws.com/ImageGrid2.png', title: 'Travelers', subtitle: 'New Zealand', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'image6.jpg', title: 'Travelers', subtitle: 'South Africa', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'image7.jpg', title: 'Travelers', subtitle: 'United Kingdom', colSpan: 'col-span-2', rowSpan: 'row-span-3' },
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-4">
      {images.map((image, index) => (
        <GridItem
          key={index}
          src={image.src}
          title={image.title}
          subtitle={image.subtitle}
          colSpan={image.colSpan}
          rowSpan={image.rowSpan}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
