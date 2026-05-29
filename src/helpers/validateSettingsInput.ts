


const validateSettingsInput = (value: string) => {

    const valueAsNumber = Number(value);

    if (valueAsNumber < 0) {
        return null;
    }

    if (!Number.isInteger(valueAsNumber)) {
        return null;
    }

    return valueAsNumber;
}

export { validateSettingsInput }