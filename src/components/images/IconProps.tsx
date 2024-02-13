interface IconProps {
    src: string;
    alt: string;
  }
  
  const IconProps: React.FC<IconProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} className="h-5 w-5" />;
  };
  
  export {IconProps}