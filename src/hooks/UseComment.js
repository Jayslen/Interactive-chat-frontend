import { commentsContext } from '../context/CommnentsContext'
import { useContext, useState } from 'react'
import { findIndex, increse, decrese } from '../logic/helpers'

export function UseComment (data) {
  const [id, setId] = useState(false)
  const { commentsData, setCommentsData, currentUser } = useContext(commentsContext)
  const newComments = [...commentsData]

  const increseScore = () => {
    const index = findIndex({ arr: newComments, elementToMatch: data.id })
    increse({ arr: newComments[index] })
    setCommentsData(newComments)
    localStorage.setItem('comments', JSON.stringify(newComments))
  }

  const decreseScore = () => {
    const index = findIndex({ arr: newComments, elementToMatch: data.id })
    decrese({ arr: newComments[index] })
    setCommentsData(newComments)
    localStorage.setItem('comments', JSON.stringify(newComments))
  }

  const removeComment = () => {
    const newComments = [...commentsData]
    localStorage.setItem(
      'comments',
      JSON.stringify(
        newComments.filter((item) => {
          return item.id !== data.id
        })
      )
    )
    setCommentsData(
      newComments.filter((item) => {
        return item.id !== data.id
      })
    )
  }

  const reply = () => {    
    setId(!id)
  }

  const updatepReply = (event) => {
    event.preventDefault()
    const index = findIndex({arr:newComments, elementToMatch: data.id})
    const { query } = Object.fromEntries(new FormData(event.target))
    const newComment = {
      id: +(Math.random() * 100).toFixed(2),
      content: query,
      createdAt: 'Now',
      replyingTo: newComments[index].user.username,
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp
        },
        username: currentUser.username
      },
      replies: [],
      createdData: new Date()
    }
    newComments[index].replies.push(newComment)
    localStorage.setItem('comments', JSON.stringify(newComments))
    setCommentsData(newComments)
    setId(null)
  }

  const editComment = (event) => {
    event.preventDefault()
    const index = findIndex({arr:newComments, elementToMatch: data.id})
    const { query } = Object.fromEntries(new FormData(event.target))
    newComments[index].content = query
    setCommentsData(newComments)
    reply()
  }

  return { increseScore, decreseScore, removeComment, id, reply, updatepReply, editComment }
}
