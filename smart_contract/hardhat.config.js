require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/GXCPXVJQ5PjxY9g_UPudZ_deYUDuNFak',
      accounts: ['9b74bd34199207a857dbb8b723a0e5bdfd2d58219b604925be926f1083fa0453']
    }
  }
}