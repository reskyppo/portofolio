import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

import { db } from "../utils/firebase.js";
import CardSkills from "./CardSkills";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <div className="p-12 flex flex-col items-center">
      <div className="rounded-full h-48 w-48 bg-white border-4 border-black">
        <img src="/me.png" className="rounded-full w-full h-full" />
      </div>
      <h1 className="text-3xl font-semibold mt-4 mb-2">Resky Budi Nugroho</h1>
      <h5 className="text-gray-600 text-lg">
        Frontend Engineer at Privy Identitas Digital
      </h5>
      <div className="flex justify-center items-center mt-4 py-2 px-4">
        <SocialMedia
          url="mailto:reskybeen@gmail.com"
          tooltip="reskybeen@gmail.com"
          src="/icons/gmail.svg"
        />
        <SocialMedia
          url="https://github.com/reskyppo"
          tooltip="github.com/reskyppo"
          src="/icons/github.svg"
        />
        <SocialMedia
          url="https://leetcode.com/reskyyy"
          tooltip="leetcode.com/reskyyy"
          src="/icons/leetcode.svg"
        />
        <SocialMedia
          url="https://medium.com/@reskyppo"
          tooltip="medium.com/@reskyppo"
          src="/icons/medium.svg"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const handleSubmit = async () => {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    try {
      await setDoc(doc(db, "ara", "date"), {
        title: "ara",
        description: "adf AFDAF",
        completed: false,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
  };
  const fetchData = async () => {
    const docRef = doc(db, "ara", "date");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const date = new Date(docSnap.data().created.seconds * 1000);
      console.log("Document data:", date);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="p-4 grid grid-cols-2 lg:grid-cols-5">
        <CardSkills skill="Next Js" />
      </div>
      <button onClick={handleSubmit}>tes</button>
    </>
  );
};

const Main = () => {
  return (
    <div className="w-screen">
      <div className="w-2/3 mx-auto">
        <Header />
        <Skills />
      </div>
    </div>
  );
};

export default Main;
