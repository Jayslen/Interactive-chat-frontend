import { UseReplies } from '../hooks/UseReplies'
import { CommentScore } from './CommentScore'
import { UserHeader } from './UserInformacion'

export function Reply ({ data, parent }) {
  const { increseReply, decreseReply } = UseReplies({
    data,
    parentElm: parent
  })
  return (
    <article className='w-[500px] container'>
      <CommentScore score={data.score} method={[increseReply, decreseReply]} />
      <div className='flex flex-col gap-2 w-full'>
        <UserHeader image={data.user.image.png} username={data.user.username} />
        <p className='text-[hsl(211,10%,45%)]'>
          <span className='font-semibold text-[hsl(238,40%,52%)] '>
            @{data.replyingTo}
          </span>{' '}
          {data.content}
        </p>
      </div>
    </article>
  )
}
