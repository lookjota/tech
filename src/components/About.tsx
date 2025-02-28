export function About() {
  return(
   
    <div className="sm:flex items-center max-w-screen-xl dark:bg-gray-800">
    
    <div className="sm:w-1/2 p-10 mt-5">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-white border-b-2 border-violet-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-violet-400">Our Company</span>
            </h2>
            <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
  )
}