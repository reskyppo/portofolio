const CardContent = ({ src, title, detail }) => {
  return (
    <div class="p-4 md:w-1/2 md:mb-0 mb-6 flex flex-col text-center items-center">
      <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <img src={src} alt={title} />
      </div>
      <div class="flex-grow">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
          {title}
        </h2>
        <p class="leading-relaxed text-base">{detail}</p>
      </div>
    </div>
  );
};

export default CardContent;
