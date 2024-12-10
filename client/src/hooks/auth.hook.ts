import { useCallback, useState, useEffect } from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | String>(null);
    const [token , setToken ] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId , setUserId ] = useState(null)

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

    const login = useCallback( (jwtKey : any, Id: any ) => {
        setToken(jwtKey)
        setUserId(Id)

        localStorage.setItem(storageName,JSON.stringify({
            userId: Id , token: jwtKey
        }))
    } , [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    } , [])

    useEffect(() => {
        const storedData = localStorage.getItem(storageName);
        if (storedData) {
            const data = JSON.parse(storedData);
            if (data && data.token) {
                login(data.token, data.userId);
            }
        }
        setReady(true);
    }, [login]);

   return { loading, request, error, token, userId, login, logout, ready };
}
