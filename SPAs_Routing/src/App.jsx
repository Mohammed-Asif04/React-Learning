import { useRef} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link ,Outlet} from "react-router-dom";

function App() {
  const inputRef = useRef();
  function FocusonInput() {
    inputRef.current.focus();
  }
  
  return (
    <>
      <div>
        Sign up
        <input ref={inputRef} type={"text"} placeholder="Enter your name" />
        <button onClick={FocusonInput}>Submit</button>
      </div>
    
    </>
    
  );
}


// Routing and Layout

    //<div>
    //   <BrowserRouter>
    //     <Link to="/neet">Allen</Link>|
    //     <Link to="/neet/online-coaching-class-11">Class 11</Link>|
    //     <Link to="/neet/online-coaching-class-12">Class 12</Link>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route
    //           path="/neet/online-coaching-class-11"
    //           element={<Class11Program />}
    //         />
    //         <Route
    //           path="/neet/online-coaching-class-12"
    //           element={<Class12Program />}
    //         />
    //         <Route path="/" element={<Landing />} />
    //       </Route>
            
    //     </Routes>
    //     Footer | Contact us
    //   </BrowserRouter>
    // </div>

// function Layout() {
//   return (
//     <div> Neet Coaching
//       <Outlet />
//     </div>

//   )
// }

// function Landing() {
//   return <div>Welcome to allen</div>;
// }

// function Class11Program() {
//   return <div>NEET programs for Class 11th</div>;
// }

// function Class12Program() {
//   return <div>NEET programs for Class 12th</div>;
// }

export default App;
