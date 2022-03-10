import { ApiPromise, ApiRx } from "@polkadot/api";
import { ApiOptions, ApiTypes } from "@polkadot/api/types";

export type NetworkTag = "primary" | "parachain";

export type EndpointsConfigs = string[] | Record<string, string>;

export interface NetworkConfigs {
  readonly tag?: NetworkTag;
  readonly endpoints: EndpointsConfigs;
  readonly options?: ApiOptions;
  readonly apiType?: ApiTypes;
  defaultEndpoint?: string;
}

/** default set acala and polkadot, should rewrite through .d.ts */
export enum ConnectorNetwork {
  "ACALA",
  "POLKADOT",
  "KARURA",
  "KUSAMA",
  "STATEMINE",
}

export interface ConnectorConfigs {
  networks: {
    [key in ConnectorNetwork]: NetworkConfigs;
  };
}

export type NetworkConnectStatus = "init" | "connecting" | "ready" | "failed";

export interface NetworkData<T extends ApiTypes> extends NetworkConfigs {
  api: T extends "promise" ? ApiPromise : ApiRx;
  status: NetworkConnectStatus;
}

export interface ConnectorContextData<T extends ApiTypes = "promise"> {
  networks: {
    [key in ConnectorNetwork]?: NetworkData<T>;
  };
}
