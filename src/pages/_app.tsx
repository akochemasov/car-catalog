import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//обертка - не нужно использовать Provider
export default wrapper.withRedux(App);
