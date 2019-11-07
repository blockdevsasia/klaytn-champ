import { champEnv } from 'boot/main'
import { axiosHTTP } from 'boot/axios'
import { contract } from 'boot/caver'
import { idToken } from 'boot/firebase'

// Fix for old web3 flaw: https://github.com/ethereum/web3.js/issues/1986
process.versions = { node: '11.2.0' }

export async function httpResetUser (context, address) {
  try {
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/resetUser',
      data: {
        address: address,
        idToken: idToken
      }
    })
    console.debug(result)
    context.commit('user/submissionProgress', 40, { root: true })
  } catch (err) {
    context.commit('user/submissionProgress', 40, { root: true })
  }
}

export async function httpRegisterUser (context, address) {
  try {
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/registerUser',
      data: {
        address: address,
        idToken: idToken
      }
    })
    const tokenId = result.data
    console.debug(result)
    context.commit('user/submissionProgress', 40, { root: true })
  } catch (err) {
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function httpCheckAmount (context, { address, random }) {
  axiosHTTP({
    baseURL: champEnv.getApiUrl()(),
    method: 'post',
    url: '/api/checkAmount',
    data: {
      address: address,
      random: random
    }
  })
}

export async function httpCheckLevel2 (context, { address, solution }) {
  try {
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/checkLevel2',
      data: {
        address: address,
        txHash: solution
      }
    })
    context.commit('user/submissionProgress', 40, { root: true })

    console.log('level2check', result)
  } catch (err) {
    console.error(err)
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function httpCheckLevel3 (context, { address, solution }) {
  try {
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/checkLevel3',
      data: {
        address: address,
        contract: solution
      }
    })
    console.log('level3check', result)
  } catch (err) {
    console.error(err)
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
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/checkLevel4',
      data: data
    })
    console.log('level4check', result)
  } catch (err) {
    console.error(err)
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
    const result = await axiosHTTP({
      baseURL: champEnv.getApiUrl(),
      method: 'post',
      url: '/api/checkLevel5',
      data: data
    })
    console.log('level5check', result)
  } catch (err) {
    console.error(err)
    context.commit('user/submissionProgress', 0, { root: true })
  }
}

export async function klaytnGetUser (context, address) {
  const result = await contract.methods.getUser(address).call()
  const level = Number.parseInt(result.level) + 1
  const certificationLevel = Number.parseInt(result.certificationLevel) + 1
  const random = result.nonce

  if (context.rootState.user.level !== level) {
    if (level === 2) {
      const badge0 = await contract.methods.tokenOfOwnerByIndex(address, 0).call()
      console.log('badge0: ', badge0)
      context.dispatch('user/set', { 'badge0': badge0 }, { root: true })
    } else if (level > 5) {
      const badge1 = await contract.methods.tokenOfOwnerByIndex(address, 1).call()
      console.log('badge1: ', badge1)
      context.dispatch('user/set', { 'badge1': badge1 }, { root: true })
    }

    context.commit('user/submissionProgress', 100, { root: true })

    context.commit('user/level', level, { root: true })
    context.commit('user/random', random, { root: true })
    if (context.rootState.user.certificationLevel !== certificationLevel) {
      context.commit('user/certificationLevel', certificationLevel, { root: true })
    }
  }
}
