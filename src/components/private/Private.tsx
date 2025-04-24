import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

const Private = ({ children }: { children: React.ReactNode }) => {
    const { user, token } = useSelector((state: RootState) => state.userSlice);

    if (user?.email && token?.accessToken) {
        return children;
    }
    return <Navigate to={`/login`} replace></Navigate>
};

export default Private;