import React, { PropsWithChildren } from "react";
import { ConnectorConfigs } from "./types";
declare function Connector<T = "promise">({ configs, children, }: PropsWithChildren<{
    configs: ConnectorConfigs;
}>): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Connector>;
export default _default;
