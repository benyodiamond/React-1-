import axios from "axios";

const getData = async (userId) => {
  // user ıd

  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  // user post

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  console.log({ users, posts });
};

export default getData;
