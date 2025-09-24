import createSupabaseServerClient from '../../../../lib/supabase/server';
import { PhraseInLanguage } from '../../../types';

// TODO: unused so far
export async function singInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  return result;
}

export const getLanguagesFromDb = async (): Promise<PhraseInLanguage[]> => {
  const supabase = await createSupabaseServerClient();
  const { data: languages, error } = await supabase
    .from('languages')
    .select('*');

  console.log('supabase data: ', languages);

  if (error) throw error;
  return languages ?? [];
};
