export async function init (ctx) {
  console.log('user/init')
}

export async function reset (ctx) {
  await window.AUTH.signOut()
  await ctx.dispatch('closeDBChannel', { clearModule: true })
  console.log('signed out')
}
