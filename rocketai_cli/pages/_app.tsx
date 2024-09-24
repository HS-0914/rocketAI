import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import localfont from "next/font/local"

const pretendard = localfont({
  src: "./fonts/PretendardVariable.woff2",
})

function App({ Component, pageProps }: AppProps) {


  return (
    <div className={pretendard.className}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </div>
    

  );
}

export default App;