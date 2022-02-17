import { ApiPromise, ApiRx } from "@polkadot/api";
import { ApiTypes } from "@polkadot/api/types";

import {
  ConnectorContextData,
  ConnectorNetwork,
  NetworkConnectStatus,
} from "./types";

export type ActionType =
  | {
      type: "update-network-status";
      data: { network: ConnectorNetwork; status: NetworkConnectStatus };
    }
  | {
      type: "update-network-api";
      data: { network: ConnectorNetwork; api: ApiPromise | ApiRx };
    };

export const reducer = <T extends ApiTypes = "promise">(
  state: ConnectorContextData<T>,
  action: ActionType
): ConnectorContextData<T> => {
  switch (action.type) {
    case "update-network-status": {
      const { network, status } = action.data;
      const config = state.networks[network];

      if (config) {
        config["status"] = status;
      }

      return {
        ...state,
        networks: {
          ...state.networks,
          [network]: config,
        },
      };
    }
    case "update-network-api": {
      const { network, api } = action.data;
      const config = state.networks[network];

      if (config) {
        config["api"] = api as T extends "promise" ? ApiPromise : ApiRx;
      }

      return {
        ...state,
        networks: {
          ...state.networks,
          [network]: config,
        },
      };
    }
    default: {
      return state;
    }
  }
};
