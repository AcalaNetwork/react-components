### @acala-network/wallet

```javascript
const configs = {
  wallets: [
    {
      name: 'polkadot-extension',
      icon: <img src='xxx'>
    },
    {
      name: 'tailsman',
      icon: <img src='xxx'>
    }
  ]
}

const app = () => {
  return (
    <Wallet configs={configs}>
      <p>hello</p>
    </Wallet>
  );
}
```
