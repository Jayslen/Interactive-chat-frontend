import { useContext, useState } from 'react';
import { commentsContext } from '../context/CommnentsContext';
import { decrese, findIndex, increse } from '../logic/helpers';

export function UseReplies({ data, parentElm }) {
  const { commentsData, setCommentsData, currentUser } = useContext(commentsContext);
  const [id, setId] = useState(false);
  const newComments = [...commentsData];

  const increseReply = () => {
    const index = findIndex({ arr: newComments, elementToMatch: parentElm.id });
    const replyIndex = findIndex({
      arr: newComments[index].replies,
      elementToMatch: data.id,
    });
    increse({ arr: newComments[index].replies[replyIndex] });
    localStorage.setItem('comments', JSON.stringify(newComments));
    setCommentsData(newComments);
  };

  const decreseReply = () => {
    const index = findIndex({ arr: newComments, elementToMatch: parentElm.id });
    const replyIndex = findIndex({
      arr: newComments[index].replies,
      elementToMatch: data.id,
    });
    decrese({ arr: newComments[index].replies[replyIndex] });
    localStorage.setItem('comments', JSON.stringify(newComments));

    setCommentsData(newComments);
  };

  const removeReplyComment = () => {
    const index = findIndex({ arr: newComments, elementToMatch: parentElm.id });
    const replyIndex = findIndex({
      arr: parentElm.replies,
      elementToMatch: data.id,
    });
    newComments[index].replies.splice(replyIndex, 1);
    localStorage.setItem('comments', JSON.stringify(newComments));

    setCommentsData(newComments);
  };

  const reply = () => {
    setId(!id)
  };

  const updatepReply = (event) => {
    event.preventDefault()
    const index = findIndex({arr:newComments, elementToMatch: parentElm.id})
    
    const replyIndex = findIndex({arr:newComments[index].replies, elementToMatch:data.id})
    
    const { query } = Object.fromEntries(new FormData(event.target))
    
    const newComment = {
      id: +(Math.random() * 100).toFixed(2),
      content: query,
      createdAt: 'Now',
      replyingTo: newComments[index].replies[replyIndex].user.username,
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp
        },
        username: currentUser.username
      },
      replies: [],
      createdData: new Date()
    }

    newComments[index].replies.splice(replyIndex + 1, 0 , newComment)
    localStorage.setItem('comments', JSON.stringify(newComments))
    setCommentsData(newComments)
    setId(null)
  }

  const editComment = (event) => {
    event.preventDefault()
    const index = findIndex({arr:newComments, elementToMatch: parentElm.id})
    const replyIndex = findIndex({arr:newComments[index].replies, elementToMatch:data.id})
    const { query } = Object.fromEntries(new FormData(event.target))

    newComments[index].replies[replyIndex].content = query
    localStorage.setItem('comments', JSON.stringify(newComments))
    setCommentsData(newComments)
    reply()
  }

  return { increseReply, decreseReply, removeReplyComment, reply, id, updatepReply,editComment };
}
