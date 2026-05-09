import { useState } from 'react'
import './index.css'

function App() {
  const [searchType, setSearchType] = useState('pincode') // 'pincode' or 'area'
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const BASE_URL = "https://blr-pincode-finder.onrender.com"

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const endpoint = searchType === 'pincode' 
        ? `${BASE_URL}/api/pincode/pincode/${inputValue}`
        : `${BASE_URL}/api/pincode/area/${inputValue}`
      
      const response = await fetch(endpoint)
      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError(data.message || 'Something went wrong')
      }
    } catch (err) {
      setError('Could not connect to the server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>BLR Pincode Finder</h1>
        <p>Find locations and pincodes in Bangalore</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab-btn ${searchType === 'pincode' ? 'active' : ''}`}
          onClick={() => {
            setSearchType('pincode')
            setResult(null)
            setError('')
            setInputValue('')
          }}
        >
          By Pincode
        </button>
        <button 
          className={`tab-btn ${searchType === 'area' ? 'active' : ''}`}
          onClick={() => {
            setSearchType('area')
            setResult(null)
            setError('')
            setInputValue('')
          }}
        >
          By Area
        </button>
      </div>

      <form className="search-box" onSubmit={handleSearch}>
        <div className="input-group">
          <label>{searchType === 'pincode' ? 'Enter Pincode' : 'Enter Area Name'}</label>
          <input 
            type="text" 
            placeholder={searchType === 'pincode' ? 'e.g. 560001' : 'e.g. Indiranagar'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {result && (
        <div className="result-card">
          <div className="result-label">
            {searchType === 'pincode' ? 'Area Name' : 'Pincode'}
          </div>
          <div className="result-value">
            {searchType === 'pincode' ? result.area : result.pincode}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
