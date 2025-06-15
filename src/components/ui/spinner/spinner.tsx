import Image from 'next/image';
export const Spinner = () => {
  return (
    <>
      <Image
        src="/assets/logo/ezimo_logo.png"
        alt="Loading..."
        width={100}
        height={100}
        className="animate-bounce"
        priority
      />
      <span className="sr-only">Loading</span>
    </>
  );
};
