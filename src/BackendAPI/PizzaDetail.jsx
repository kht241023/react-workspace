import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";


const PizzaDetail = () =>{
    const {id} = useParams(); //URL 에서 ID 값 가져오기
    // ajax 에서 URLSearchParams 와 같은 역할
    const [pizza, setPizza] = useState(null);

    // 현재 위치를 기반으로 하여 앞으가기 뒤로가기 와 같은 설정
    /*
    hook

    useHistory() 명칭으로 동작 -> useNavigate() 명칭으로 도입

    useNavigate() React Router 에서 제공하는 페이지 이동 함수

    navigate(-1) : 뒤로 가기
    navigate(1) : 앞으로 가기
    navigate("/") : 홈으로 이동
    navigate("경로설정") : Link 대신 위치 이동
    -> window.location.href 동일한 기능
    */
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }
    // Springboot GeneralStore 에서 @RequestMapping("/api") @GetMapping("/pizzas/{id}") 참조해서
    // axios get 을 이용해서 상세정보 데이터 호출
    return(
        <>
            <h1>피자 상세보기</h1>
            <p>가격 : pizza.price 원</p>
            <p>피자 설명 상세보기 : description 피자 정보 가져올 수 있도록 설정</p>

            <button onClick={ backBtn }>뒤로가기</button>
        </>
    )
}

export  default PizzaDetail;