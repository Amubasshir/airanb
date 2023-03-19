import Image from 'next/image';
const myLoader = ({ src, width, quality }) => {
  return `https://i.ibb.co/${src}?w=${width}&q=${quality || 75}`;
};
const Banner = (props) => {
  return (
    <div className="banner  relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        loader={myLoader}
        src="THkDZ2F/airbnb-heroo1.png"
        alt="Picture of the author"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-medium sm:text-lg">Not sure where to go?</p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-semibold text-purple-500 shadow-sm transition duration-300 hover:shadow-lg active:scale-90  ">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Banner;
