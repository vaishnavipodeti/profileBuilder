function ProfileView({ formData }) {
  return (
    <div>
   <div className="flex justify-between mb-3">
    <h3 className="text-sm text-gray-500 font-medium">LIVE PREVIEW</h3>
    <span className="text-sm text-gray-400">Updates as you type
    </span>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <div className="flex items-center gap-4">
    {formData.avatar ? (
    <img src={formData.avatar} alt="Profile" className="w-16 h-16 rounded-full object-cover"/>
    ) : (
    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
    {formData.name.charAt(0).toUpperCase() || '?'}
    </div>
    )}
    <div>
    <h2 className="text-lg font-bold italic text-gray-800">
    {formData.name || 'Your Name'}
    </h2>
    <p className="text-gray-500 italic">
    {formData.role || 'Job Title / Role'}
    </p>
    </div>
    </div>
    <p className="mt-5 text-gray-500 italic">
    {formData.bio || 'Short bio will appear here...'}
    </p>
    <p className="mt-3 text-gray-600">
    Skills: {formData.skills || 'Your skills will appear here...'}
    </p>
    </div>
    </div>
    )
}

export default ProfileView