import React from 'react';
import { ConnectorContextData } from './types';

export const Context = React.createContext<ConnectorContextData>({} as any as ConnectorContextData);

export const Provider = Context.Provider;

export const Consumer = Context.Consumer;
