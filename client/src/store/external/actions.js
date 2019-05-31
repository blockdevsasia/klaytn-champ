import { axiosHTTP } from 'boot/axios'
import { contract } from 'boot/caver'

// Fix for old web3 flaw: https://github.com/ethereum/web3.js/issues/1986
process.versions = { node: '11.2.0' }

export async function httpResetUser (context, address) {
  axiosHTTP({
    baseURL: process.env.CHAMP_API_URL,
    method: 'post',
    url: '/SECRETkn3k4ln23lk4n2lk4n32_RESET_USER',
    data: {
      address: address
    }
  })
}

export async function httpRegisterUser (context, address) {
  try {
    const result = await axiosHTTP({
      baseURL: process.env.CHAMP_API_URL,
      method: 'post',
      url: '/registerUser',
      data: {
        address: address,
        googleHash: '0x3e27a893dc40ef8a7f0841d96639de2f58a132be5ae466d40087a2cfa83b7179'
      }
    })

    context.commit('user/submissionProgress', 40, { root: true })
  } catch (err) {
    context.commit('user/submissionProgress', 40, { root: true })
  }
}

export async function httpCheckAmount (context, { address, random }) {
  axiosHTTP({
    baseURL: process.env.CHAMP_API_URL,
    method: 'post',
    url: '/checkAmount',
    data: {
      address: address,
      random: random
    }
  })
}
export async function httpCheckLevel2 (context, { address, solution }) {
  try {
    const result = await axiosHTTP({
      baseURL: process.env.CHAMP_API_URL,
      method: 'post',
      url: '/checkLevel2',
      data: {
        address: address,
        txHash: solution
      }
    })
    context.commit('user/submissionProgress', 40, { root: true })

    console.log('level2check', result)
  } catch (err) {
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function httpCheckLevel3 (context, { address, solution }) {
  try {
    const result = await axiosHTTP({
      baseURL: process.env.CHAMP_API_URL,
      method: 'post',
      url: '/checkLevel3',
      data: {
        address: address,
        contract: solution
      }
    })
    console.log('level3check', result)
  } catch (err) {
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function httpCheckLevel4 (context, { address, solution }) {
  try {
    const data = {
      address: address,
      txHash: solution,
      random: context.rootState.user.random
    }
    console.log(data)
    const result = await axiosHTTP({
      baseURL: process.env.CHAMP_API_URL,
      method: 'post',
      url: '/checkLevel4',
      data: data
    })
    console.log('level4check', result)
  } catch (err) {
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function httpCheckLevel5 (context, { address, solution }) {
  try {
    const data = {
      address: address,
      count: solution,
      random: context.rootState.user.random
    }
    console.log(data)
    const result = await axiosHTTP({
      baseURL: process.env.CHAMP_API_URL,
      method: 'post',
      url: '/checkLevel5',
      data: data
    })
    console.log('level5check', result)
  } catch (err) {
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function klaytnGetUser (context, address) {
  const result = await contract.methods.getUser(address).call()
  const level = Number.parseInt(result.level) + 1
  const certificationLevel = Number.parseInt(result.certificationLevel) + 1
  const random = result.randomAmount

  // console.log(level, random)
  if (context.rootState.user.level !== level) {
    context.commit('user/submissionProgress', 100, { root: true })

    context.commit('user/level', level, { root: true })
    context.commit('user/random', random, { root: true })
    if (context.rootState.user.certificationLevel !== certificationLevel) {
      context.commit('user/certificationLevel', certificationLevel, { root: true })
    }
  }
}
