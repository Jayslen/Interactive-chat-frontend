import { useContext, useState } from 'react'
import { UseReplies } from '../hooks/UseReplies'
import { CommentScore } from './CommentScore'
import { UserHeader } from './UserHeader'
import { Popup } from './Popup'
import { Footer } from './Footer'
import { commentsContext } from '../context/CommnentsContext'

export function Reply({ data, parent }) {
  const { increseReply, decreseReply, removeReplyComment, reply, id, updatepReply, editComment } = UseReplies({
    data,
    parentElm: parent
  })
  const { currentUser } = useContext(commentsContext)
  const isOwner = currentUser.username === data.user.username
  const [showPopup, setShowPopup] = useState(false)

  const openPopup = () => {
    setShowPopup(!showPopup)
  }
  return (
    <>
      {showPopup && <Popup removeMethod={removeReplyComment} methodOpenPopup={openPopup} />}
      <article className='w-[500px] container'>
        <CommentScore score={data.score} method={[increseReply, decreseReply]} />
        <div className='flex flex-col gap-2 w-full'>
          <UserHeader image={data.user.image.png} username={data.user.username} createdAt={data.createdAt} methodOpenPopup={openPopup} methodReply={reply} />
          <p className='text-[hsl(211,10%,45%)]'>
            <span className='font-semibold text-[hsl(238,40%,52%)] '>
              @{data.replyingTo}
            </span> <span>{data.content}</span>
          </p>
        </div>
      </article>

      {id ? <Footer methodReply={updatepReply} methodEdit={editComment} isOwner={isOwner} /> : null}


    </>

  )
}
