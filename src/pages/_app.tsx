import { type AppType } from "next/app";
import { Roboto } from "next/font/google";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
