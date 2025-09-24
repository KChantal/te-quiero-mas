export type PhraseInLanguage = {
  id: number;
  lang_code: string;
  lang_name: string;
  phrase: string;
};
export type AddLanguage = Omit<PhraseInLanguage, 'id'>;

export type LangInfo = {
  languages: PhraseInLanguage[];
};
