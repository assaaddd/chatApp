import React from 'react';
import {useAuthContext} from "../../context/AuthContext";
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime';

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassname = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bgColor = fromMe ? "bg-blue-500" : "bg-gray-200";

  return (
    <div className={`chat ${chatClassname}`}>
        <div className=' chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-black  ${bgColor}`}>{message.message}</div>
        <div className='chat-footer  text-xs flex gap-1 items-center text-white'>
          {formatedTime}
          </div>
    </div>
  )
}

export default Message





// import React from 'react'

// function Message() {
//   return (
//     <div className='chat chat-end'>
//         <div className=' chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="https://avatar.iran.liara.run/public/" alt="" />
//             </div>
//         </div>
//         <div className={'chat-bubble text-black bg-gray-200'}>Hi! What is up?</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//     </div>
//   )
// }

// export default Message
