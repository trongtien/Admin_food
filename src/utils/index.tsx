import axios from 'axios'

export const baseUrl = "localhost:9000";

export const queryOption = async (url: string) => {
    if (url.length > 0) {
        const { data } = await axios.get(`${baseUrl}/${url.toLowerCase()}`)
        return data
    }
    throw new Error('Invalid QueryKey')
}
