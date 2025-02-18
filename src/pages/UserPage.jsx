// react router comes with a hook called useParams that allows us to use params to return specific page/ data
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function UserPage() {
  //  storing the useParams in a variable
  let { username } = useParams();
  // whatever username the user enters at the end of the url e.g. /users/homer or /users/spongebob the page will display that param

  const [searchParams, setSearchParams] = useSearchParams();
  //   gets the value of the search query
  const sort = searchParams.get("sort");

  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <>
      <h2>User ID: {username}</h2>
      <Link to={`/users/${username}`}>Users Profile</Link>
      <Link to={`/users/${username}/posts`}>Users Posts</Link>
      <Link to={`/users/${username}/likes`}>Users Likes</Link>
      <Outlet />
      {/* displays the search query value on page */}
      sort by:
      {/* changes the query string in the url according to what you select in the drop down list by calling the handleChange function */}
      <select value={searchParams.get("sort") || ""} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <h2>Profile for {username}</h2>
    </>
  );
}
