// this component is styled to take up the fill width of it's parent container
// and center itself within the parent container as well
// make sure there is a width set on the parent container 

export default function VideoPlayer({ content }) {
  return (
    <div className='flex flex-col max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
      <div class="flex flex-col m-5 ">
        <video className="h-auto" controls>
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <h3>our video says things</h3>
      </div>
    </div>
  )
};

