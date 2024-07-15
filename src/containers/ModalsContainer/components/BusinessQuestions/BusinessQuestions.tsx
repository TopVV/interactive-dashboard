import { Typography } from "@/components";

type BusinessQuestionsProps = {
  questionsData: {
    name: string;
    description: string;
  }[];
};

const BusinessQuestions = ({ questionsData }: BusinessQuestionsProps) => {
  return (
    <div>
      <Typography variant="h5">Business Questions</Typography>
      <div className="hover: mt-4 flex flex-row flex-wrap justify-between gap-y-6">
        {questionsData.map(({ name, description }) => (
          <div
            key={name}
            className="w-[45%] rounded-lg p-4 hover:cursor-pointer hover:bg-slate-100"
          >
            <Typography variant="body1">{name}</Typography>
            <Typography variant="subtitle2">{description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessQuestions;
