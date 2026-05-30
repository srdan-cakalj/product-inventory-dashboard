

import styles from './SettingsToggle.module.css'


type SettingsToggleProps = {
    toggleTitle: string
    toggleSubtitle: string
    state: boolean
    setter: (value: boolean) => void
}


const SettingsToggle = ({ toggleTitle, toggleSubtitle, state, setter }: SettingsToggleProps) => {

    return (
        <div className={styles.toggleRow}>

            <div>
                <h4 className={styles.title}>{toggleTitle}</h4>
                <span className={styles.subtitle}>{toggleSubtitle}</span>
            </div>

            <label className={styles.switch}>
                <input
                    type='checkbox'
                    checked={state}
                    onChange={e => setter(e.target.checked)}
                />
                <span className={styles.slider}></span>
            </label>

        </div>
    )
}


export { SettingsToggle }