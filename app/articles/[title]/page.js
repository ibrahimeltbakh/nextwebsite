export default function articleTitle(props) {
  console.log(props);
  return (
    <div>
      <h1>article Title</h1>
      <h3>{props.params.title}</h3>
    </div>
  );
}
