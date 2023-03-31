import { ChangeProfile } from "../components/ChageProfile"
import { useContext } from 'react'
import { AppContext } from '../App'

export const Profile = () => {
    const { username } = useContext(AppContext)

    return (
        <div>
            <h1>THIS IS THE PROFILE PAGE. USER IS: {username}</h1>
            <ChangeProfile />
        </div>

    )
}