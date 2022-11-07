// this component is styled to take up the fill width of it's parent container
// and center itself within the parent container as well
// make sure there is a width set on the parent container 

export default function VideoPlayer({ content }) {
  return (
    <div className='flex flex-col w-100 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
      <div class="flex flex-row m-5">
        <video className="h-80" controls>
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="m-4">
          <h3 className="font-bold text-3xl tracking-wide">What is OK Futures?</h3>
          <p className="text-lg">The view of the earth from the moon fascinated me - a small disk, 240,000 miles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the same wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.</p>
        </div>
      </div>
    </div>
  )
};

