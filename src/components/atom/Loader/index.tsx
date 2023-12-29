// @ts-ignore 
import Spinner from "assets/img/icons/spinner-solid.svg?react"

interface LoaderProps {
    classNames?: string
}

const Loader = ({ classNames }: LoaderProps) => {
    return <Spinner className={`animate-spin ${classNames ?? ""}`}></Spinner>
}

export default Loader
