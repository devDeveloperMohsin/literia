import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import WebsiteLayout from "../layouts/WebsiteLayout";
import "../styles/globals.css";
import "../styles/ckeditor-tailwind-reset.css";
import "react-toastify/dist/ReactToastify.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useRouter } from "next/router";

export default function App({ Component, ...rest }) {
  const router = useRouter();
  const [useAdminLayout, setUseAdminLayout] = useState(false);

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  useEffect(() => {
    const routePath = router.pathname;
    if (routePath.search(/admin/) === 1) {
      setUseAdminLayout(true);
    } else {
      setUseAdminLayout(false);
    }
  },[router]);

  const layout = "Website";

  return (
    <Provider store={store}>
      <ToastContainer />
      {useAdminLayout ? (
        <AdminLayout>
          <Component toast={toast} {...pageProps} />
        </AdminLayout>
      ) : (
        <WebsiteLayout>
          <Component toast={toast} {...pageProps} />
        </WebsiteLayout>
      )}
    </Provider>
  );
}
