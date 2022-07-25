const Chat = ({user}) => {
  console.log(user);
  return (
    user.map((element) => {
      console.log(element);
      return <div>{element.name}</div>
    })
  );
};

export default Chat;