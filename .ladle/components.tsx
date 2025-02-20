import type { GlobalProvider } from '@ladle/react'
import "../src/index.css";
import * as React from 'react';

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <div className="docs-container">
    <div className='docs-main'>
      {children}
    </div>
  </div>
)