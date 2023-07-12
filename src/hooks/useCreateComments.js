import { useContext, useEffect } from 'react';
import { commentsContext } from '../context/CommnentsContext';

export function useCreateComment() {
  const { currentUser, setCommentsData, commentsData } =
    useContext(commentsContext);
  useEffect(() => {
    if(commentsData[2] === undefined) return

    const currentDate = new Date()
    const oldData =  new Date(commentsData[2].createdData)
    const mapped = commentsData.slice(2).map((item) => {
      return {
        id: item.id,
        content: item.content,
        createdAt: (currentDate - new Date(item.createdData)) / 1000,
        score: item.score,
        user: {
          image: {
            png: item.user.image.png,
            webp: item.user.image.webp,
          },
          username: item.username,
        },
        replies: item.replies,
        createdData: item.createdData,
      }
    })
  }, [commentsData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new FormData(event.target));
    const newCommentsData = [...commentsData];
    const newComment = {
      id: +(Math.random() * 100).toFixed(2),
      content: query,
      createdAt: 'Now',
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
      createdData: new Date(),
    };
    newCommentsData.push(newComment);
    localStorage.setItem('comments', JSON.stringify(newCommentsData));
    setCommentsData(newCommentsData);
  };
  return { handleSubmit, currentUser };
}
