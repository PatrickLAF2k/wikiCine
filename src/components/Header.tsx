import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"


export default function Header() {

  return (

    <header className="border-b bg-background/35 backdrop-blur  sticky top-0 z-50">

      <div className="flex justify-between container mx-auto px-4 py-4">

        <Link to="">
          <nav className="flex items-center ">
            <Icon icon="ri:movie-2-ai-line" fontSize="2em" />
            <h1 className="font-semibold" >Wiki Cine</h1>
          </nav>
        </Link>



        <div className="flex items-center gap-2 ">

          <Link to="">
            <Button > Séries </Button>
          </Link>



          <Link to="/favorites">
            <Button> Favoritos <Icon icon="tabler:hearts" width="24" height="24" color="red" /> </Button>
          </Link>

        </div>
      </div>
    </header>
  )
}