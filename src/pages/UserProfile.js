import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  const users = useOutletContext();

  console.log("params:", params);
  console.log("users:", users);


  const user = users.find(user => user.id === parseInt(params.id));
  console.log(user)

  if (!user){
    return <h1>Loading...</h1>
  }

  return(
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};
export default UserProfile