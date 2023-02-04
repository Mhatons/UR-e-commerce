import { useEffect } from "react"
import { createContext } from "react"
import { useState } from "react"
import profilePics from "./Components/images/boy.jpg"

export const myContext = createContext()

function PostProvider({ children }) {
    const [login, setLogin] = useState(false)
    const [cart, setCart] = useState("5")
    const [darkbg, setDarkbg] = useState(false)

    const [grid, setGrid] = useState(false)

    const exportedDate = {
        profilePics,
        grid,
        setGrid,
        login,
        setLogin,
        cart,
        setCart,
        darkbg,
        setDarkbg

    }

    useEffect(() => {


    }, [])


    return (
        <myContext.Provider value={exportedDate}>
            {children}
        </myContext.Provider>
    )
}

export default PostProvider