import { createContext, useState } from 'react'
import data from '../mocks/data.json'

export const commentsContext = createContext()

export function CommentsProvider ({ children }) {
  const localStorageData = JSON.parse(localStorage.getItem('comments'))
  const [commentsData, setCommentsData] = useState(localStorageData ? localStorageData : data.comments)
  const currentUser = data.currentUser
  return (
    <commentsContext.Provider value={{ commentsData, setCommentsData, currentUser }}>
      {children}
    </commentsContext.Provider>
  )
}
