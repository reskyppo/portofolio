type Props = { skill: string };
const CardSkills = ({ skill }: Props) => {
  return (
    <div className="w-36 h-24 rounded-lg border-t-4 border-l-4 border-r-2 border-b-2 border-black flex justify-center items-center text-xl font-medium">
      {skill}
    </div>
  );
};

export default CardSkills;
