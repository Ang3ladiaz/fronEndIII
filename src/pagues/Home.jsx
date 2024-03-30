import { useEffect, useState } from "react";
import {Card} from "../Components/common/Card";

import "./Home.css";
import { getUsers } from "../api/users";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home=()=> {
  const [users, setUsers] = useState([]);

useEffect(() => {

    const getData = async () => {
      let usersData = await getUsers();
      setUsers(usersData);
    };
    getData();

  }, []);

  return (
    <main className="container-card">
      <h1>Home</h1>
        <div className="card-grid">
        {users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
      )
    </main>
  );
}

