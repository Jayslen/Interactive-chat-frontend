import { useContext, useState } from 'react';
import { commentsContext } from '../context/CommnentsContext';
import { UseComment } from '../hooks/UseComment';
import { CommentScore } from './CommentScore';
import { Reply } from './Reply';
import { UserHeader } from './UserHeader';
import { findIndex } from '../logic/helpers';
import { Popup } from './Popup';

export function Comment({ data }) {
  const [showPopup, setShowPopup] = useState(false);
  const { increseScore, decreseScore } = UseComment(data);
  const { commentsData, setCommentsData } = useContext(commentsContext);

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const removeComment = () => {
    const index = findIndex({ arr: commentsData, elementToMatch: data.id });
    const newComments = [...commentsData];
    localStorage.setItem(
      'comments',
      JSON.stringify(
        newComments.filter((item) => {
          return item.id !== data.id;
        })
      )
    );
    setCommentsData(
      newComments.filter((item) => {
        return item.id !== data.id;
      })
    );
  };

  return (
    <>
      {showPopup && <Popup removeMethod={removeComment} />}
      <div className="flex flex-col items-end gap-3">
        <section className="w-[600px] container">
          <CommentScore
            score={data.score}
            method={[increseScore, decreseScore]}
          />
          <article className="flex flex-col gap-2 w-full">
            <UserHeader
              image={data.user.image.png}
              username={data.user.username}
              createdAt={data.createdAt}
              method={openPopup}
            />
            <p className="text-[hsl(211,10%,45%)]">{data.content}</p>
          </article>
        </section>
        {data.replies?.map((repliesData) => {
          return (
            <Reply data={repliesData} key={repliesData.id} parent={data} />
          );
        })}
      </div>
    </>
  );
}
