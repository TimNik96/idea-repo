import { useQuery } from "@tanstack/react-query"
import { RANGE_OF_PRODUCTS_API } from "app/consts/api.consts"
import axiosInstance from "app/config/axios"

export type ProductResponse = {
    Id: number
    Label: string
}

type ParamsProps = {
    Culture: string
}

export type RangeOfProductsResponse = Array<ProductResponse>

const fetch = async (params: ParamsProps): Promise<RangeOfProductsResponse> => {
    return (await axiosInstance({ ...RANGE_OF_PRODUCTS_API, params })).data
}

export const useGetRangeOfProductsQuery = (params: ParamsProps) => {
    return useQuery({
        queryKey: ["range-of-products"],
        queryFn: () => fetch(params),
    })
}
