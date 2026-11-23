function ProfileForm({ formData, setFormData, onSubmit }) {

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const clearForm = () => {
    setFormData({
      name: '',
      role: '',
      email: '',
      avatar: '',
      skills: '',
      bio: ''
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl border border-gray-200"
    >

      <div className="flex flex-col gap-5">

        <label className="font-medium text-sm">
          Full Name <span className="text-red-500">*</span>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="e.g. Alex Morgan"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <label className="font-medium text-sm">
          Role / Title <span className="text-red-500">*</span>

          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            type="text"
            placeholder="e.g. Frontend Developer"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <label className="font-medium text-sm">
          Email Address <span className="text-red-500">*</span>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="e.g. alex@example.com"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <label className="font-medium text-sm">
          Avatar Image URL <span className="text-gray-400">(optional)</span>

          <input
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            type="url"
            placeholder="https://example.com/avatar.jpg"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <label className="font-medium text-sm">
          Skills <span className="text-gray-400">(comma-separated)</span>

          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            type="text"
            placeholder="React, JavaScript, Tailwind, Git"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <label className="font-medium text-sm">
          Bio / About

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us a little about yourself and your passions..."
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg outline-blue-500"
          />
        </label>

        <div className="flex gap-3">

          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Save Profile
          </button>

          <button
            type="button"
            onClick={clearForm}
            className="border border-gray-300 px-6 rounded-lg hover:bg-gray-100"
          >
            Clear
          </button>

        </div>

      </div>
    </form>
  )
}

export default ProfileForm