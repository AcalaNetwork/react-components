import { has } from "lodash";
import { useContext } from "react";

import { Context } from "../Context";

export const useApi = (names?: string) => {
  const { networks } = useContext(Context);

  // if name is empty, return primary api
  if (!names) {
    return Object.values(networks).map((item) => item.api);
  }

  return Object.entries(networks)
    .filter(([key, value]) => {
      return (value.tag && has(names, value.tag)) || has(names, key);
    })
    .map(([, value]) => value.api);
};
