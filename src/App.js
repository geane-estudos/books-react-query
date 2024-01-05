import "./App.css";
import { useQuery } from "@tanstack/react-query";
import BOOKS from "./posts";

function App() {
  const BooksQuery = useQuery({
    queryKey: ["books"],
    queryFn: () => wait(1000).then(() => [...BOOKS]),
  });


  if (BooksQuery.isLoading) return <h1>Loading...</h1>;
  if (BooksQuery.isError) return <h1>{JSON.stringify(BooksQuery.error)}</h1>;

  return (
    <section>
      <h1>Books</h1>
      <div>
        {BooksQuery.data.map((book) => (
          <li>{book.id} - {book.title} - {book.synopsis}</li>
        ))}
      </div>
    </section>
  );
}
function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
export default App;
