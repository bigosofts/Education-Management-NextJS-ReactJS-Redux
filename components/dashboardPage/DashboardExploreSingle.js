import Image from "next/image";
function DashboardExploreSingle({ image, link, text, push, show }) {
  if (show == "none") {
    return "";
  } else {
    return (
      <div
        onClick={() => push(link)}
        className="cursor-pointer w-full shadow-md border-[1px] border-slate-200 bg-white m-1 md:mt-5 rounded-2xl border-box mx-0 p-5 md:p-12 relative"
      >
        {!show ? (
          <div className="bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 z-10 h-full w-full rounded-2xl"></div>
        ) : (
          ""
        )}
        <Image className="m-auto h-12" width={100} height={100} src={image} />
        <h2 className="mt-2 text-[12px] md:text-2xl text-center">{text}</h2>
      </div>
    );
  }
}

export default DashboardExploreSingle;
