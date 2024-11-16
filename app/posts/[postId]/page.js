import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function postDetails({ params }) {
  const postId = params.postId;
  const loadingJsx = (
    <div>
      <h2 style={{ textAlign: "center" }}>Loading...</h2>
    </div>
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>postDetails</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
