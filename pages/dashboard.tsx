import Biodata from "@/components/forms/Biodata";

const dashboard = () => {
  return (
    <div className="w-screen flex">
      <div className="w-1/6 h-screen border-r border-gray-600"></div>
      <div className="w-full p-8">
        <Biodata />
      </div>
    </div>
  );
};

export default dashboard;
