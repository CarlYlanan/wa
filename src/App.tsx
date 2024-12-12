import Button from "./Button"
function App() {


  return (
    <>
   <div className="w-screen h-screen bg-[#141414] flex justify-center items-center">
    <div className="bg-[#1F1F1F] p-6 flex flex-col items-center rounded-2xl"> 
      <img src="avatar-jessica.jpeg" className="w-24 h-24 rounded-full"></img>
      <h1 className="text-white text-2xl font-semibold"> Jessica Randall</h1>
      <h1 className="text-[#C4F82A] text-xs"> London, United Kingdom</h1>

      <h1 className="text-[#DFDFDF] text-xs mt-5"> "Front-end developer and avid reader."</h1>

      <Button text="GitHub"/>
      <Button text="Frontend Mentor"/>
      <Button text="LinkedIn"/>
      <Button text="Twitter"/>
      <Button text="Instagram"/>


    </div>
   </div>
    </>
  )
}

export default App
