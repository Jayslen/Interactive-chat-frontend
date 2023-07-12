import { useContext } from 'react'
import { commentsContext } from '../context/CommnentsContext'
import { decrese, findIndex, increse } from '../logic/helpers'

export function UseReplies ({ data, parentElm }) {
  const { commentsData, setCommentsData } = useContext(commentsContext)
  const newComments = [...commentsData]

  const increseReply = () => {
    const index = findIndex({ arr: newComments, elementToMatch: parentElm.id })
    const replyIndex = findIndex({
      arr: newComments[index].replies,
      elementToMatch: data.id
    })
    increse({ arr: newComments[index].replies[replyIndex] })
    setCommentsData(newComments)
  }

  const decreseReply = () => {
    const index = findIndex({ arr: newComments, elementToMatch: parentElm.id })
    const replyIndex = findIndex({
      arr: newComments[index].replies,
      elementToMatch: data.id
    })
    decrese({ arr: newComments[index].replies[replyIndex] })
    setCommentsData(newComments)
  }
  return { increseReply, decreseReply }
}
