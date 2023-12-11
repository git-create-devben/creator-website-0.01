import img from "../assets/bg.png"
const gallery = () => {
  return (
    <main className="p-20 flex justify-center h-[100vh] w-full">
        <div className="flex flex-col gap-20">
            <div className="flex flex-row items-center justify-center"> 
              <img src={img} alt=""  className="rounded-full w-52 "/>
                <div className="flex flex-col gap-20px">
                 <div className="flex flex-row">
                  <h2>Christinadmrtzi</h2>
                  
                 </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </main>
  )
}

export default gallery