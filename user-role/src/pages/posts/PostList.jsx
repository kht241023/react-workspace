import {useEffect, useState} from "react";
import apiService from "./apiService";
import {Link} from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(null);
    const [keyword, setKeyword] = useState(""); // keyword 는 단순히 검색어 이기 때문에 배열 XXXX

    useEffect(() => {
        apiService.getAllPosts(setPosts, setErr);
    }, []);




    // 검색 기능 추가
    function handleSearch() {
        if (keyword.trim()){
            apiService.searchPosts(keyword,setPosts,setErr())
        } else {
            alert("검색어가 없습니다.");
            apiService.getAllPosts(setPosts, setErr);

            return;
        }
    }
    return (
        <div>
            <h2>게시물 목록</h2>

            {/* 검색 입력 필드 */}
            <div>
                <input
                    type="text"
                    placeholder="검색어 입력"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={handleSearch}>검색</button>
            </div>

            {err && <p style={{ color: "red" }}>{err}</p>}

            <ul>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <li key={post.postId}>
                            <h3>{post.postTitle}</h3>
                            <p>{post.postContent}</p>
                            <Link to={`/posts/${post.postId}`}>이동하기</Link>
                        </li>
                    ))
                ) : (
                    <p>게시물이 없습니다.</p>
                )}
            </ul>
        </div>
    );
}
export default PostList;
