'use client'

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AddLanguage } from '../..//types';

const AddLanguagePage: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<AddLanguage>({
    lang_code: '',
    lang_name: '',
    phrase: '',
  });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/languages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `Request failed (${res.status})`);
      }

      router.push('/');
      router.refresh();
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        alert(err.message ?? 'Something went wrong.');
      } else {
        alert('Something went wrong.');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Add a New Language</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="lang_code"
          value={formData.lang_code}
          onChange={handleChange}
          placeholder="Language Code (e.g. ES, FR)"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name="lang_name"
          value={formData.lang_name}
          onChange={handleChange}
          placeholder="Language Name (e.g. Español)"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name="phrase"
          value={formData.phrase}
          onChange={handleChange}
          placeholder="Phrase (e.g. Te quiero)"
          className="border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-foreground text-background font-semibold py-2 px-4 rounded hover:opacity-80"
        >
          {submitting ? 'Saving…' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default AddLanguagePage;