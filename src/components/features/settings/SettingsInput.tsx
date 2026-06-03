
import { useState } from 'react'
import styles from './SettingsInput.module.css'
import { validateSettingsInput } from '../../../helpers/validateSettingsInput'


type SettingsInputProps = {
    label: string
    helperText: string
    feedbackMessage: string
    lowStockThreshold: number
    setLowStockThreshold: (value: number) => void
}



const SettingsInput = ({
    label,
    helperText,
    feedbackMessage,
    lowStockThreshold,
    setLowStockThreshold }: SettingsInputProps) => {


    const [isInputValueValid, setIsInputValueValid] = useState(true)
    const [inputValue, setInputValue] = useState<string>(String(lowStockThreshold))


    const handleBlur = () => {

        if (inputValue === '') {
            setInputValue(String(lowStockThreshold))
            return
        }

        setLowStockThreshold(Number(inputValue))
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value === '') {
            setIsInputValueValid(true)
            setInputValue('')
            return
        }

        const validationResult = validateSettingsInput(e.target.value)

        if (validationResult !== null) {
            setInputValue(validationResult)
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
                value={inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
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
