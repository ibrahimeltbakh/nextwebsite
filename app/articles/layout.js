export const metadata = {
  title: "Articles",
};
export default function ({ children }) {
  return (
    <div>
      Articles page
      <div
        style={{
          backgroundColor: "blue",
          padding: "10px",
          textAlign: "center",
          width: "100%",
        }}>
        {children}
      </div>
    </div>
  );
}
