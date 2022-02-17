import { useContext } from "react";

import { Context } from "../Context";
import { ConnectorNetwork } from "..";

export const useApi = (name?: string) => {
  const { networks } = useContext(Context);

  // if name is empty, return primary api
  if (!name) {
    return Object.values(networks).find((item) => item.tag === "primary")?.api;
  }

  // try find by name
  const temp = networks[name as unknown as ConnectorNetwork];

  if (temp) {
    return temp.api;
  }

  // try find by tag
  return Object.values(networks).find((item) => item.tag === name)?.api;
};
