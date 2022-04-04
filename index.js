import { TezosToolkit } from "@taquito/taquito";
import { bytes2Char } from "@taquito/utils";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const networks = {
  mainnet: {
    url: "https://mainnet.api.tez.ie/",
    contractAddress: "KT1GBZmSxmnKJXGMdMLbugPfLyUPmuLSMwKS"
  },
  hangzhounet: {
    url: "https://hangzhounet.api.tez.ie/",
    contractAddress: "KT1MgQjmWMBQ4LyuMAqZccTkMSUJbEXeGqii"
  }
}

function TezosDomainLookup ({ address, network, className }) {
  const [domain, setDomain] = useState("");
  const [config, setConfig] = useState(networks[network])

  useEffect(() => {
    setConfig(networks[network]);
  }, [network])

  useEffect(() => {
    (async () => {

      try {
        const Tezos = new TezosToolkit(config.url);
        const contract = await Tezos.wallet.at(config.contractAddress);
        const storage: any = await contract.storage();
        const domain = await storage.store.reverse_records.get(address);

        if (domain) {
          return setDomain(bytes2Char(domain.name));
        }
      } catch (error) {
        console.log(`Error performing lookup for address ${address}`)
        console.log(error);
      }
    })();
  }, [address]);

  return (
    <span
      title={domain.length > 0 ? address : null}
      className={className}
    >
      {domain.length > 0 ? domain : address}
    </span>
  )
}

TezosDomainLookup.propTypes = {
  address: PropTypes.string.isRequired,
  network: PropTypes.oneOf(["mainnet", "hangzhounet"]).isRequired,
  className: PropTypes.string
};

export default TezosDomainLookup;
