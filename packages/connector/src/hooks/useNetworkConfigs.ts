import { useContext } from "react"
import { Context } from "../Context";

export const useNetworkConfigs = () => {
  const data = useContext(Context);

  return data.networks;
}