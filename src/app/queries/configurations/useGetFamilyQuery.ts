import { useQuery } from "@tanstack/react-query"
import axiosInstance from "app/config/axios"
import { FAMILY_API } from "app/consts/api.consts"

export type FamilyResponse = {
    Id: number
    LinkImage: string
    Label: string
}

type FamilyProps = {
    IdProduct: number
    Culture: string
    IdOperationMode: number
    IsEC: boolean
    Brand: string
}

export type FamiliesResponse = Array<FamilyResponse>

const fetch = async (params: FamilyProps): Promise<FamiliesResponse> => {
    return (await axiosInstance({ ...FAMILY_API, params })).data
}

export const useGetFamilyQuery = (params: FamilyProps) => {
    return useQuery({
        queryKey: ["family"],
        queryFn: () => fetch(params),
        enabled: !!params.IdProduct && !!params.IdOperationMode,
    })
}
