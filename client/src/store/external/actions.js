import { axiosHTTP } from 'boot/axios'
import { contract } from 'boot/caver'

// Fix for old web3 flaw: https://github.com/ethereum/web3.js/issues/1986
process.versions = { node: '11.2.0' }

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
export async function httpCheckLevel2 (context, address) {
  const result = await axiosHTTP({
    method: 'post',
    url: '/checkLevel2',
    data: {
      address: address
    }
  })
  console.log('level2check', result)
}

export async function klaytnGetUser (context, address) {
  const result = await contract.methods.getUser(address).call()
  const level = Number.parseInt(result.level) + 1

  if (context.rootState.user.level !== level) context.commit('user/level', level, { root: true })
}
