import { useContext } from 'react'
import { DeleteIcon, EditIcon, ReplyIcon } from './icons'
import { commentsContext } from '../context/CommnentsContext'

export function UserHeader ({ image, username, createdAt, method }) {
  const { currentUser } = useContext(commentsContext)
  const isOwner = currentUser.username === username

  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img src={image} alt='username' className='w-8' />
        <h2 className='font-bold text-[hsl(212,24%,26%)]'>{username}</h2>
        <p className='text-[hsl(211,10%,45%)] text-sm'>{createdAt}</p>
      </div>
      <aside className='flex gap-4'>
        {isOwner
          ? (
            <div className='flex items-center gap-1 cursor-pointer' onClick={method}>
              <DeleteIcon />
              <p className='text-sm font-bold text-[hsl(358,79%,66%)]'>Delete</p>
            </div>
            )
          : null}
        <div className='flex items-center gap-1 cursor-pointer'>
          {isOwner ? <EditIcon /> : <ReplyIcon />}
          <p className='text-sm font-bold text-[hsl(238,40%,52%)]'>
            {isOwner ? 'Edit' : 'Reply'}
          </p>
        </div>
      </aside>
    </header>
  )
}
