import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'
import ProfileView from './components/ProfileView'
import ProfileList from './components/ProfileList'

function App() {
  const [page, setPage] = useState('create')

  const emptyForm = {
    name: '',
    role: '',
    email: '',
    avatar: '',
    skills: '',
    bio: ''
  }

  const [formData, setFormData] = useState(emptyForm)

  const [profiles, setProfiles] = useState(() => {
    return JSON.parse(localStorage.getItem('PROFILES')) || []
  })

  useEffect(() => {
    localStorage.setItem('PROFILES', JSON.stringify(profiles))
  }, [profiles])

  const addProfile = (e) => {
    e.preventDefault()

    const newProfile = {
      id: Date.now(),
      ...formData
    }

    setProfiles([...profiles, newProfile])
    setFormData({ ...emptyForm })
  }

  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar page={page} showPage={setPage} profiles={profiles}/>
  <main className="max-w-6xl mx-auto px-6 py-8">
   {page === 'create' && (
      <>
        <h1 className="text-2xl font-bold text-gray-900">
         Create Profile
        </h1>
    <p className="text-gray-500 mt-1 mb-7">Fill in your information to generate a profile card.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <ProfileForm formData={formData} setFormData={setFormData} onSubmit={addProfile}/>
    <ProfileView formData={formData} />
    </div>
          </>
        )}
      {page === 'profiles' && (
      <ProfileList profiles={profiles} deleteProfile={deleteProfile}
            showPage={setPage}
          />
        )}

      </main>
    </div>
  )
}

export default App