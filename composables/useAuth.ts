export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const isAuthLoading = useState('isAuthLoading', () => false)
  // const user = useState('user', () => null)

  const signIn = async (email: string) => {
    try {
      isAuthLoading.value = true
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } finally {
      isAuthLoading.value = false
    }
  }

  const signOut = async () => {
    try {
      isAuthLoading.value = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
      user.value = null
    } catch (error) {
      // @ts-ignore
      alert(error.message)
    } finally {
      isAuthLoading.value = false
    }
  }

  return { signIn, isAuthLoading, user, signOut }
}
