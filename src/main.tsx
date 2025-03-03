import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            colorWhite: '#FDFDFD',
            colorPrimary: '#DA5DA3',
            colorBgContainer: '#FDFDFD',
            colorText: '#010101',
            colorTextBase: '#010101',
            borderRadius: 6,
          },
          components: {
            Card: {
              colorBgContainer: '#DA5DA3',
            },
            Select: {
              colorBorder: 'transparent',
              controlOutline: 'none',
            },
          },
          hashed: false,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
