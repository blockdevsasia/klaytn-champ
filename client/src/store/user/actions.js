import { AUTH } from 'boot/firebase'

export async function logout (ctx) {
  console.log('user/logout')
  AUTH.signOut()
}

export async function init (ctx) {
  console.log('user/init')
}

export async function loggedIn (ctx, firebaseUser) {
  const user = {
    displayName: firebaseUser.displayName,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified
  }
  console.log('loggedIn', user)

  ctx.commit('current', user)
}

export async function reset (ctx) {
  console.log('user/reset')

  AUTH.signOut()

  await ctx.dispatch('closeDBChannel', { clearModule: true })
  ctx.commit('current', {})
}
