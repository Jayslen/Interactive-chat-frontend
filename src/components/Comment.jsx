import { UseComment } from '../hooks/UseComment'
import { CommentScore } from './CommentScore'
import { Reply } from './Reply'
import { UserHeader } from './UserInformacion'

export function Comment ({ data }) {
  const { increseScore, decreseScore } = UseComment(data)

  return (
    <>
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
            />
            <p className='text-[hsl(211,10%,45%)]'>{data.content}</p>
          </article>
        </section>
        {data.replies?.map((repliesData) => {
          return (
            <Reply data={repliesData} key={repliesData.id} parent={data} />
          )
        })}
      </div>
    </>
  )
}
