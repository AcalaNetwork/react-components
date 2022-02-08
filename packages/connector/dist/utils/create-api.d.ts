import { Dispatch } from "react";
import { ActionType } from "../reducer";
import { ConnectorNetwork, NetworkConfigs } from "../types";
export declare const initRxApi: (name: ConnectorNetwork, configs: NetworkConfigs, dispatch: Dispatch<ActionType>) => void;
export declare const initPromiseApi: (name: ConnectorNetwork, configs: NetworkConfigs, dispatch: Dispatch<ActionType>) => Promise<void>;
