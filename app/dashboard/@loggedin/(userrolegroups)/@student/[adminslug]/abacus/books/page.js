function AbacusBooks() {
  return (
    <div className="w-11/12 md:w-5/12 overflow-hidden mt-5 m-auto pb-[100px]">
      <div className="mt-5 md:mt-[80px] rounded-3xl w-full p-4 text-lg md:text-2xl bg-[#013030] text-white transition duration-500 ease-out mb-4">
        আসসালামু আলাইকুম, ইন্টারনেট মাদ্রাসার ফ্রি অ্যাবাকাস এবং কুরআনুল কারীম
        ক্ল্যাস রমজানের প্রথম দিন থেকে শুরু হবে ইং শা আল্লাহ। আপনারা আগে থেকেই
        প্রাকটিস করা এবং আমাদের ক্ল্যাস অনুসরণ করার জন্য অ্যাবাকাস কীট এবং
        প্রাথমিক লেভেলের বই দুটি সংগ্রহ করে রাখতে পারেন।
        <span className="float-right">
          <i className="text-lg fa fa-arrow-right"></i>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <img src="/images/play_nursery.jpg" />
          <div
            style={{
              padding: "10px 10%",
              fontSize: "16px",
              lineHeight: "22px",
              textAlign: "center",
              backgroundColor: "#efefef",
              fontWeight: "900",
              height: "100px",
            }}
          >
            <p>Package 1: Brain Math Abacus (Play & Nursery) + Abacus Kit</p>
          </div>
          <a
            className="p-5 bg-sky-500 block text-white text-center text-xl"
            href="/abacus-purchase"
          >
            {" "}
            <div className="style-1155">ক্রয় করুন</div>
          </a>
        </div>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0px 1px 5px rgba(0,0,0,0.3)",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <img src="/images/Level-1.jpg" />
          <div
            style={{
              padding: "10px 10%",
              fontSize: "16px",
              lineHeight: "22px",
              textAlign: "center",
              backgroundColor: "#efefef",
              fontWeight: "900",
              height: "100px",
            }}
          >
            <p>Package 2: Brain Math Abacus (Level 1) + Abacus Kit</p>
          </div>
          <a
            className="p-5 bg-sky-500 block text-white text-center text-xl"
            href="/abacus-purchase"
          >
            <div className="style-1155">ক্রয় করুন</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AbacusBooks;
