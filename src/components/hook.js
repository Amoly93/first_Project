import { useContext } from "react";
import { SubjectContext } from "../context"; 

export const useSubject = () => {
    const context = useContext(SubjectContext);

    return context;
};
