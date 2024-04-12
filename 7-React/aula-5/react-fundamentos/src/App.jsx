/* eslint-disable react/no-unescaped-entities */
function Soma(a, b){
  return a + b;
}
function App() {
const tech = "JavaScript ";
const status = false;

  return (
    

    <div>
      <h1>{tech} is awesome! </h1>
      <h2>It's easy, like 1 + 1{Soma(1, 1)}</h2>
      <h2>{status ? "On" : "Off"}</h2>
    </div>
  )

}

export default App
