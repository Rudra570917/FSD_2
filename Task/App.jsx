import CN from './CN'
import CN2 from './CN2'
import App1 from './App1'
import './App.css'
import Mapf from './Mapf'
import Oc from './Oc'

function App(){
  let a='abc'
   let obj={name:'Mobile', price:20000}
  return(
    <>
    <h1>My first react app</h1>
    <h1>Hello {a.toUpperCase}</h1>
    <CN name="abc" age="23"/>
    <CN name="Rudra" age={19}/>
    <CN2 data={obj}/>
    <App1>
      
    </App1>
    <Mapf>
      
    </Mapf>
    <Oc>
      
    </Oc>
   
    </>
  )
}
export default App