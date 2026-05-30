

import styles from './SettingsInput.module.css'
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
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>

            <input
                className={styles.input}
                value={lowStockThreshold}
                onChange={handleChange}
                type='number'
                min='0'
            />
            <span className={isInputValueValid ? styles.helperText : styles.errorText}>
                {isInputValueValid ? helperText : errorMessage}
            </span>
        </div>
    )
}


export { SettingsInput }
