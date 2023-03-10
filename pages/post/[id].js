import React from "react";

export default function BlogPost({ data }) {
  return <div>{data.title}</div>;
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
  const id = context.params.id;
  const { data } = await import("/data/data.json");
  const postData = data.find((post) => id === post._id);
  return {
    props: { data: postData },
  };
}


