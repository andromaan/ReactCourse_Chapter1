const Loader = ({ loading, children }) => {
  return (
    <div>
      {loading && <div>Loading...</div>}
      {children}
    </div>
  )
}

export default Loader
