function Mapf(){
    let ob=[{id:1,name:'Rudra',mark:22},{id:2,name:'Dev',mark:21}]
    return(
        <>
        {ob.filter((i)=>i.mark===22).map((i)=>{
            return(
                <div key={i.id}> 
                    <h1>Name of Student={i.name.toUpperCase()}</h1>
                    <h1>Marks={i.mark+1}</h1>
                </div>
            )
        })}
        </>
    )
}
export default Mapf