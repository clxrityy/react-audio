import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-monolithic";
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import type { GlobalProvider } from "@ladle/react";
import "../src/index.css";
import * as React from 'react';

const engine = new Styletron();

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <StyletronProvider value={engine}>
    <BaseProvider
      theme={{
        ...globalState.theme === "dark" ? DarkTheme : LightTheme,
        direction: globalState.rtl ? "rtl" : "ltr",
      }}
    >
      <div className="docs-container">
        <div className='docs-main'>
          {children}
        </div>
      </div>
    </BaseProvider>
  </StyletronProvider>
)