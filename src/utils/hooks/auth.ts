import { useEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"
import store from "store2"

function useAuth () {
  const [loggedIn, setLoginState] = useState(false)

  const login = () => {
    LoginSubject.next(true)
  }

  const logout = () => {
    LoginSubject.next(false)
  }

  useEffect(() => {
    const token = store.get('token')
    if (token) {
      LoginSubject.next(true)
    }
    const sub = LoginSubject.subscribe((state) => {console.log(state);setLoginState(state)})
    return () => {
      sub.unsubscribe()
    }
  }, [loggedIn])

  return { loggedIn, login, logout }
}

const LoginSubject = new BehaviorSubject(false)

export { useAuth }