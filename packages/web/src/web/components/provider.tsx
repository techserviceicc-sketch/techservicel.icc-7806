import { LanguageProvider } from "../lib/i18n";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
