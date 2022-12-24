import React, { createContext, useContext } from 'react'


const Main = createContext();
 
export function MainContext({children}) {
    const [movies, setMovies] = React.useState([])

    const value = {
      movies,
      setMovies
    }
  return (
    <Main.Provider value={{value}}>
      {children}
    </Main.Provider>
  )
}
export function useMainContext(){
    return useContext(Main)
}
