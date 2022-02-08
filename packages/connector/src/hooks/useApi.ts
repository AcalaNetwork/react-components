import { useContext } from "react"
import { ConnectorNetwork } from "..";
import { Context } from "../Context"

export const useApi = (name?: string) => {
  const { networks } = useContext(Context);

  // if name is empty, return primary api
  if (!name) {
    return Object.values(networks).find((item) => item.tag === 'primary')?.api;
  }

  // try find by name
  const temp = networks[name as any as ConnectorNetwork];

  if (temp) {
    return temp.api;
  }

  // try find by tag
  return Object.values(networks).find((item) => item.tag === name)?.api;
}