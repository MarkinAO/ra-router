import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import Layout from "./pages/Layout";
import SinglePost from "./pages/SinglePost";
import "./Headbook.css";

export default function Headbook() {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Navigate to={"/posts"} />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/new" element={<NewPost />} />
                <Route path="/posts/:id" element={<SinglePost />} />
                {/* <Route path="/forza" element={<ForzaPage />} /> */}
            </Route>                
        </Routes>
    )
}