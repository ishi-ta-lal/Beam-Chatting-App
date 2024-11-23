import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
				<p className='text-center text-white'>Send a message to start the conversation!</p>
			)}
    </div>
  );
};

export default Messages;

//STARTER CODE FOR THIS FILE
// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages
