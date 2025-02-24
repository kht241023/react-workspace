// axios. 작성했던 기능을 모아서 설정한다음 각 jsx 파일로 전달


// 프링부트 실행 포트 restcontroller 에서 requestMapping 에 작성한 api 를 그대로 작성
import axios from "axios";

const API_POST_URL = "http://localhost:8080/api/posts";


const apiService = {
    // 외부에서 사용할 메서드 명칭 :
    // 기능설정 (파라미터값) {
    //            기능작성
    // }
    getAllPosts:
        function (setPosts, setErr) {
            axios
                .get(API_POST_URL)
                .then(
                    (res) => {
                        setPosts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        alert("게시물을 불러오는 중 오류가 발생했습니다.");
                        setErr("게시판 목록 보기 실패");
                        console.log("err 문제 개발자가 확인하기 : ", err);
                    }
                )
        },

    getPostById:
        function (postId, setPost, setErr) {
            axios
                //.get(API_POST_URL + postId) //http://localhost:8080/api/posts1
                //.get(API_POST_URL + "/"+ postId) //http://localhost:8080/api/posts1
                .get(`${API_POST_URL}/${postId}`) //http://localhost:8080/api/posts1
                .then(
                    res => setPost(res.data)
                )
                .catch(
                    err => {
                        alert("백엔드에서 데이터를 가져올 수 없습니다.");
                        console.log("개발자만 무슨 문제인지 확인할 수 있도록 설정 : ", setErr(err));
                    }
                )

        },

    searchPosts:
        function (keyword, callback, errorCallback) {
            // encodeURIComponent -> 영어, 숫자 이외 값이 왔을 때 문제가 생길 경우 UTF-8 로 한글 깨짐 없도록 설정
            // 예전 코드에선 필수 였으나, 근래 필수
            axios.get(`${API_POST_URL}/search?keyword=${encodeURIComponent(keyword)}`)
                .then(response => callback(response.data))
                .catch(error => errorCallback(error));
        },

    suggestedPosts:
        function (keyword, callback, errorCallback) {
            axios
                .get(`http://localhost:8080/api/posts/search?keyword=${value}`)
                .then(
                    (res) => {
                        const 제안리스트 = res.data?.map(post => post.postTitle) || [];
                        setSugs(제안리스트);
                        setShow(true);
                    }
                )
                .catch(
                    // 백엔드에서 검색어를 입력했을 때 추천하는 검색 리스트 가져오기에 문제가 발생했을 때는
                    // 클라이언트한테 문제가 발생했음을 알려줄 필요 X
                    // 추천 검색어 리스트를 비우고 보여주지 않음 설정
                    (err) => {
                        setSugs([]);
                        setShow(false);
                    }
                )
        },


    // 자바스크립트는 , 뒤에 다른 값이 존재하지 않아도
    // 문제가 발생하지 않으므로
    // 기능이나 목록을 작성할 때
    // , 를 작성해주는 것이 가장 좋음!

}

export default apiService;












