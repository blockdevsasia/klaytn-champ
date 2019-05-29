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

export async function httpCheckLevel3 (context, { address, contract }) {
  const result = await axiosHTTP({
    method: 'post',
    url: '/checkLevel3',
    data: {
      address: address,
      contract: contract
    }
  })
  console.log('level3check', result)
}

export async function httpCheckLevel4 (context, { address, solution }) {
  const data = {
    address: address,
    txHash: solution,
    random: context.rootState.user.random
  }
  console.log(data)
  const result = await axiosHTTP({
    method: 'post',
    url: '/checkLevel4',
    data: data
  })
  console.log('level4check', result)
}

export async function httpCheckLevel5 (context, { address, solution }) {
  const data = {
    address: address,
    count: solution,
    random: context.rootState.user.random
  }
  console.log(data)
  const result = await axiosHTTP({
    method: 'post',
    url: '/checkLevel5',
    data: data
  })
  console.log('level5check', result)
}

export async function klaytnGetUser (context, address) {
  const result = await contract.methods.getUser(address).call()
  const level = Number.parseInt(result.level) + 1
  const random = result.randomAmount

  if (context.rootState.user.level !== level) context.commit('user/level', level, { root: true })
  if (context.rootState.user.random !== random) context.commit('user/random', random, { root: true })
}
