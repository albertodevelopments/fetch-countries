import { readFileSync } from 'fs'
import path from 'path'

export const countries = JSON.parse(
    readFileSync(path.join(__dirname, 'countries.json')).toString()
)

export const countriesEurope = JSON.parse(
    readFileSync(path.join(__dirname, 'countries-europe.json')).toString()
)
