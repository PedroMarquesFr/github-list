import React, { useState } from "react";
import { handleFetchPersonName } from "../../services/api";
// import { Perfil } from "../../services/global";

// import { Container } from './styles';

const Header: React.FC = () => {
  const [name, setName] = useState("");
  const [test, setTest] = useState<{ login: string }>({ login: "load" });
  const handleFetch = async () => {
    const resp = await handleFetchPersonName(name);
    setTest(resp);
  };
  return (
    <div>
      Header
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={handleFetch}>Search</button>
      <p>{test.login}</p>
    </div>
  );
};

export default Header;
