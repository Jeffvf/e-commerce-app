import Navbar from "./navbar"
import SearchBar from "./searchBar"

export default function Header(){
  return(
    <header>
      <SearchBar />
      <Navbar />
    </header>
  )
}