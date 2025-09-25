import { FaLanguage } from "react-icons/fa";
import Link from 'next/link';

const AddNewLanguage = () => {
  const addLanguageText = 'Add a new language';

  return (
    <div>
      <Link
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-semibold text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 sm:w-auto"
        href="/add"
      >
        <FaLanguage size={28} />
        {addLanguageText}
      </Link>
    </div>
  );
};

export default AddNewLanguage;