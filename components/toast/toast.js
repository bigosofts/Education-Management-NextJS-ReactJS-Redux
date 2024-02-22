import toast, { toastConfig } from "react-simple-toasts";
import {
  BiCheckSquare,
  BiNoEntry,
  BiShieldQuarter,
  BiMessageRoundedDetail,
} from "react-icons/bi";

// specify the theme in toastConfig

const mytoast = {
  success: (msg) => {
    toastConfig({
      duration: 6000,
      zIndex: 999999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-center",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <div className="border border-white-200 rounded-md shadow-md py-1 md:py-5 px-2 md:px-10 text-white flex justify-center text-md md:text-3xl bg-[#013030]">
          <span className="px-2 inline-block">
            <BiCheckSquare size={32} />
          </span>
          {message}
        </div>
      ),
    });
    toast(msg);
  },
  warning: (msg) => {
    toastConfig({
      duration: 6000,
      zIndex: 999999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-center",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <div className="border border-white-200 rounded-md shadow-md py-1 md:py-5 px-2 md:px-10 text-white flex justify-center text-md md:text-3xl bg-orange-400">
          <span className="px-2 inline-block">
            <BiShieldQuarter size={32} />
          </span>
          {message}
        </div>
      ),
    });
    toast(msg);
  },
  danger: (msg) => {
    toastConfig({
      duration: 6000,
      zIndex: 999999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-center",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <p className="border border-white-200 rounded-md shadow-md py-1 md:py-5 px-2 md:px-10 text-white flex justify-center text-md md:text-3xl bg-red-400">
          <span className="px-2 inline-block">
            <BiNoEntry size={32} />
          </span>
          {message}
        </p>
      ),
    });
    toast(msg);
  },
  info: (msg) => {
    toastConfig({
      duration: 6000,
      zIndex: 999999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-center",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <p className="border border-white-200 rounded-md shadow-md py-1 md:py-5 px-2 md:px-10 text-white flex justify-center text-md md:text-3xl bg-sky-400">
          <span className="px-2 inline-block">
            <BiMessageRoundedDetail size={32} />
          </span>
          {message}
        </p>
      ),
    });
    toast(msg);
  },
};

export default mytoast;
