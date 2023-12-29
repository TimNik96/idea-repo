interface FeatureNameProps {
    name: string
    classNames?: string
}

const FeatureName = ({ name, classNames }: FeatureNameProps) => {
    return (
        <div
            className={`rounded bg-fingerprint-blue text-plain-white px-2 py-1 ${
                classNames ?? ""
            }`}
        >
            {name}
        </div>
    )
}

export default FeatureName
