import SignupCondition from "@/customComponents/SignupCondition/SignupCondition";
import SignupStep from "@/customComponents/SignupStep/SignupStep";

function page(props) {
  return (
    <>
      <SignupCondition />
      <SignupStep />
    </>
  );
}

export default page;
