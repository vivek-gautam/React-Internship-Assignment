import { createContext, ReactNode, useState, useContext } from "react";

type childrenProps = {
  children: ReactNode;
};
type UserType = {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};
const userContext = createContext<UserType>({} as UserType);
export const UserProvider = ({ children }: childrenProps) => {
  const [user, setUser] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser }}>
        {children}
    </userContext.Provider>
  );
};

export const isValidUser = () => useContext(userContext);
