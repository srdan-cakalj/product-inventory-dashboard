
type SettingsToggleProps = {
    toggleTitle: string
    toggleSubtitle: string
}


const SettingsToggle = ({ toggleTitle, toggleSubtitle }: SettingsToggleProps) => {
    return (
        <div>
            <h4>{toggleTitle}</h4>
            <span>{toggleSubtitle}</span>
        </div>
    )
}


export { SettingsToggle }