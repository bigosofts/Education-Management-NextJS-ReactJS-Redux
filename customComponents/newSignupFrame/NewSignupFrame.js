import SubMenu from "../SubMenu/SubMenu";
import MainMenu from "../Menu/Menu";
function NewSignupFrame() {
  return (
    <>
      <MainMenu />
      <SubMenu />
      <iframe
        style={{ position: "unset", width: "100%", height: "100vh" }}
        src="http://assunnahmuslimit.com/registration.php"
        title="description"
      ></iframe>
    </>
  );
}

export default NewSignupFrame;
