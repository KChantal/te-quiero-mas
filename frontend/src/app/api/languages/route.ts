import { NextResponse } from 'next/server';
import { addLanguageToDb } from '../../db/actions';

export const POST = async (req: Request) => {
  try {
    const { lang_code, lang_name, phrase } = await req.json();
    if (!lang_code || !lang_name || !phrase) {
      return NextResponse.json(
        { error: 'lang_code, lang_name, and phrase are required' },
        { status: 400 }
      );
    }

    const created = await addLanguageToDb({ lang_code, lang_name, phrase });

    return NextResponse.json(created, { status: 201 });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: (e as Error)?.message ?? 'Oops! Failed to add language!' },
      { status: 500 }
    );
  }
};
