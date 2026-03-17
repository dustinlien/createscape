export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Createscape</h1>
      <p>Creator workspace inspiration — coming soon.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Early Access</h2>
        <form style={{ marginTop: '1rem' }}>
          <input 
            type="email" 
            placeholder="your@email.com" 
            style={{ padding: '0.5rem', marginRight: '0.5rem', minWidth: '200px' }}
            required 
          />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Join List</button>
        </form>
      </section>
    </main>
  )
}
