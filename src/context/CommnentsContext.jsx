import { createContext, useState } from 'react'
import data from '../mocks/data.json'

export const commentsContext = createContext()

export function CommentsProvider ({ children }) {
  const [commentsData, setCommentsData] = useState(data.comments)

  return (
    <commentsContext.Provider value={{ commentsData, setCommentsData }}>
      {children}
    </commentsContext.Provider>
  )
}
