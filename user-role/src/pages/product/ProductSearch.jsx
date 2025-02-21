import React, { useState } from "react";
import axios from "axios";

const ProductSearch = () => {
    // 검색 변수 이름
    const [keyword, setKeyword] = useState("");
    //검색 결과 조회 목록 변수 이름
    const [products, setProducts] = useState([]);

    const searchProducts = () => {
        // input 비어있는지 확인 후 비어있다면
        // "검색어를 입력하세요." 보여준 후 리턴
    }

    return (
        <div>
            <h2>상품 검색</h2>
            {/*  input onChange 없음   */}
            <input
                type="text"
                value={keyword}

            />
            <button onClick={searchProducts}>검색</button>

            <ul>
                {/* 제품이 1개 이상 존재한다면 ? (
          이름 카테고리 가격 보여주기
        ) : (
          <p>검색 결과가 없습니다.</p>
        ) */}
            </ul>
        </div>
    );
};

export default ProductSearch;