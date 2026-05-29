

import { validateSettingsInput } from '../../../helpers/validateSettingsInput'


type SettingsInputProps = {
    label: string
    helperText: string
    errorMessage: string
    lowStockThreshold: number
    setLowStockThreshold: (value: number) => void
    isInputValueValid: boolean
    setIsInputValueValid: (value: boolean) => void
}



const SettingsInput = ({
    label,
    helperText,
    errorMessage,
    lowStockThreshold,
    setLowStockThreshold,
    isInputValueValid,
    setIsInputValueValid }: SettingsInputProps) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validateValue = validateSettingsInput(e.target.value)

        if (validateValue !== null) {
            setLowStockThreshold(validateValue)
            setIsInputValueValid(true)
        } else {
            setIsInputValueValid(false)
        }
    }


    return (
        <div>
            <label>{label}</label>
            <input
                value={lowStockThreshold}
                onChange={handleChange}
                type='number'
                min='0'
            />
            <span>{isInputValueValid ? helperText : errorMessage}</span>
        </div>
    )
}


export { SettingsInput }
