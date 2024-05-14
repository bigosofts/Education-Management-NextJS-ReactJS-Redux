export const metadata = {
  title: "Student Login - শিক্ষার্থী এবং ওস্তাদ লগিন",
  description: "শিক্ষার্থী এবং ওস্তাদ ড্যাশবোর্ড লগিন",
};

function notLoggedInlayout({ children }) {
  return <>{children}</>;
}

export default notLoggedInlayout;
