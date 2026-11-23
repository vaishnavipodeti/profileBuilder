function Navbar({ page, showPage, profiles }) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-xl font-bold text-blue-600"> Profile Builder</h2>
      <div className="flex gap-6">
     <button onClick={() => showPage('create')} className={`pb-2 ${
        page === 'create'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}>Create Profile</button>
      <button onClick={() => showPage('profiles')} className={`pb-2 ${
              page === 'profiles'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            Saved Profiles
          <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
              {profiles.length}
            </span>
            </button>

            </div>
          </div>
         </nav>
         )
         }

         export default Navbar