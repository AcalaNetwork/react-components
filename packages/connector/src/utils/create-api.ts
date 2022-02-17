import { Dispatch } from "react";

import { ApiPromise, ApiRx, WsProvider } from "@polkadot/api";

import { ActionType } from "../reducer";
import { ConnectorNetwork, NetworkConfigs } from "../types";

export const initRxApi = (
  name: ConnectorNetwork,
  configs: NetworkConfigs,
  dispatch: Dispatch<ActionType>
) => {
  const { endposints, options } = configs;

  // create ws provider
  const provider = new WsProvider(Object.values(endposints));

  dispatch({
    type: "update-network-status",
    data: { network: name, status: "connecting" },
  });

  ApiRx.create({
    ...options,
    provider,
  }).subscribe({
    error: () => {
      dispatch({
        type: "update-network-status",
        data: { network: name, status: "failed" },
      });
    },
    next: (api: ApiRx) => {
      dispatch({ type: "update-network-api", data: { network: name, api } });
      dispatch({
        type: "update-network-status",
        data: { network: name, status: "ready" },
      });
    },
  });
};

export const initPromiseApi = async (
  name: ConnectorNetwork,
  configs: NetworkConfigs,
  dispatch: Dispatch<ActionType>
) => {
  const { endposints, options } = configs;

  // create ws provider
  const provider = new WsProvider(Object.values(endposints));

  dispatch({
    type: "update-network-status",
    data: { network: name, status: "connecting" },
  });

  try {
    const api = await ApiPromise.create({
      ...options,
      provider,
    });

    await api.isReady;

    dispatch({ type: "update-network-api", data: { network: name, api } });
    dispatch({
      type: "update-network-status",
      data: { network: name, status: "ready" },
    });
  } catch (e) {
    dispatch({
      type: "update-network-status",
      data: { network: name, status: "failed" },
    });
  }
};
