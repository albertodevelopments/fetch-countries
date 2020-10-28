import { useState } from 'react'

export const useNumberFormat = population => {
    const [formattedPopulation, setFormattedPopulation] = useState(0)

    const formatPopulation = () => {
        const formattedNumber = population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

        setFormattedPopulation(formattedNumber)
    }

    return { formattedPopulation, formatPopulation }
}
