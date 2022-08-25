import { db } from "@/utils/firebase";
import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

interface Values {
  fullName: string;
  position: string;
  company: string;
  image: string;
}
const Biodata = () => {
  const [values, setValues] = useState<Values>({
    fullName: "",
    position: "",
    company: "",
    image: "",
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  const getBase64 = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload = () => {
      setValues({ ...values, image: reader.result } as Values);
    };
  };
  const fetchData = async () => {
    const docRef = doc(db, "biodata", "me");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setValues({
        fullName: docSnap.data().fullName,
        position: docSnap.data().position,
        company: docSnap.data().company,
        image: docSnap.data().image,
      } as Values);
    } else {
      // doc.data() will be undefined in this case
      setEmpty(true);
      console.log("No such document!");
    }
  };

  const setData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await setDoc(doc(db, "biodata", "me"), {
        ...values,
        created: Timestamp.now(),
      });
      setDisabled(false);
    } catch (err) {
      console.log(err);
      setDisabled(false);
    }
  };
  const updateData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await updateDoc(doc(db, "biodata", "me"), {
        ...values,
        created: Timestamp.now(),
      });
      setDisabled(false);
    } catch (err) {
      console.log(err);
      setDisabled(false);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    empty ? setData(e) : updateData(e);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className="w-full max-w-lg" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={values.fullName}
            type="text"
            name="fullName"
            onChange={(e) =>
              setValues({ ...values, fullName: e.target.value } as Values)
            }
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Position
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={values.position}
            type="text"
            name="position"
            onChange={(e) =>
              setValues({ ...values, position: e.target.value } as Values)
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={values.company}
            type="text"
            onChange={(e) =>
              setValues({ ...values, company: e.target.value } as Values)
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Upload file
          </label>
          <input
            // value={values.image}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="file"
            onChange={(e) => getBase64(e.target.files)}
          />
        </div>
      </div>

      <button
        className={disabled ? "btn-disabled" : "btn-primary"}
        disabled={disabled}
      >
        Submit
      </button>
    </form>
  );
};

export default Biodata;
