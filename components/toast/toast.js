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
      duration: 4000,
      zIndex: 999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-right",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <div className="allColor border border-white-200 rounded-md shadow-md py-5 px-10 text-white flex justify-center text-lg">
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
      duration: 4000,
      zIndex: 999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-right",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <div className="allColor border border-white-200 rounded-md shadow-md py-5 px-10 text-white flex justify-center text-lg">
          <span className="px-2 inline-block">
            <BiCheckSquare size={32} />
          </span>
          {message}
        </div>
      ),
    });
    toast(msg);
  },
  danger: (msg) => {
    toastConfig({
      duration: 4000,
      zIndex: 999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-right",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <p className="allColor border border-white-300 rounded-md shadow-md py-5 px-10 text-white flex justify-center text-lg">
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
      duration: 4000,
      zIndex: 999,
      className: "custom-toast",
      clickClosable: true,
      position: "top-right",
      maxVisibleToasts: 10,
      isReversedOrder: false,
      render: (message) => (
        <p className="allColor border border-white-300 rounded-md shadow-md py-5 px-10 text-white flex justify-center text-lg">
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
