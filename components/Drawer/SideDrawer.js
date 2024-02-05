import { IoMdClose } from "react-icons/io";
function SideDrawer() {
  return (
    <div className="bg-white w-5/6 box-border">
      <div className="flex justify-between p-2 h-1/6 bg-pink-100">
        <div className="text-xl text-slate-500">Abdullah Limon</div>
        <IoMdClose className="text-3xl text-slate-500" />
      </div>
      <div>
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
      </div>
    </div>
  );
}

export default SideDrawer;
