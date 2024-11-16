/* import Todo from "../components/Todo"; */
import Link from "next/link";

export default async function postsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    /* cache:"no-cache" (SSR)*/
    /* cache:"force-cache" (SSg) */
    next: {
      //ISG (SSR + SSG )
      revalidate: 120,
    },
  });
  const posts = await response.json();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        {posts.map((post) => {
          return (
            <Link href={`posts/${post.id}`} style={{ width: "70%" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  width: "100%",
                  borderRadius: "6px",
                  margin: "10px",
                }}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 
      client side fetch
      <h1>
        <Todo />
      </h1>
       */}
    </div>
  );
}
