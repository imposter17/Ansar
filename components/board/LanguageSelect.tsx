'use client';

import { useI18n } from '@/components/providers/I18nProvider';

export function LanguageSelect() {
  const { language, setLanguage } = useI18n();
  return (
    <select
      className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2 text-sm"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="ur">اردو</option>
      <option value="es">Español</option>
    </select>
  );
}
