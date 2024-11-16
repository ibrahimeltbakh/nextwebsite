export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            width: "70%",
            borderRadius: "6px",
            margin: "10px",
          }}>
          <h2>{post.title}</h2>
          <hr />
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
