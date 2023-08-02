import { createContext,useState} from "react";

const context = createContext();

const Context = ({ children }) => {
  
  const [data,setData] = useState([]);


  return (
    <context.Provider value={{ data,setData }}>
      {children}
    </context.Provider>
  );
};

export default Context;

export {context};
