## Acala Connector
use acala connector to connect to multiply chains

#### How To Use
1. install @acala-network/react-connector
    ```bash
    yarn add @acala-network/react-connector
    ```

2. add connector to project
    ```jsx
    import { Connector, ConnectNetwork } from '@acala-network/react-connector';

    const configs = {
      networks: {
        [ConnectNetwork.ACALA]: {
          tag: 'default',
          endpoints: ['xx', 'xx'],
          options: {
            /* connect options */
            ...
          }
        },
        [ConnectNetwork.KARURA]: {
          tag: 'parachain',
          endpoints: ['xx', 'xx']
        },
        [ConnectNetwork.STATEMINE]: {
          endpoints: ['xx', 'xx'],
        }
      }
    };

    const App = ({ children }) => {
      return (
        <Connector configs={configs}>
          {children}
        </Connector>
      );
    }
    ```

### Configuration

#### networks
- Type: network configs object   
  config the network informations includes name, endpoints, tag
  - tag: network tag for filter   
    - Type: 'primary' | 'parachain'
  - endpoints: network endpoints config
    - Type: string[] | { [name]: address }[]
  - options: other api connect options include types, oracle apis

### Hooks
1. **useApi**   
    get the api instances, can filte by tag/name

    ```javascript
    // get the primary api by default
    const api = useApi();

    // get the parachain api
    const api = useApi('parachain');

    // get the api by name
    const api = useApi('polkadot');
    ```

2. **useApis**   
    get multiple api instances or filter by name/tag array   
    ```javascript
    const apis = useApis();

    // can filter by pass tag/name array
    const apis = useApis(['primary', 'parachain'])
    ```
3. **useApiIsReady**  
   get the api status
   ```javascript
   // return true if primary api is ready
   const status = useApiIsReady('primary')

   // return true if parachain and primary api are both ready
   const status = useApiIsReady(['primary', 'parachain'])
   ``` 