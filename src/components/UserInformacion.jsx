import { ReplyIcon } from './icons'

export function UserHeader ({ image, username, createdAt }) {
  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img src={image} alt='username' className='w-8' />
        <h2 className='font-bold text-[hsl(212,24%,26%)]'>
          {username}
        </h2>
        <p className='text-[hsl(211,10%,45%)] text-sm'>{createdAt}</p>
      </div>
      <div className='flex items-center gap-1 cursor-pointer'>
        <ReplyIcon />
        <p className='text-sm font-bold text-[hsl(238,40%,52%)]'>Reply</p>
      </div>
    </header>
  )
}
