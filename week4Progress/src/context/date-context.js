import { createContext, useContext, useReducer } from "react";

const DateContext = createContext();

const DateProvider = ({children}) => {
    return (
        <DateContext.Provider>
            {children}
        </DateContext.Provider>
    )
};

const useDate = () => useContext(DateContext);

export {useDate, DateProvider};