import React from 'react';

export type PostProps = {
  title: string;
  description: string;
  date: string;
};

const MyPost = (props: PostProps) => {
  return (
    <div className="my_post">
      <div className="post_title">{props.title}</div>
      <div className="post_description">{props.description}</div>
      <div className="post_date">{props.date}</div>
    </div>
  );
};

export default MyPost;
