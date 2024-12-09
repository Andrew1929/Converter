import { useCallback, useState } from "react"

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | String>(null);

    const request = useCallback(async ( 
        url : string, 
        method : string = "GET", 
        body: any| null = null,
        headers : any = {} 
    ) => {
        try {
            setLoading(true)

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url,{method, body, headers});
            const data = response.json();

            if(!response.ok) {
                throw new Error(`Щось пішло не так`);
            }

            setLoading(false)
            return data;
        } catch (error) {
            setLoading(false);
            setError(`Error : ${error}`)
        }
    }, [])

    return {loading, request, error}
}
