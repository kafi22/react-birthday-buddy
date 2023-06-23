import Blogs from "./Component/Blogs"
import GlobalContext from "./Contextapi/GlobalContext";

const App = () => {

  return (
    <GlobalContext>
    <div className=" container mx-auto max-w-2xl grid place-content-center min-h-screen">
      <Blogs />
    </div>
    </GlobalContext>
  )
}

export default App;