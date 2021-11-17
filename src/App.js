import Navbar from './Navbar';
import Blog from './Blog';
import './App.css';

function App() {
  const blogs = [{id: 0, title: "React is so cool!", body: "You can do so much"}, {id: 1, title: "JSX wow!", body: "JSX seems fun, might inspect later."}, {id: 2, title: "Virtual DOM?", body: "That sounds crazy!"}]
  const renderBlogs = blogs.map(blog => <Blog blogObj={blog} />)

  return (
    <div className="App">
      <Navbar name="Social" />
      {renderBlogs}
    </div>
  );
}

export default App;
