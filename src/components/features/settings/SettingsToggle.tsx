

type SettingsToggleProps = {
    toggleTitle: string
    toggleSubtitle: string
    state: boolean
    setter: (value: boolean) => void
}


const SettingsToggle = ({ toggleTitle, toggleSubtitle, state, setter }: SettingsToggleProps) => {

    return (
        <div>
            <h4>{toggleTitle}</h4>
            <span>{toggleSubtitle}</span>
            <input
                type='checkbox'
                checked={state}
                onChange={e => setter(e.target.checked)}
            />
        </div>
    )
}


export { SettingsToggle }