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
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <h2
        className="flex items-center justify-center text-foreground gap-2 font-bold text-base sm:text-base h-10 sm:h-12 px-6 sm:px-5 sm:w-auto"
      >
        No languages found....!
      </h2>
    </div> 
  );

  return (
    <div className="grid grid-rows-[auto_1fr] items-center w-full max-w-3xl">
      <div className="w-[26rem] rounded-2xl bg-foreground text-background shadow-xl/70 shadow-secondary p-6 flex flex-col items-center gap-3 mx-auto mb-2">
        <p className="text-sm opacity-80">Language</p>
        <h2 className="text-2xl font-semibold">
          {current.lang_name || 'Español'} 
        </h2>
        <p className="text-sm opacity-80">I love you</p>
        <h2 className="text-2xl font-bold text-shadow-sm text-shadow-lighter/50">{current.phrase || 'Te quiero'}</h2>
      </div>

      <button
        className="group mt-6 p-2 rounded-full focus:outline-none"
        aria-label="Next"
        onClick={handleGoToNextLanguage}
      >
        <span
          className="
            inline-flex rounded-full
            group-focus-visible:ring-2 group-focus-visible:ring-violet-500 group-focus-visible:ring-offset-2
            transition-transform group-hover:scale-115 group-active:scale-95
          "
        >
          <FaArrowAltCircleRight size={48} />
        </span>
      </button>
    </div>
  );
};

export default LanguageCard;