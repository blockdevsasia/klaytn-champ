import { axiosHTTP } from 'boot/axios'

export async function serverSendAddress (context, address) {
  axiosHTTP({
    method: 'post',
    url: '/user/' + address,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}

export async function serverSendRandomAmount (context, { address, randomAmount }) {
  axiosHTTP({
    method: 'post',
    url: '/checkRandomAmount',
    data: {
      address: address,
      randomAmount: randomAmount
    }
  })
}
