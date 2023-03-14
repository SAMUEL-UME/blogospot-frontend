import "@/styles/globals.css";
import MainLayout from "../src/layout/main";
import { Provider } from "react-redux";
import store from "@/src/Redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}
