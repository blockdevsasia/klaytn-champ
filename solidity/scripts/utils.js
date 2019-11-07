
module.exports.deployContractDelegated = async function deployContractDelegated (caver, sender, payer, byteCode) {
  try {
    const { rawTransaction: senderRawTransaction } = await caver.klay.accounts.signTransaction({
      type: 'FEE_DELEGATED_SMART_CONTRACT_DEPLOY',
      from: sender.address,
      data: byteCode,
      gas: '3000000000',
      value: 0
    }, sender.privateKey)

    console.debug('Presigned the transaction')

    const receipt = await caver.klay.sendTransaction({
      senderRawTransaction: senderRawTransaction,
      feePayer: payer.address,
      gas: '3000000000',
      value: 0
    })

    return receipt
  } catch (err) {
    console.error(err)
  }
}
