import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Createscape</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Build a workspace that transforms your creativity
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive guides to standing desks, ergonomic chairs, lighting, and everything else creators need to build the perfect setup.
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Get Weekly Setup Tips</h2>
          <p className="text-gray-600 mb-6">
            New guides, product reviews, and creator interviews every week.
          </p>
          {/* Kit form embed goes here */}
          <p className="text-sm text-gray-500"><em>Email signup coming soon</em></p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Popular Guides</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/posts/standing-desk" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Standing Desk Buyer's Guide</h3>
            <p className="text-gray-600">Compare Uplift, FlexiSpot, Autonomous, and more. Find the perfect desk for your setup.</p>
          </Link>
          
          <Link href="/posts/ergonomic-chairs" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Best Ergonomic Chairs</h3>
            <p className="text-gray-600">From budget Eureka to premium Aeron. Chairs that support long streams.</p>
          </Link>
          
          <Link href="/posts/lighting-biophilic" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Lighting & Biophilic Design</h3>
            <p className="text-gray-600">Ring lights, bias lighting, and plants. Transform your aesthetic.</p>
          </Link>
          
          <Link href="/posts/setup-tours" className="block p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Real Creator Setups</h3>
            <p className="text-gray-600">10 real creators, real setups, real costs. Learn from the best.</p>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/posts" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View All Guides
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Createscape?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setup matters. A great chair reduces back pain. Good lighting improves focus. Organized cables reduce mental clutter. We help creators build workspaces that work.
          </p>
        </div>
      </section>
    </main>
  )
}
