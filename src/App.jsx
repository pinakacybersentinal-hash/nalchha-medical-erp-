import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const addProduct = async () => {
    await supabase.from('products').insert([
      { name, price }
    ])
    alert("Product Added")
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Nalchha Medical ERP (Trial)</h1>
      <input
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Price"
        type="number"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}
