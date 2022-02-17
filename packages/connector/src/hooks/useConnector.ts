import { Dispatch, useEffect, useRef, useState } from "react";

import { ActionType } from "../reducer";
import { ConnectorNetwork, NetworkConfigs } from "../types";
import { initPromiseApi, initRxApi } from "../utils/create-api";

function useCachedNetworkConfigs(
  network: Record<ConnectorNetwork, NetworkConfigs>
) {
  const cacheKey = useRef<string>("");
  const [cachedConfigs, updateCacheConfigs] =
    useState<Record<ConnectorNetwork, NetworkConfigs>>();

  useEffect(() => {
    const newCacheKey = Object.entries(network)
      .map(
        ([k, v]) =>
          `${k}-${JSON.stringify({ tag: v.tag, endpoints: v.endposints })}`
      )
      .join("-");

    if (newCacheKey !== cacheKey.current) {
      cacheKey.current = newCacheKey;
      updateCacheConfigs(network);
    }
  }, [network]);

  return cachedConfigs;
}

export const useConnector = (
  networks: Record<ConnectorNetwork, NetworkConfigs>,
  dispatch: Dispatch<ActionType>
) => {
  const cachedNetworks = useCachedNetworkConfigs(networks);

  useEffect(() => {
    if (!cachedNetworks) return;

    Object.entries(cachedNetworks).forEach(([name, config]) => {
      if (config.apiType && config.apiType === "rxjs") {
        initRxApi(name as unknown as ConnectorNetwork, config, dispatch);
      }

      initPromiseApi(name as unknown as ConnectorNetwork, config, dispatch);
    });
  }, [cachedNetworks]);
};
