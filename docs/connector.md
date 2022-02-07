## Acala Connector
use acala connector to connect to multiply chains

#### How To Use
1. install @acala-network/react-connector
    ```bash
    yarn add @acala-network/react-connector
    ```

2. add connector to project
    ```jsx
    import { Connector } from '@acala-network/react-connector';

    const configs = {
      networks: {
        acala: {
          tag: 'default',
          endpoints: ['xx', 'xx']
        },
        polkadot: {
          tag: 'parachain',
          endpoints: ['xx', 'xx']
        },
        statemine: {
          endpoints: ['xx', 'xx'],
          options: {
            /* connect options */
          }
        },
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

config the network chain information includes name, endpoints, tag

- tag: network tag for filter   
  - Type: 'primary' | 'parachain'
- endpoints: network endpoints config
  - Type: string[] | { [name]: address }[]
- options: api connect options


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
    get all api instances or filte by name/tag array
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