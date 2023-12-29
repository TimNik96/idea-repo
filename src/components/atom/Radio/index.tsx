import { ChangeEvent } from "react"
import "components/atom/Radio/style.scss"

interface RadioProps {
    label: "EC FANS" | "AC FANS"
    name: string
    labelClassNames?: string
    radioClassNames?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Radio = ({
    label,
    name,
    labelClassNames,
    radioClassNames,
    onChange,
}: RadioProps) => {
    return (
        <label className={labelClassNames ? labelClassNames : ""}>
            {label}
            <input
                type="radio"
                name={name}
                value={label}
                defaultChecked={label === "EC FANS"}
                className={`ms-1 mt-1 ${
                    radioClassNames ? radioClassNames : ""
                }`}
                onChange={onChange}
            />
        </label>
    )
}

export default Radio
