import ActiveSectionContextProvider from "@/context/active-section-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ActiveSectionContextProvider>
        <Component {...pageProps} />
      </ActiveSectionContextProvider>
    </div>
  );
}
