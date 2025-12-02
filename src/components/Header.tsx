import { Icon } from "@iconify/react"


export default function Header() {

  return (
    <header className="flex justify-evenly border-b border-border bg-card">

      <div className="flex items-center gap-2 text-xl font-bold" >
        <Icon icon="ri:movie-2-ai-line" fontSize="3em" />
        <h2>Wiki Cine</h2>
      </div>

      <nav className="flex justify-between items-center gap-2 text-xl font-bold w-1/3 ">
        <a href="">Filmes</a>
        <a href="">Series</a>
        <a href="">Animes</a>
        <a href="">Documentarios</a>
      </nav>

    </header>
  )
}

