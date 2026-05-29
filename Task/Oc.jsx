function Oc(){
    const fun2=(e)=>{
        console.log(e.target.value)
    }
    const fun3=(e)=>{
       e.preventDefault()
    }
    return(
        <>
        <form onSubmit={fun3}>
        <input type='text' onChange={fun2}></input>
        <input type="submit"></input>
        </form>
       
        </>
    )
}
export default Oc