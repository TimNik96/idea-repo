import { useGetFamilyQuery } from "app/queries/configurations/useGetFamilyQuery"
import { useGetOperationModeQuery } from "app/queries/configurations/useGetOperationModeQuery"
import { useGetRangeOfProductsQuery } from "app/queries/configurations/useGetRangeOfProductsQuery"
import Button from "components/atom/Button"
import Card from "components/atom/Card"
import CustomSelect from "components/atom/CustomSelect"
import FeatureName from "components/atom/FeatureName"
import Loader from "components/atom/Loader"
import Radio from "components/atom/Radio"
import { ChangeEvent, useState } from "react"
import { useTranslation } from "react-i18next"
// @ts-ignore
import CursorPointer from "assets/img/icons/cursor-pointer.svg?react"
// @ts-ignore
import Arrows from "assets/img/icons/move.svg?react"
import Input from "components/atom/Input"

const ConfigurationPage = () => {
    const { t } = useTranslation()
    const [acSelection, setAcSelection] = useState(false)
    const [chosenProduct, setChosenProduct] = useState<number>(0)
    const [chosenOperationMode, setChosenOperationMode] = useState<number>(0)
    const [family, setFamily] = useState<string>("")
    const [showCooling, setShowCooling] = useState<boolean>(true)
    const { data: products, isLoading: isLoadingProducts } =
        useGetRangeOfProductsQuery({ Culture: "en" })
    const {
        data: modes,
        isLoading: isLoadingModes,
        refetch: refetchOperationMode,
    } = useGetOperationModeQuery({
        Culture: "en",
        IdProduct: chosenProduct,
    })
    const {
        data: familyData,
        isLoading: isLoadingFamily,
        refetch: refetchFamily,
    } = useGetFamilyQuery({
        Culture: "en",
        IdProduct: chosenProduct,
        IdOperationMode: chosenOperationMode,
        Brand: "aertesi",
        IsEC: acSelection,
    })

    const radioChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === t("AC FANS")) {
            setAcSelection(true)
            return
        }
        setAcSelection(false)
    }

    const rangeOfProductsChangeHandler = (data: string) => {
        const prod = products?.find((el) => el.Label.toLowerCase() === data)
        if (prod) {
            setChosenProduct(prod.Id)
            refetchOperationMode()
        }
    }

    const operationModeChangeHandler = (data: string) => {
        const prod = modes?.find((el) => el.Label.toLowerCase() === data)
        if (prod) {
            setChosenOperationMode(prod.Id)
            refetchFamily()
        }
    }

    const familyHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {}

    const coolingHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
        if (event.currentTarget.textContent?.toLowerCase() === "cooling") {
            setShowCooling(true)
        } else {
            setShowCooling(false)
        }
    }

    return (
        <div>
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-2">
                <Card classNames="h-full w-full lg:w-2/3 xl:w-1/2  p-5">
                    <section className="flex flex-wrap sm:flex-nowrap gap-5 border-b-[1px] border-unreachable-dark pb-5">
                        <div className="w-full sm:w-1/2">
                            <FeatureName name={t("Range of Products")} />
                            {isLoadingProducts ? (
                                <div className="mt-4 flex items-center justify-center">
                                    <Loader classNames="w-6 h-9" />
                                </div>
                            ) : null}
                            {products && (
                                <CustomSelect
                                    name="range-of-products"
                                    onChange={rangeOfProductsChangeHandler}
                                    options={products.map((item) => {
                                        return {
                                            id: item.Id,
                                            value: item.Label.toLowerCase(),
                                            label: item.Label,
                                        }
                                    })}
                                    classNames="mt-4"
                                />
                            )}
                        </div>
                        <div className="w-full sm:w-1/2">
                            <FeatureName name={t("Operation Mode")} />
                            {isLoadingModes ? (
                                <div className="mt-4 flex items-center justify-center">
                                    <Loader classNames="w-6 h-9" />
                                </div>
                            ) : null}
                            {modes && (
                                <CustomSelect
                                    name="operation-mode"
                                    onChange={operationModeChangeHandler}
                                    options={modes.map((item) => {
                                        return {
                                            id: item.Id,
                                            value: item.Label.toLowerCase(),
                                            label: item.Label,
                                        }
                                    })}
                                    classNames="mt-4"
                                />
                            )}
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-center border-b-[1px] border-unreachable-dark py-10">
                        <FeatureName
                            name={t("Air Speed")}
                            classNames="w-fit sm:w-2/12 h-fit"
                        />
                        <div className="w-full sm:w-4/12 flex flex-wrap justify-center gap-3">
                            <Radio
                                label={t("EC FANS")}
                                name="fans"
                                onChange={radioChangeHandler}
                            />
                            <Radio
                                label={t("AC FANS")}
                                name="fans"
                                onChange={radioChangeHandler}
                            />
                        </div>
                        <div className="w-full sm:w-4/12">
                            {acSelection ? (
                                <div className="flex justify-center gap-3 sm:items-center sm:justify-around sm:gap-0">
                                    <p className="text-plain-grey font-bold">
                                        {t("Speed")}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <Button classNames="blueButton">
                                            {t("MAX")}
                                        </Button>
                                        <Button classNames="greyButton">
                                            {t("MAX")}
                                        </Button>
                                        <Button classNames="greyButton">
                                            {t("MAX")}
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center">
                                    {t("Some other params")}
                                </div>
                            )}
                        </div>
                    </section>
                    <section className="flex flex-wrap sm:flex-nowrap py-5">
                        <div className="w-full sm:w-1/3 sm:pe-2">
                            <FeatureName name={t("Family")} />
                            <div className="overflow-y-scroll rounded h-48 mt-2 border border-unreachable-dark">
                                {isLoadingFamily ? (
                                    <div className="mt-4 flex items-center justify-center">
                                        <Loader classNames="w-6 h-9" />
                                    </div>
                                ) : null}
                                {familyData &&
                                    familyData.map((item) => (
                                        <p
                                            key={item.Id}
                                            className="p-1 text-plain-grey"
                                            onClick={familyHandler}
                                        >
                                            {item.Label}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 sm:ps-1 sm:pe-1">
                            <FeatureName
                                name={t("Range/Version")}
                                classNames=""
                            />
                            <div className="rounded h-48 mt-2 border border-unreachable-dark text-"></div>
                        </div>
                        <div className="w-full sm:w-1/3 sm:ps-2">
                            <FeatureName name={t("Models")} classNames="" />
                            <div className="rounded  h-48 mt-2 border border-unreachable-dark"></div>
                        </div>
                    </section>
                </Card>
                <div className="w-full lg:w-2/3 xl:w-1/2">
                    <Card classNames="p-5">
                        <FeatureName
                            name={t("Capacity")}
                            classNames="w-fit px-4"
                        />
                        <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap">
                            <div>
                                <div className="flex items-center justify-between gap-2 mt-4">
                                    <p className="text-fingerprint-blue font-semibold me-2">
                                        {t("Tolerance |%|")}
                                    </p>
                                    <div className="flex flex-wrap sm:flex-nowrap gap-1">
                                        <Button classNames="blueButton">
                                            {"10"}
                                        </Button>
                                        <Button classNames="basicButton">
                                            {"15"}
                                        </Button>
                                        <Button classNames="basicButton">
                                            {"20"}
                                        </Button>
                                        <Button classNames="basicButton">
                                            {"20"}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="text-fingerprint-blue font-semibold me-2">
                                        {t("Altitude M")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-between mt-4 border-t sm:border-t-0 border-b sm:border-b-0 sm:border-e sm:border-s py-2 sm:px-2 mx-2">
                                <div>
                                    <p className="text-fingerprint-blue font-semibold">
                                        {t("Required Capacity |%|")}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-2">
                                    <p className="text-unreachable-dark">
                                        {t("Ph KW")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-between mt-3">
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-fingerprint-blue">
                                        {t("Air Flow |m3/h|")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-1">
                                    <p className="text-unreachable-dark">
                                        {t("External Static Pressure")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card classNames="p-5 mt-2">
                        <FeatureName
                            name={t("Other Filters")}
                            classNames="w-fit px-4"
                        />
                        <div className="flex">
                            <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap">
                                <div className="flex justify-between gap-2 mt-4">
                                    <p className="text-fingerprint-blue font-semibold me-2 py-1">
                                        {t("Sound")}
                                    </p>
                                    <div>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-unreachable-dark">
                                                {t("Max Lw Db(a)")}
                                            </p>
                                            <Input
                                                type="text"
                                                classNames="rounded border p-1 w-16 outline-none"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center gap-2 mt-2">
                                            <p className="text-unreachable-dark">
                                                {t("Max Lp Db(a)")}
                                            </p>
                                            <Input
                                                type="text"
                                                classNames="rounded border p-1 w-16 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-between mt-4 border-t sm:border-t-0 border-b sm:border-b-0 sm:border-e sm:border-s py-2 sm:px-2 mx-2">
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="text-unreachable-dark">
                                            {t("Max Height Mm")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center gap-2 mt-2">
                                        <p className="text-unreachable-dark">
                                            {t("Max Width Mm")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-between mt-4">
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="text-unreachable-dark">
                                            {t("Max Weight Kg")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card classNames="p-5 mt-2">
                        <div className="flex border rounded-full w-fit bg-unreachable text-unreachable-dark">
                            <p
                                className={`px-3 py-1 cursor-pointer transition-all duration-300 ${
                                    showCooling
                                        ? "bg-fingerprint-blue text-plain-white rounded-full"
                                        : ""
                                }`}
                                onClick={coolingHandler}
                            >
                                {t("Cooling")}
                            </p>
                            <p
                                className={`px-3 py-1 cursor-pointer transition-all duration-300 ${
                                    !showCooling
                                        ? "bg-fingerprint-red text-plain-white rounded-full"
                                        : ""
                                }`}
                                onClick={coolingHandler}
                            >
                                {t("Heating")}
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap">
                            <div className="flex justify-between gap-2 mt-4">
                                {showCooling ? (
                                    <p className="text-fingerprint-blue font-semibold me-2 py-1">
                                        {t("Cooling Mode")}
                                    </p>
                                ) : (
                                    <p className="text-fingerprint-red font-semibold me-2 py-1">
                                        {t("Heating Mode")}
                                    </p>
                                )}
                                <div>
                                    <div className="flex justify-between items-center gap-2">
                                        <p className="text-unreachable-dark">
                                            {t("DBT C")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center gap-2 mt-2">
                                        <p className="text-unreachable-dark">
                                            {t("WBT C")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center gap-2 mt-2">
                                        <p className="text-unreachable-dark">
                                            {t("TH %")}
                                        </p>
                                        <Input
                                            type="text"
                                            classNames="rounded border p-1 w-16 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-between mt-4 border-t sm:border-t-0 sm:border-s py-2 sm:px-2 mx-2">
                                <div className="flex justify-between items-center gap-2">
                                    <p className="text-unreachable-dark">
                                        {t("Fluid")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-36 outline-none"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-2">
                                    <p className="text-unreachable-dark">
                                        {t("Inlet Fluid Temp. |C|")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2 mt-2">
                                    <p className="text-unreachable-dark">
                                        {t("Outlet Fluid Temp. |C|")}
                                    </p>
                                    <Input
                                        type="text"
                                        classNames="rounded border p-1 w-16 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Card classNames="p-5 mt-5 flex flex-col gap-3 lg:flex-row items-center lg:justify-between justify-center lg:items-center">
                <section className="flex flex-wrap md:flex-nowrap items-center gap-3">
                    <Button classNames="blueButton">
                        {t("Reset Accessories")}
                    </Button>
                    <Button classNames="greenButton group flex justify-center items-center">
                        <CursorPointer className="fill-plain-white group-hover:fill-fingerprint-green me-1 -ms-1" />
                        {t("Calculate")}
                    </Button>
                    <Button classNames="blueButton group flex justify-center items-center">
                        <Arrows className="fill-plain-white group-hover:fill-fingerprint-blue me-1 -ms-1" />
                        {t("Add Position")}
                    </Button>
                    <Input
                        type="text"
                        classNames="rounded border p-1 w-40 outline-none"
                        placeholder={t("Position refference")}
                    />
                    <Input
                        type="text"
                        classNames="rounded border p-1 w-20 outline-none"
                        placeholder={t("Qta")}
                    />
                </section>
                <section className="flex items-center gap-3">
                </section>
            </Card>
        </div>
    )
}

export default ConfigurationPage
