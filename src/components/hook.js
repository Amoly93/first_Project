import { useContext } from "react";
import { SubjectContext } from "../context"; // Adjust the path as necessary

export const useSubject = () => {
    const context = useContext(SubjectContext);
    if (!context) {
        throw new Error("useSubject must be used within a SubjectProvider");
    }
    return context;
};
