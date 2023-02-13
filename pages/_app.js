import { wrapper } from "../store/store"
import { Provider } from "react-redux"
import WebsiteLayout from "../layouts/WebsiteLayout"
import "../styles/globals.css"
import "../styles/ckeditor-tailwind-reset.css"
import "react-toastify/dist/ReactToastify.css"
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ToastContainer, toast } from "react-toastify"

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <WebsiteLayout>
        <ToastContainer />
        <Component toast={toast} {...pageProps} />
      </WebsiteLayout>
    </Provider>
  );
}
