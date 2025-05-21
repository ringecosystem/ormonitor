const Chains = [
  {
    "name": "crab",
    "id": 44,
    "endpoint": "https://crab-rpc.darwinia.network",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 100,
    },
    "symbol": "CRAB",
    "scan": "https://crab.subscan.io",
  },
  {
    "name": "darwinia",
    "id": 46,
    "endpoint": "https://rpc.darwinia.network",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 100,
    },
    "symbol": "RING",
    "scan": "https://darwinia.subscan.io",
  },
  {
    "name": "arbitrum",
    "id": 42161,
    "endpoint": "https://arbitrum-one.publicnode.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.01,
    },
    "symbol": "AETH",
    "scan": "https://arbiscan.io",
  },
  {
    "name": "base",
    "id": 8453,
    "endpoint": "https://base-rpc.publicnode.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.01,
    },
    "symbol": "ETH",
    "scan": "https://basescan.org",
  },
  {
    "name": "ethereum",
    "id": 1,
    "endpoint": "https://ethereum-rpc.publicnode.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.02,
    },
    "symbol": "ETH",
    "scan": "https://etherscan.io",
  },
  {
    "name": "polygon",
    "id": 137,
    "endpoint": "https://polygon-bor-rpc.publicnode.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.1,
    },
    "symbol": "MATIC",
    "scan": "https://polygonscan.com",
  },
  {
    "name": "blast",
    "id": 81457,
    "endpoint": "https://blast-rpc.publicnode.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.01,
    },
    "symbol": "ETH",
    "scan": "https://blastscan.io",
  },
  {
    "name": "moonbeam",
    "id": 1284,
    "endpoint": "https://moonbeam-rpc.dwellir.com",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 10,
    },
    "symbol": "GLMR",
    "scan": "https://moonbeam.subscan.io/",
  },
  {
    "name": "morph",
    "id": 2818,
    "endpoint": "https://rpc.morphl2.io",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0x114890eB7386F94eae410186F20968bFAf66142a",
      "ormp": "0x13b2211a7cA45Db2808F6dB05557ce5347e3634e",
      "oracle": "0xB49E82067a54b3E8c5D9Db2f378FdB6892C04D2E",
      "multisig": "0x855275aC7Ea4cc4F324915b2Eb48839E447E04bD"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 0.005,
    },
    "symbol": "ETH",
    "scan": "https://explorer.morphl2.io/",
  },
  {
    "name": "tron",
    "id": 728126428,
    "endpoint": "https://api.trongrid.io/jsonrpc",
    "contract": {
      "signcribe": "0x57aa601a0377f5ab313c5a955ee874f5d495fc92",
      "relayer": "0xB607762F43F1A72593715497d4A7dDD754c62a6A",
      "ormp": "0x5C5c383FEbE62F377F8c0eA1de97F2a2Ba102e98",
      "oracle": "0x985BDdbC7E66964f131E3161BA8864f481cBCb2D",
      "multisig": "0x2cCB8571345D9A13f3A9D792677ab029b945eFb2"
    },
    "operator": {
      "oracle": "0xc1A3FEE4132e9285f41F5389570fD9Fbbcb10a1D",
      "relayer": "0x40C168503B9758540E18A79907F3Fd8678c13f03",
      "warnBalance": 500,
    },
    "symbol": "TRX",
    "scan": "https://tronscan.org/#",
  }
]

function getChainById(id) {
  for (const item of Chains) {
    if (item.id == id) {
      return item;
    }
  }
  return null;
}

function getChainByName(name) {
  for (const item of Chains) {
    if (item.name == name) {
      return item;
    }
  }
  return null;
}


function getAllChains() {
  return Chains;
}

export { getAllChains, getChainById, getChainByName };