import {MultiChatWindow, useMultiChatLogic, MultiChatSocket} from "react-chat-engine-advanced";


//server
const projectId: string = "c7f1138a-07ef-46bc-ae53-d3eb5eef312a"
const username: string = "Arvind"
const secret: string = "1234"


function App() {
  //logic
  const chatProps = useMultiChatLogic(projectId, username, secret)
  return (
    <div>
      {/*websocket*/}
      <MultiChatSocket {...chatProps}/>
      {/*components*/ }
     <MultiChatWindow {...chatProps} style={{height: "100vh"}} />
    </div>
  );
}

export default App;
