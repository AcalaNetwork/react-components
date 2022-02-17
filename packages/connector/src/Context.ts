import React from "react";

import { ConnectorContextData } from "./types";

export const Context = React.createContext<ConnectorContextData>(
  {} as unknown as ConnectorContextData
);

export const Provider = Context.Provider;

export const Consumer = Context.Consumer;
