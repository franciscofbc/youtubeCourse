import { useGetCat } from "./components/useGetCat"

export const Cat = () => {
    const { data } = useGetCat()

    return (

        <h1>{data?.fact}</h1>

    )
}