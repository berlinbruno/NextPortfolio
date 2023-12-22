import { SyncLoader } from "react-spinners";

export const LoadingScreen = () => {
  return (
    <div className=" h-screen w-full mb-4 flex justify-center items-center">
      <SyncLoader color="#6b26d9" size={30} />
    </div>
  );
};
