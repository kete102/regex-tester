import Layout from "./components/Layout"

function App() {

  return (
    <Layout>
      <section className="w-full p-4">
        <label>Regex expression</label>
        <input type="text" className="resize-none" required/>
      </section>
    </Layout>
  )
}

export default App
