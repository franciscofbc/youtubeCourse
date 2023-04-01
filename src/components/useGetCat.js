
// import {useQuery} form '@tans'
import Axios from 'axios'

export const useGetCat = () => {
    const [state, setState] = useState(initialValue)

    const toggle = () => {
        setState((prev) => !prev)
    }

    return [state, toggle]

}