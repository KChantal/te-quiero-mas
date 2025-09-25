import { FC } from "react";
import { TbHearts } from "react-icons/tb"

const TitleHeader: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2 pb-8 m-2">
      <TbHearts size={48} />
      <h1 className="text-4xl font-extrabold text-center">
        Te Quiero Más
      </h1>
    </div>
  )
};

export default TitleHeader;