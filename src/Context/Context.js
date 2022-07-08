import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext()

const UserPageProvider = ({children}) => {
  const [updateButton, setUpdateButton] = useState([])
  const contextValues = React.useMemo(
    () => ({
        updateButton,
        setUpdateButton,
    }),
    [updateButton],
  )

  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>
}

export default UserPageProvider
export const UseUserContext = () => useContext(UserContext)
