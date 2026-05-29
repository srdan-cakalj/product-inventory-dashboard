

import { useState } from 'react'
import { PageLayout } from '../components/layout/PageLayout.tsx'
import { SettingsSectionLayout } from '../components/features/settings/SettingsSectionLayout.tsx'
import { SettingsToggle } from '../components/features/settings/SettingsToggle.tsx'
import { SettingsInput } from '../components/features/settings/SettingsInput.tsx'
import { SettingsSelect } from '../components/features/settings/SettingsSelect.tsx'
import type { CurrencyOptionsMap, ThemeOptionsMap, SortOptionsMap } from '../types/settingsTypes.ts'
import type { CurrencyOptions, ThemeOptions, SortOptions } from '../types/settingsTypes.ts'


type SettingsPageProps = {
    title: string
    subtitle: string
    lowStockThreshold: number
    setLowStockThreshold: (value: number) => void
    currency: CurrencyOptions
    setCurrency: (value: CurrencyOptions) => void
    theme: ThemeOptions
    setTheme: (value: ThemeOptions) => void
    defaultSortOption: SortOptions
    setDefaultSortOption: (valud: SortOptions) => void
    sortOptionsMap: SortOptionsMap
}


const currencyOptionsMap: CurrencyOptionsMap = [
    { value: 'EUR', label: 'EUR - Euro (€)' },
    { value: 'USD', label: 'USD - US Dollar ($)' },
    { value: 'GBP', label: 'GBP - British Pound (£)' },
]


const themeOptionsMap: ThemeOptionsMap = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
]





const SettingsPage = ({
    title,
    subtitle,
    lowStockThreshold,
    setLowStockThreshold,
    currency,
    setCurrency,
    theme,
    setTheme,
    defaultSortOption,
    setDefaultSortOption,
    sortOptionsMap }: SettingsPageProps) => {


    const [isInputValueValid, setIsInputValueValid] = useState(true)


    return (
        <PageLayout
            title={title}
            subtitle={subtitle}
        >

            <SettingsSectionLayout
                headerTitle='Inventory Preferences'
                headerSubtitle='Manage how products are displayed and tracked in your inventory.'
            >
                <>
                    <SettingsInput
                        label='Low Stock Threshold'
                        helperText='Products with stock at or below this number will be marked as low stock.'
                        errorMessage='Please enter a whole number greater than or equal to 0.'
                        lowStockThreshold={lowStockThreshold}
                        setLowStockThreshold={setLowStockThreshold}
                        isInputValueValid={isInputValueValid}
                        setIsInputValueValid={setIsInputValueValid}
                    />

                    <SettingsSelect
                        label='Default Sort Option'
                        helperText='Choose how products are sorted when the product list opens.'
                        options={sortOptionsMap}
                        state={defaultSortOption}
                        setter={setDefaultSortOption}
                    />
                </>

                <SettingsToggle
                    toggleTitle='Show Out-of-Stock Products'
                    toggleSubtitle='Display products that currently have 0 items in stock.'
                />

            </SettingsSectionLayout>


            <SettingsSectionLayout
                headerTitle='Display Preferences'
                headerSubtitle='Customize how product information is shown.'
            >
                <>
                    <SettingsSelect
                        label='Currency'
                        helperText='Choose the currency symbol used for product prices.'
                        options={currencyOptionsMap}
                        state={currency}
                        setter={setCurrency}
                    />

                    <SettingsSelect
                        label='Theme'
                        helperText='Choose your preferred visual theme.'
                        options={themeOptionsMap}
                        state={theme}
                        setter={setTheme}
                    />
                </>

                <SettingsToggle
                    toggleTitle='Show Product Images'
                    toggleSubtitle='Display product images in the product table.'
                />

            </SettingsSectionLayout>

        </PageLayout>
    )
}


export { SettingsPage }