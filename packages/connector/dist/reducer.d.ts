import { ApiPromise, ApiRx } from "@polkadot/api";
import { ApiTypes } from "@polkadot/api/types";
import { ConnectorContextData, ConnectorNetwork, NetworkConnectStatus } from "./types";
export declare type ActionType = {
    type: "update-network-status";
    data: {
        network: ConnectorNetwork;
        status: NetworkConnectStatus;
    };
} | {
    type: 'update-network-api';
    data: {
        network: ConnectorNetwork;
        api: ApiPromise | ApiRx;
    };
};
export declare const reducer: <T extends ApiTypes = "promise">(state: ConnectorContextData<T>, action: ActionType) => ConnectorContextData<T>;
