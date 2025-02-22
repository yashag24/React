import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/yashag24")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export default Github;
export const GithubInfo = async () => {
  const res = await fetch("https://api.github.com/users/yashag24");
  return res.json();
};
