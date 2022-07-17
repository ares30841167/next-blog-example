import { NextPage } from "next";
import Link from "next/link";
import { getSortedPostsData } from '../../lib/posts';

const FirstPost: NextPage<any> = ({ allPostsData }: { allPostsData: any }) => {
  return (
    <>
      <h1>First Post</h1>
      <ul>
        {allPostsData.map(({ id, date, title }: { id: string, date: string, title: string }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>
          <h2>
            Back to Home Page
          </h2>
        </a>
      </Link>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default FirstPost;