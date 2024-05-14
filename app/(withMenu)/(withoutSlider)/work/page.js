import { selectDataTwo as selectWorks } from "@/apiservices/workapiservices";

import GalleryAll from "@/customComponents/GalleryALL/GalleryALL";

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function getData() {
  const res2 = await selectWorks({
    activeStatus: "active",
  });

  if (res2.status == "Alhamdulillah") {
    const dataObject = {
      work: null,
    };

    dataObject.work = res2.data;

    fisherYatesShuffle(dataObject.work);

    return dataObject;
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

const ObjArray2 = (data) => {
  const letImageObject = [];
  data.map((item) => {
    letImageObject.push({
      img: item.img,
      sid: item.sid,
      name: item.name,
    });
  });
  return letImageObject;
};

async function WorkPage() {
  const data = await getData();
  return (
    <>
      <GalleryAll linkObj={ObjArray2(data.work)} />
    </>
  );
}

export default WorkPage;
