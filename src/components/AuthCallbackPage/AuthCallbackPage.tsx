import { useCreateUser } from '@/api/userApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthCallbackPage() {
    const { user } = useAuth0()
    const { createUser } = useCreateUser()
    const navigate = useNavigate()
    const hasCreatedUser = useRef(false)

    useEffect(() => {
        let isMounted = true;

        const createUserIfNeeded = async () => {
            if (user?.sub && user?.email && !hasCreatedUser.current) {
                try {
                    await createUser({ auth0Id: user.sub, email: user.email })
                    if (isMounted) {
                        hasCreatedUser.current = true
                        navigate('/')
                    }
                } catch (error) {
                    console.error('Error creating user:', error)
                    // Handle error appropriately (e.g., show error message to user)
                }
            }
        }

        createUserIfNeeded()

        return () => {
            isMounted = false
        }
    }, [createUser, navigate, user])

    return (
        <>Loading...</>
    )
}
