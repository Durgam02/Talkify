import Message from "./Message";

const Messages = () => {
	return (
        // to scroll we used overflow-auto
		<div className='px-4 flex-1 overflow-auto'>
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
		</div>
	);
};
export default Messages;