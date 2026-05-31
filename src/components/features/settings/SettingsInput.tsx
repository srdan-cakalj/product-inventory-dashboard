

import styles from './SettingsInput.module.css'
import { validateSettingsInput } from '../../../helpers/validateSettingsInput'


type SettingsInputProps = {
    label: string
    helperText: string
    feedbackMessage: string
    lowStockThreshold: number
    setLowStockThreshold: (value: number) => void
    isInputValueValid: boolean
    setIsInputValueValid: (value: boolean) => void
}



const SettingsInput = ({
    label,
    helperText,
    feedbackMessage,
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
            setTimeout(() => {
                setIsInputValueValid(true)
            }, 1500)
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
            <span className={isInputValueValid ? styles.helperText : styles.feedbackText}>
                {isInputValueValid ? helperText : feedbackMessage}
            </span>
        </div>
    )
}


export { SettingsInput }
