const ProfilePage = ({ params }: any) => {
  return (
    <div className="flex justify-center  items-center min-h-screen">
      user id:{" "}
      <span className="p-3 bg-cyan-400 rounded-md m-2 ">{params.id}</span>
    </div>
  );
};

export default ProfilePage;
