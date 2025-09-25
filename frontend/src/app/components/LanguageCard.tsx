"use client"
import { FC, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PhraseInLanguage } from "../../types";

type Props = {
  languages: PhraseInLanguage[];
};

const LanguageCard: FC<Props> = (props) => {
  const { languages } = props;
  const [currIndex, setCurrIndex] = useState(0);

  console.log('languages: ', languages);

  const handleGoToNextLanguage = () => {
    // Display next language in array
    console.log('Show me the next language!');

    if (!languages.length) return;
    setCurrIndex((prev) => (prev + 1) % languages.length);
  }

  const current = languages[currIndex];

  if (!languages.length) return (
    <div className="w-full flex justify-center">
      <h2 className="text-foreground font-bold h-10 px-6 flex items-center">
        No languages found....!
      </h2>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-sm md:max-w-md rounded-2xl bg-foreground text-background shadow-xl p-6 flex flex-col items-center gap-3">
        <p className="text-xs md:text-sm opacity-80">Language</p>
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          {current.lang_name || 'Español'}
        </h2>
        <p className="text-xs md:text-sm opacity-80">I love you</p>
        <h2 className="text-xl md:text-2xl font-bold text-center">
          {current.phrase || 'Te quiero'}
        </h2>
      </div>

      <button
        className="group mt-6 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:scale-95 transition"
        aria-label="Next"
        onClick={handleGoToNextLanguage}
      >
        <span className="inline-flex rounded-full group-hover:scale-120 transition">
          <FaArrowAltCircleRight size={48} />
        </span>
      </button>
    </div>
  );
};

export default LanguageCard;