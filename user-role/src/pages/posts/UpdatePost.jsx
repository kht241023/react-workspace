import {useParams} from "react-router-dom";
import {useState} from "react";

const UpdatePost = () => {
    // useParams = URLSearchParams 와 같은 기능
    const { postId } = useParams(); // URL 에서 postId 가져오기
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("일반");
    
    // 수정 버튼을 눌렀을 때 실행할 기능 생성
    const handleUpdate = () => {
        
    }
    return (
        <div className="UpdatePost-container">
            <h2>게시물 수정</h2>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="일반">일반</option>
                <option value="공지사항">공지사항</option>
                <option value="질문">질문</option>
                <option value="후기">후기</option>
            </select>

            <button onClick={handleUpdate}>수정</button>
        </div>
    )

};
export default UpdatePost;