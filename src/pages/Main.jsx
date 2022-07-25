import { Link } from 'react-router-dom';
import { useState } from 'react';

const Main = ({ addUser }) => {
  const [name, setName] = useState('');
  const enterChat = (name) => {
    addUser(name);
  };
  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" name="" id={name} onChange={onChange} />
      <Link to="/chat">
        <button onClick={() => enterChat(name)}>enter</button>
      </Link>
    </div>
  );
};

export default Main;
