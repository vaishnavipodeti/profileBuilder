function ProfileList({ profiles, deleteProfile, showPage }) {
  return (
    <div>
  <div className="flex justify-between items-center mb-6">
  <h1 className="text-2xl font-bold">
Saved Profiles ({profiles.length})</h1>
<button
onClick={() => showPage('create')}
className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Create New Profile
 </button>
</div>
{profiles.length === 0 ? (

<div className="bg-white p-10 rounded-xl text-center shadow-sm">
<h2 className="text-xl font-semibold"> No Profiles Found</h2>
<p className="text-gray-500 mt-2">Start creating your first profile.</p>
 </div>
) : (
<div className="grid grid-cols-1 md:grid-cols-2 gap-5"> {profiles.map(profile => (
<div key={profile.id} className="bg-white p-6 rounded-xl shadow-sm border">
{profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  {profile.name.charAt(0).toUpperCase()}
                </div>
              )}

              <h2 className="font-bold text-xl mt-3">
                {profile.name}
              </h2>

              <p className="text-blue-600">
                {profile.role}
              </p>

              <p className="text-gray-500 mt-2">
                {profile.email}
              </p>

              <p className="mt-3">
                {profile.bio}
              </p>

              <p className="text-sm mt-2 text-gray-600">
                Skills: {profile.skills}
              </p>

              <button
                onClick={() => deleteProfile(profile.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

               </div>

               ))}

               </div>

               )}

             </div>
            )
          }

        export default ProfileList