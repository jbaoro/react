    import { useState } from "react";
    
    export default function Study() {
        let msg = "hello world";
        let obj = {title :'책 제목 ', content : '책 내용'};
        const [count,setCount] = useState(0);
        return (
            <div>
                <h1>자식과 부모의 데이터 전달</h1>
                <자식 datamsg={msg} dataBook={obj}/>
                <자식2 dataCount ={count}/>
                <input type="button" value="숫자 증가"
                onClick={()=> {
                    setCount(count+1);
                }}
             />
            </div>
        )
    }

    function 자식2 (props){
        return(
            <div style={{width :'100vw',
                height : '200px',
                border : '2px red solid'
            }}> <h3>자식 Compoenet 영역</h3>
            {props.dataCount}
            </div>
        )
    }   


    function 자식 (props){
        return(
            <div style={{width :'100vw',
                height : '200px',
                border : '2px red solid'
            }}> <h3>자식 Compoenet 영역</h3>
            {props.dataMsg}<br/>
            책 제목 : {props.dataBook.title} / 책 내용 :{props.dataBook.content}
            </div>
        )
    }