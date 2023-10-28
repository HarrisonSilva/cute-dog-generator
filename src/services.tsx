export const fetchDog = async () => {
    const URL = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(URL)
    if (!response.ok) {
        throw new Error('Error')
    }
    const data = await response.json()
    return data
}