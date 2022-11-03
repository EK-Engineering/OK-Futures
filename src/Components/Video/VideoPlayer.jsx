// this component is styled to take up the fill width of it's parent container
// and center itself within the parent container as well
// make sure there is a width set on the parent container 

export default function VideoPlayer({ content }) {
  return (
    <video className="w-full max-w-full h-auto place-self-center" controls>
      <source src={content} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  )
};

