const User = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* map  () 형태로 데이터 불러오기     ㅇㅇㅇ 님은 ㅁㅁ 세 입니다.    */}
                { users.map((user, index) => (
                        <li key={index}>{user.name} 님은 {user.age}세 입니다.</li>
                    ))
                }
            </ul>
        </div>
    )
}


const Product = ({products}) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {/* map  {} 형태로 데이터 불러오기     제품명 - ㅇㅇㅇ ,   제품가격 - ㅁㅁㅁ    */}
                { products.map((product, index) => (
                    <li key={index}>제품명 - {product.name},제품가격 - {product.price}</li>
                ))
                }
            </ul>
        </div>
    )
}


const Parent = () => {
    // 부모 컴포넌트에서 전달할 데이터 작성
    const userList = [
        {name: "가나다", age: 5},
        {name: "마바사", age: 15},
        {name: "아자차", age: 25}
    ];

    const productList = [
        {name: "노트북", price: 1200000},
        {name: "스마트폰", price: 800000},
        {name: "태블릿", price: 600000}
    ];

    return (
        <>
            {/* 각 데이터 자식 컴포넌트에 각각 전달 */}
            <User users={userList}/>
            <Product products={productList}/>
        </>
    )
}


const PracticePropsArray = () => {

    return (
        <div>
            {/*
            배열 형태의 데이터가 들어갈 때
            map 사용
            map 에서 배열 형태의 데이터가 존재하지 않으면 에러 발생
            Cannot read Properties of undefined (reading 'map') 발생
            주로 데이터 찾지 못할 때 발생하므로
            defaultProps 작성해줌으로써 에러 방지
            <User/>
            */}

            <Parent/>
        </div>
    )

}


export default PracticePropsArray;