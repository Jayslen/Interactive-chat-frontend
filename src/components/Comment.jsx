import {  useContext, useState } from 'react'
import { UseComment } from '../hooks/UseComment'
import { CommentScore } from './CommentScore'
import { Reply } from './Reply'
import { UserHeader } from './UserHeader'
import { Popup } from './Popup'
import { Footer } from './Footer'
import { commentsContext } from '../context/CommnentsContext'

export function Comment ({ data }) {
  const [showPopup, setShowPopup] = useState(false)
  const [allowEdit, setAllowEdit] = useState(true)
  const { increseScore, decreseScore, removeComment, id, reply, updatepReply, editComment } = UseComment(data)
  const {currentUser} = useContext(commentsContext)
  const isOwner = currentUser.username === data.user.username

  const openPopup = () => {
    setShowPopup(!showPopup)
  }

  const editMode = () => {
    setAllowEdit(!allowEdit)
  }

  return (
    <>
      {showPopup && <Popup removeMethod={removeComment} methodOpenPopup={openPopup} />}
      <div className='flex flex-col items-end gap-3'>
        <section className='w-[600px] container'>
          <CommentScore
            score={data.score}
            method={[increseScore, decreseScore]}
          />
          <article className='flex flex-col gap-2 w-full'>
            <UserHeader
              image={data.user.image.png}
              username={data.user.username}
              createdAt={data.createdAt}
              methodOpenPopup={openPopup}
              methodReply={reply}
              methodEdit={editMode}
            />
            <p className='text-[hsl(211,10%,45%)]'>{data.content}</p>
          </article>
        </section>

        {id ? <Footer methodReply={updatepReply} methodEdit={editComment} isOwner={isOwner}/> : null}
        
        {data.replies?.map((repliesData) => {
          return (
            <Reply data={repliesData} key={repliesData.id} parent={data} />
          )
        })}
      </div>
    </>
  )
}
