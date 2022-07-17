import FirstPost from "../../../pages/posts/first-post";

export default {
  title: "Pages/FirstPost",
  component: FirstPost,
  parameters: {
    jest: 'first-post.test.jsx',
  },
};

export const FirstPostPage = () => <FirstPost />