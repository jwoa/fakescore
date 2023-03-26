import { useRef } from 'react';
import Image from 'next/image';
import notify from '../utils/toast';
import Link from 'next/link';

// Images
import logo from '../public/logo.png';


const Card = ({
  mr,
  type = '',
  onHandleFileChange,
  previewImage,
  cardId,
  fetchImage,
}) => {
  const imageURL = useRef('');

  const onHandleFetchImage = (id) => {
    const url = imageURL?.current?.value;

    if (!url) return notify('Invalid IMage URL');

    fetchImage(url, id);
  };

  return (
    <section className={`${mr ? 'md:mr-6 my-5' : ''}  md:my-0 `}>
      <Image src={logo} alt='logo' width={179} height={231} className="vert-move" />
      <h1 className='text-slate-800 text-xl mb-4 flex justify-center'>{type}</h1>
      <input
        type='file'
        id={type}
        accept='image/*'
        onChange={(e) => onHandleFileChange(e, cardId)}
      />
      <label
        htmlFor={type}
        className={`flex flex-col ${
          previewImage ? 'p-2' : 'justify-center items-center'
        } cursor-pointer leading-loose`}
      >
        {previewImage ? (
          <div>
            <Image
              src={previewImage}
              alt='image'
              height='240'
              width='240'
              objectFit='cover'
            />
            <div className='button'>
              <p className='text-white-600'>redo</p>
            </div>
            {/* <div className='button'>
            <a href="/social"><p className='text-white-600'>Next --&gt;</p></a>
            </div> */}
          </div>
        ) : (
          <>
            <div className='button'>
              <p className='text-white-600'>say cheese</p>
            </div>
          </>
        )}
        {previewImage && (
          <div className='button'>
            <Link to="/compare"><p className='text-white-600'>Next --&gt;</p></Link>
            </div>
            )}
            
      </label>

    </section>
  );
};

export default Card;
