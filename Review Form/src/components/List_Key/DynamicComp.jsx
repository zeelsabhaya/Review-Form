import Dom from "./Dom";

const DynamicComp = ({list}) =>{
    return (
        <div>
        <h2>Dynamic List</h2>
            <ol>
                {
                    list.map((curEle, index)=>{
                        return ( 
                            <li key={index}>{curEle}</li>
                            
                        )
                    })
                }
            </ol>
        </div>
    )
};

export default DynamicComp;

/*  <Dom key={index} name={'iPhone'} price={123} quantity={500} />  */