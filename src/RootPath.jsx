// ViewController 처럼 주소와 js 를 연결해주는 컨트롤러와 같은 설정
// 경로를 설정해주는 js 파일은 function 을 많이 사용

//const RootPath = () => {

// Switch -> Route 명칭 변환 도입
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";
// React 에서 작성하는 경로는 view Controller 와 관계 없음
// springboot resource 밑에 작성한 css / js / html 파일은 더이상 의미가 없음
// 위 역할을 react 에서 모두 할 것이기 때문
function RootPath() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PizzaList />} />
                <Route path="/pizzas/detail/:id" element={<PizzaDetail />} />
            </Routes>
        </Router>
    )
}

export default RootPath;