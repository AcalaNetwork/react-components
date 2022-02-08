import React, { PropsWithChildren, useReducer } from "react";

import { ConnectorConfigs, ConnectorContextData } from "./types";

import { Provider } from "./Context";
import { reducer } from "./reducer";
import { useConnector } from "./hooks/useConnector";

function Connector<T = "promise">({
	configs,
	children,
}: PropsWithChildren<{ configs: ConnectorConfigs }>) {
	const [state, dispatch] = useReducer(
		reducer,
		configs as ConnectorContextData
	);

	useConnector(configs.networks, dispatch);

	return <Provider value={state}>{children}</Provider>;
}

export default React.memo(Connector);
