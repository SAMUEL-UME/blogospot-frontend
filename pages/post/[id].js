import React from "react";
import Post from "../../src/components/template/Post/Post";

export default function BlogPost({ data }) {
  return (
    <div>
      <Post data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await import("/data/data.json");
  const allPaths = data.map((ev) => {
    return {
      params: {
        id: ev._id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  context;
  const id = context.params.id;
  const { data } = await import("/data/data.json");
  const postData = data.find((post) => id === post._id);
  return {
    props: { data: postData },
  };
}
