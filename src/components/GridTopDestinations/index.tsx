import React from 'react';

interface GridItemProps {
  src: string;
  title: string;
  subtitle: string;
  colSpan: string;
  rowSpan: string;
}

const GridItem: React.FC<GridItemProps> = ({ src, title, subtitle, colSpan, rowSpan }) => {
  return (
    <div className={`relative ${colSpan} ${rowSpan}`}>
      <img src={src} alt={title} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold text-shadow">{title}</h3>
        <p className="text-sm italic text-shadow">{subtitle}</p>
      </div>
    </div>
  );
};

export default GridItem;
