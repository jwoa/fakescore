import Image from 'next/image';

const Header = () => {
  return (
    <header className='py-5 px-2 md:px-0 flex justify-center flex-row flex-wrap items-center flex-wrap shadow-sm'>
      <h1 className='text-gray-700 cursor-pointer text-xl ml-2 md:ml-0 md:text-2xl flex justify-center'>
        Fake Score 2.0
      </h1>
    </header>
  );
};

export default Header;
