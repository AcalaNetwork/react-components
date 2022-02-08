import { ApiOptions, ApiTypes } from "@polkadot/api/types";
import { ApiPromise, ApiRx } from "@polkadot/api";
export declare type NetworkTag = "primary" | "parachain";
export declare type EndpointsConfigs = string[] | Record<string, string>;
export interface NetworkConfigs {
    readonly tag?: NetworkTag;
    readonly endposints: EndpointsConfigs;
    readonly options?: ApiOptions;
    readonly apiType?: ApiTypes;
}
/** default set acala and polkadot, should rewrite through .d.ts */
export declare enum ConnectorNetwork {
    'acala' = 0,
    'polkadot' = 1
}
export interface ConnectorConfigs {
    networks: {
        [key in ConnectorNetwork]: NetworkConfigs;
    };
}
export declare type NetworkConnectStatus = 'init' | 'connecting' | 'ready' | 'failed';
export interface NetworkData<T extends ApiTypes> extends NetworkConfigs {
    api: T extends 'promise' ? ApiPromise : ApiRx;
    status: NetworkConnectStatus;
}
export interface ConnectorContextData<T extends ApiTypes = 'promise'> {
    networks: {
        [key in ConnectorNetwork]: NetworkData<T>;
    };
}
