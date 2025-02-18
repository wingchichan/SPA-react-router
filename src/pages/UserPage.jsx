// react router comes with a hook called useParams that allows us to use params to return specific page/ data
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function UserPage() {
  //  storing the useParams in a variable
  let { username } = useParams();
  // whatever username the user enters at the end of the url e.g. /users/homer or /users/spongebob the page will display that param
  return (
    <>
      <h2>User ID: {username}</h2>

      <Link to={`/users/${username}`}>Users Profile</Link>
      <Link to={`/users/${username}/posts`}>Users Posts</Link>
      <Link to={`/users/${username}/likes`}>Users Likes</Link>
      <Outlet />
    </>
  );
}
