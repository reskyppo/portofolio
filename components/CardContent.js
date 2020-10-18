const CardContent = ({ src, title, detail }) => {
  return (
    <div className="p-4 mx-auto md:w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center ">
      <div className="w-20 h-20 inline-flex items-center justify-center   mb-5 flex-shrink-0">
        <img src={src} alt={title} />
      </div>
      <div className="flex-grow">
        <h2 className="text-dodger-blue-600 text-2xl title-font font-bold mb-3">
          {title}
        </h2>
        <p className="leading-relaxed text-base font-medium">{detail}</p>
      </div>
    </div>
  );
};

export default CardContent;
