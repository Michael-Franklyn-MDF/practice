export default function About() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          
          <p className="text-gray-700 text-lg mb-6">
            Welcome to our website! We're building something amazing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Fast</h3>
              <p className="text-gray-700">Lightning quick performance</p>
            </div>
            
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Secure</h3>
              <p className="text-gray-700">Your data is safe with us</p>
            </div>
            
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Modern</h3>
              <p className="text-gray-700">Built with latest tech</p>
            </div>
          </div>
        </div>
      </div>
    )
  }