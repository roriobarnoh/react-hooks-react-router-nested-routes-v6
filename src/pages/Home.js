import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home(){
    const users = useOutletContext();
    const userList = users.map(user => <UserCard key={user.id} user={user}/>);
    // console.log(users)

  return (
      <main>
        <h1>Home!</h1>
        <Outlet context={users}/>
        {userList}
      </main>
  );
};

export default Home;