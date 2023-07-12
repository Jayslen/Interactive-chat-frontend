import { commentsContext } from '../context/CommnentsContext'
import { useContext } from 'react'
import { findIndex, increse, decrese } from '../logic/helpers'

export function UseComment (data) {
  const { commentsData, setCommentsData } = useContext(commentsContext)
  const newComments = [...commentsData]

  const increseScore = () => {
    const index = findIndex({ arr: newComments, elementToMatch: data.id })
    increse({ arr: newComments[index] })
    setCommentsData(newComments)
    localStorage.setItem('comments', JSON.stringify(newComments));

  }

  const decreseScore = () => {
    const index = findIndex({ arr: newComments, elementToMatch: data.id })
    decrese({ arr: newComments[index] })
    setCommentsData(newComments)
    localStorage.setItem('comments', JSON.stringify(newComments));

  }

  return { increseScore, decreseScore }
}
