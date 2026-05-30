

import styles from './SettingsSelect.module.css'
import type { CurrencyOptionsMap, ThemeOptionsMap, SortOptionsMap } from '../../../types/settingsTypes.ts'


type SettingsSelectProps<T> = {
    label: string
    helperText: string
    options: CurrencyOptionsMap | ThemeOptionsMap | SortOptionsMap
    state: T
    setter: (value: T) => void
}


const SettingsSelect = <T extends string>({
    label,
    helperText,
    options,
    state,
    setter }: SettingsSelectProps<T>) => {


    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>

            <select
                className={styles.select}
                value={state}
                onChange={e => setter(e.target.value as T)}
            >
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <span className={styles.helperText}>
                {helperText}
            </span>
        </div>
    )
}


export { SettingsSelect }
