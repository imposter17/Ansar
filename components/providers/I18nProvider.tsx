'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const dictionary: Record<string, Record<string, string>> = {
  en: { feed: 'Help Feed', create: 'Create Post', dashboard: 'Dashboard', admin: 'Admin' },
  ar: { feed: 'لوحة المساعدة', create: 'إنشاء منشور', dashboard: 'لوحة التحكم', admin: 'الإدارة' },
  ur: { feed: 'ہیلپ فیڈ', create: 'پوسٹ بنائیں', dashboard: 'ڈیش بورڈ', admin: 'ایڈمن' },
  es: { feed: 'Tablero de ayuda', create: 'Crear publicación', dashboard: 'Panel', admin: 'Admin' }
};

interface I18nValue {
  language: string;
  setLanguage: (value: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => dictionary[language]?.[key] ?? dictionary.en[key] ?? key
    }),
    [language]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
}
