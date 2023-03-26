import Image from 'next/image';
import Link from 'next/link';
import ButtonActions from '../components/ButtonActions';
// import Card from '../components/Card';
import Results from '../components/Results';
import Seo from '../components/Seo';
import useFile from '../hooks/useFile';

// Images
import logo from '../public/logo.png';

const cards = ['Social Media', 'Selfie'];

export default function Home() {
  const [
    previewImage,
    onHandleFileChange,
    onHandleReset,
    fetchImage,
    compareImage,
    loading,
    responseData,
  ] = useFile();

  return (
    <>
      <Seo />
      
      {/* Load the logo */}
      <div className='flex flex-col justify-center'>
        <Image src={logo} alt='logo' width={179} height={231} className="vert-move" />
        
        <h1 style={{marginTop: 40}}>Fake<br/>Score</h1>
        <p>Are you the realest?</p>
      </div>

      <Results loading={loading} responseData={responseData} />

      {/* Button to the compare page */}
      {/* <a
        className="button"
        href="/compare"
        rel="noopener noreferrer"
      >
        start
      </a> */}
      <Link href="/social" className="button">
        <a className='button'>Start</a>
      </Link>


      {/* <ButtonActions
        loading={loading}
        onHandleReset={onHandleReset}
        compareImage={compareImage}
      /> */}
    </>
  );
}
