import { ReactNode } from "react"
import "./style.scss"

interface ButtonProps {
    classNames?: string
    children: ReactNode
    // name: string
    // variant?:
    //     | "primary"
    //     | "secondary"
    //     | "tertiary"
    //     | "basic"
    //     | "action"
    //     | "reverse-primary"
    //     | "grey"
    // type?: "submit" | "button"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({
    classNames,
    children,
    // variant,
    // type,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={`button ${classNames ?? ""}`}
            // className={`
            //     button ${classNames ?? ""}
            //     ${variant === "primary" ? "blueButton" : ""}
            //     ${variant === "secondary" ? "redButton" : ""}
            //     ${variant === "tertiary" ? "greenButton" : ""}
            //     ${variant === "grey" ? "greyButton" : ""}
            // `}
            // type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
