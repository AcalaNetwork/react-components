import { Dispatch } from "react";
import { ActionType } from "../reducer";
import { ConnectorNetwork, NetworkConfigs } from "../types";
export declare const useConnector: (networks: Record<ConnectorNetwork, NetworkConfigs>, dispatch: Dispatch<ActionType>) => void;
