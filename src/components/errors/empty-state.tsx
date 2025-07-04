export default function EmptyState({ message }: { message: string }) {
  return (
    <section className="w-full relative bg-black pt-8 pb-6 sm:pt-16 md:pt-22.5 lg:pt-[67px] min-h-auto lg:min-h-[100vh] px-4 lg:px-20">
      <p className="font-normal text-[12px] text-center underline sm:no-underline sm:text-base text-white mb-2">
        {message}
      </p>
    </section>
  );
}
