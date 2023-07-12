import { Comment } from './Comment'
import { useContext } from 'react'
import { commentsContext } from '../context/CommnentsContext'

export function CommentsSection () {
const { commentsData } = useContext(commentsContext)

  return (
    <>
      {commentsData.map((data) => {
        return <Comment data={data} key={data.id} />
      })}
    </>
  )
}
