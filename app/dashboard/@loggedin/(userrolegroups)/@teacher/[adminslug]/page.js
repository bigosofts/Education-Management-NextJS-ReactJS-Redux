import DashWrapper from "@/components/dashboardPage/DashWrapper";
import DashSlider from "@/components/dashboardPage/DashSlider";
import DashExplore from "@/components/dashboardPage/DashExplore";


function page(props) {
  return (
    <DashWrapper>
      <DashSlider />
      <DashExplore/>
     
    </DashWrapper>
  );
}

export default page;
