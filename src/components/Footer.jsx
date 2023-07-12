import { useCreateComment } from '../hooks/useCreateComments'

export function Footer () {
  const {handleSubmit,currentUser} = useCreateComment()  
  return (
    <footer className='w-[600px] container'>
      <img
        src={currentUser.image.png}
        alt={currentUser.username + 'avatar'}
        className='w-10 h-10'
      />
      <form className='flex grow gap-2' onSubmit={handleSubmit}>
        <textarea
          placeholder='Write your message'
          rows={4}
          name='query'
          className='border border-gray-500 grow resize-none p-1'
        />
        <button className='h-10 p-2 rounded text-white bg-[hsl(238,40%,52%)]'>
          Send
        </button>
      </form>
    </footer>
  )
}
