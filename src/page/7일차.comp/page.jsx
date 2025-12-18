import img1 from "../../assets/henney.jpg"; 
import img2 from "../../assets/henney.jpg";

export default function Study(){
    const obj1 = {
        title : '귀여운 유령사진',
        content : '작고 귀여운 하얀 유령',
        img : img2
    };
    const obj2 = {
        title : '노란 병아리',
        content : '작고 귀여운 노란 병아리 유령',
        img : img1
    };

    const lists = [obj1, obj2]; 

    return(
        <div>
            <h1>DIV 나누기</h1>
            <Page data ={obj1}></Page>
            <Page data ={obj2}></Page>
            
            <h3>구분선</h3>
            
            {lists.map((item, index) => (
                <Page key={index} data={item}/>
            ))}
        </div>
    )
}

function Page(props) {
    return(
        <div style={{
                display:'flex',
                border :"3px solid red",
                margin: "10px" // 보기 좋게 간격 추가
            }}>
            <img src={props.data.img}
            style={{
                width:'200px',
                height : '200px',
                objectFit:'cover',
                borderRadius :'50%',
                border : '1px solid red'
            }}/>
            <div>
                <h1>{props.data.title}</h1>
                <span>{props.data.content}</span>
            </div>
      </div>
    )
}