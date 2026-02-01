"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

interface I18nContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = "glitchsnap-language";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage and browser language on mount
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    let targetLang: Language = "en";

    if (stored && (stored === "en" || stored === "ko")) {
      targetLang = stored;
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ko")) {
        targetLang = "ko";
      }
    }

    if (targetLang !== language) {
      // eslint-disable-next-line
      setLanguageState(targetLang);
    }
    setMounted(true);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === "en" ? "ko" : "en";
    setLanguage(newLang);
  }, [language, setLanguage]);

  const t = translations[language];

  // Prevent hydration mismatch by rendering with default language until mounted
  if (!mounted) {
    return (
      <I18nContext.Provider
        value={{
          language: "en",
          t: translations.en,
          setLanguage,
          toggleLanguage,
        }}
      >
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
