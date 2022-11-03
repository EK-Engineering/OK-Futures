export default function VideoPlayer({ link }) {
  return (
    <video class="w-full max-w-full h-auto" controls="">
      <source src={link} type="video/mp4">
    </video>
  )
};

