# Tezos Domain Lookup

A reactjs component that allows you to display the tezos domain associated with an address.

- Displays the address itself if no domain found
- If domain found, displays the domain in a `<span />` tag and the address is displayed on hover (through the span's `title` attribute)

## Installation & Usage

To install, run:

```bash
npm install @subter/tezos-domain-lookup
```

You can then use it in your code as follows:

```js
import TezosDomainLookup from @subter/tezos-domain-lookup

// Your component code
// ...
// ...
  <TezosDomainLookup
    network="hangzhounet"
    address="tz1Xm6kv5euMCjTKgYLt1KcCMhZy9FFBRyQ8"
    className="text-bold text-red-300"
  />
//...
```

which will render

```html
<span
  title="tz1Xm6kv5euMCjTKgYLt1KcCMhZy9FFBRyQ8"
  class="text-bold text-red-300"
>
  <!--
    tz1Xm6kv5euMCjTKgYLt1KcCMhZy9FFBRyQ8 on hangzhounet
    is registered as callmekatootie.han
  -->
  callmekatootie.han
</span>
```

## Props

### network (string)

The network in which to lookup the domain. Supported values:

- mainnet
- hangzhounet

### address (string)

The address to lookup

### className (string)

The CSS classes to associate with the generated `<span>` tag
