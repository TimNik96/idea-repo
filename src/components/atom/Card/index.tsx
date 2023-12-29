import { ReactNode } from "react"

interface CardProps {
    children: ReactNode
    classNames?: string
}

const Card = ({ children, classNames }: CardProps) => {
    return (
        <div
            className={`shadow box-border bg-plain-white ${
                classNames ? classNames : ""
            }`}
        >
            {children}
        </div>
    )
}

export default Card
