"use client"
import { useEffect, useState } from "react";
import { FaLanguage } from "react-icons/fa6";
import { getLanguagesFromDb } from "./db/actions";
import { PhraseInLanguage } from "../types";
import LanguageCard from "./components/LanguageCard";
import TitleHeader from "./components/TitleHeader";

 
export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [languages, setLanguages] = useState<PhraseInLanguage[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getLanguagesFromDb();
      setLanguages(data);
      setIsLoading(false);
    })();
  }, []);

  const handleStartLearning = async () => {
    console.log('Now learning many I Love Yous');
    setShowCard(true);
  }

  if (loading) return (
    <main className="flex flex-col gap-[32px] items-center sm:items-center flex-grow">
      <TitleHeader />
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h2
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-bold text-base sm:text-base h-10 sm:h-12 px-6 sm:px-5 sm:w-auto"
        >
          Loading Languages....
        </h2>
      </div>      
    </main>
  );

  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-0 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-center flex-grow">
        <TitleHeader />

        {!showCard ? (
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-bold text-base sm:text-base h-10 sm:h-12 px-6 sm:px-5 sm:w-auto"
              rel="noopener noreferrer"
              onClick={handleStartLearning}
            >
              Start Learning
            </button>
          </div>
        ) : (
          <LanguageCard languages={languages} />
        )}
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center mt-auto">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-semibold text-sm sm:text-base h-8 sm:h-8 px-2 sm:px-5 sm:w-auto"
          href="/add"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLanguage size={28} />
          Add a new language
        </a>
      </footer>
    </div>
  );
}
