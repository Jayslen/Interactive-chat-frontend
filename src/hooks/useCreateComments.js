import { useContext, useEffect, useState } from 'react'
import { commentsContext } from '../context/CommnentsContext'

export function useCreateComment () {
  const { currentUser, setCommentsData, commentsData } = useContext(commentsContext)
  const [refresh, setRefresf] = useState(false)

  useEffect(() => {
    if (commentsData[2] === undefined) return
    const currentDate = new Date()
    const mapped = commentsData.slice(2).map((item) => {
      const date = Math.round((currentDate - new Date(item.createdData)) / 1000)
      let timeAgo
      if (date <= 60) {
        timeAgo = `${date} Seconds Ago`
      } else if(date > 60 && date < 3600 ) {
        timeAgo = `${Math.round(date/ 60)} Minutes Ago`
      } else if(date > 3600 && date < 86400) {
        timeAgo = `${Math.round(date/ 3600)} Hours Ago`
      }

      return {
        id: item.id,
        content: item.content,
        createdAt: timeAgo,
        score: item.score,
        user: {
          image: {
            png: item.user.image.png,
            webp: item.user.image.webp
          },
          username: currentUser.username
        },
        replies: item.replies,
        createdData: item.createdData
      }
    })
    setCommentsData([...commentsData.slice(0, 2), ...mapped])
  }, [refresh])

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new FormData(event.target))
    const newCommentsData = [...commentsData]
    const newComment = {
      id: +(Math.random() * 100).toFixed(2),
      content: query,
      createdAt: 'Now',
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
    newCommentsData.push(newComment)
    window.localStorage.setItem('comments', JSON.stringify(newCommentsData))
    setCommentsData(newCommentsData)
    setRefresf(!refresh)
  }
  return { handleSubmit, currentUser }
}
