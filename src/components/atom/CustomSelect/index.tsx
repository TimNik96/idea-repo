import { forwardRef, useId } from "react"
import Select, { Options, SelectInstance } from "react-select"

export type SelectType<TExtended = unknown> = {
    id: number
    label: string
    value?: string
    isDisabled?: boolean
    action?: <TData = unknown>(data?: TData) => void
    extendedLabelData?: TExtended
}

interface CustomSelectProps {
    onChange: (data: string) => void
    name: string
    value?: { label: string; id: number }
    classNames?: string
    disabled?: boolean
    options: Options<SelectType>
}

const CustomSelect = forwardRef<SelectInstance, CustomSelectProps>(
    (props, ref) => {
        const { name, disabled, value, classNames, options, onChange } = props
        const id = useId()
        return (
            <Select
                className={`${classNames ?? ""} ${
                    disabled ? "cursor-not-allowed" : ""
                }`}
                options={options}
                id={id}
                name={name}
                isDisabled={disabled}
                ref={ref}
                defaultValue={value}
                onChange={(data) => {
                    if (!data) {
                        onChange("")
                        return
                    } else {
                        const selectedValue = (data as SelectType).value
                        onChange(selectedValue!)
                    }
                }}
            />
        )
    },
)

export default CustomSelect
