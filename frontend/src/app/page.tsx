"use client"
import { useEffect, useState } from "react";
import { getLanguagesFromDb } from "./db/actions";
import { PhraseInLanguage } from "../types";
import LanguageCard from "./components/LanguageCard";
import TitleHeader from "./components/TitleHeader";
import AddNewLanguage from "./components/AddNewLanguage";
import AudioPlayer from "./components/AudioPlayer";

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
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <TitleHeader />
      <div className="mt-6">
        <h2
          className="rounded-full bg-foreground text-background font-bold h-10 px-6 flex items-center"
        >
          Loading Languages....
        </h2>
      </div>      
    </main>
  );

  return (
    <div className="min-h-screen flex flex-col px-6">
      <main className="flex flex-col gap-[32px] items-center sm:items-center flex-grow">
        <div className="mx-auto w-full max-w-screen-sm md:max-w-screen-md px-4 py-10 flex flex-col items-center gap-8">
          <div className="w-full space-y-4">
            <TitleHeader />
            <AudioPlayer />
          </div>
        </div>

        {!showCard ? (
          <div className="w-full flex justify-center">
            <button
              className="rounded-full bg-foreground text-background font-bold h-12 px-6 hover:opacity-90 transition"
              onClick={handleStartLearning}
            >
              Start Learning
            </button>
          </div>
        ) : (
          <LanguageCard languages={languages} />
        )}
      </main>
       <footer className="mx-auto w-full max-w-screen-sm md:max-w-screen-md px-4 pb-10">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <AddNewLanguage />
        </div>
      </footer>
    </div>
  );
}
