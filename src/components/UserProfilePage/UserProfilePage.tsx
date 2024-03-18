import { useGetMyUser, useUpdateMyUser } from "@/api/userApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    console.log(isGetLoading);

    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
////////////////////////////////// 4:42
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
