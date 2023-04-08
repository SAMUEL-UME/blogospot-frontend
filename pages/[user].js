import Head from "next/head";
import Profile from "../src/components/template/user/Profile";

export default function Dashboard({ user, data, name }) {
  return (
    <>
      <Head>
        <title>{name} profile</title>
      </Head>
      <div>
        <Profile user={user} data={data} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { users } = await import("/data/data.json");

  // (users);
  const userPaths = users.map((user) => {
    return {
      params: {
        user: user.username,
      },
    };
  });

  userPaths;
  return {
    paths: userPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const user = context.params.user;
  const profileName = user;
  const { users } = await import("/data/data.json");
  const { data } = await import("/data/data.json");
  const getUser = users.find((post) => user === post.username);
  const allPost = data.filter((posts) => user === posts.author.username);
  allPost;
  return {
    props: { user: getUser, data: allPost, name: profileName },
  };
}
