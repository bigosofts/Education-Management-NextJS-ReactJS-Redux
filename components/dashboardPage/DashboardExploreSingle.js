import Image from "next/image";
function DashboardExploreSingle({ image, link, text, push }) {
  return (
    <div
      onClick={() => push(link)}
      className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box p-5 md:p-12"
    >
      <Image className="m-auto h-12" width={100} height={100} src={image} />
      <h2 className="mt-2 text-[12px] md:text-2xl text-center">{text}</h2>
    </div>
  );
}

export default DashboardExploreSingle;
