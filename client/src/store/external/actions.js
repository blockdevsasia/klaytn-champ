import { axiosHTTP } from 'boot/axios'
// import { CAVER } from 'boot/caver'
// const Contract = require('src/assets/contracts/KlaytnChamp.json')

// const cav = new Caver(process.env.URL)
// CAVER.klay.accounts.wallet.add(process.env.PRIVATE_KEY)
// const contract = new CAVER.klay.Contract(Contract.abi, process.env.CONTRACT_ID)

export async function httpRegisterUser (context, address) {
  axiosHTTP({
    method: 'post',
    url: '/registerUser',
    data: {
      address: address
    }
  })
}

export async function httpCheckAmount (context, { address, randomAmount }) {
  axiosHTTP({
    method: 'post',
    url: '/checkAmount',
    data: {
      address: address,
      randomAmount: randomAmount
    }
  })
}
