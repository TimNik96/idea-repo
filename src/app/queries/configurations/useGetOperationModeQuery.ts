import { useQuery } from "@tanstack/react-query"
import axiosInstance from "app/config/axios"
import { OPERATION_MODE_API } from "app/consts/api.consts"

export type OperationModeResponse = {
    Id: number
    Label: string
}

type OperationModeProps = {
    Culture: string
    IdProduct: number
}

export type OperationModesResponse = Array<OperationModeResponse>

const fetch = async (
    params: OperationModeProps,
): Promise<OperationModesResponse> => {
    return (await axiosInstance({ ...OPERATION_MODE_API, params })).data
}

export const useGetOperationModeQuery = (params: OperationModeProps) => {
    return useQuery({
        queryKey: ["operation-mode"],
        queryFn: () => fetch(params),
        enabled: !!params.IdProduct,
    })
}
