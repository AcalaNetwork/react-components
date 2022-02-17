import React, { PropsWithChildren, useReducer } from "react";

import { ApiTypes } from "@polkadot/api-base/types";

import { useConnector } from "./hooks/useConnector";
import { Provider } from "./Context";
import { reducer } from "./reducer";
import { ConnectorConfigs, ConnectorContextData } from "./types";

function Connector<T extends ApiTypes = "promise">({
  configs,
  children,
}: PropsWithChildren<{ configs: ConnectorConfigs }>) {
  const [state, dispatch] = useReducer(
    reducer,
    configs as ConnectorContextData<T>
  );

  useConnector(configs.networks, dispatch);

  return <Provider value={state}>{children}</Provider>;
}

export default React.memo(Connector);
