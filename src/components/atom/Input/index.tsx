interface InputProps {
    type: string
    classNames?: string
    placeholder?: string
}

const Input = ({ type, classNames, placeholder }: InputProps) => {
    return (
        <input type={type} className={classNames} placeholder={placeholder} />
    )
}

export default Input
