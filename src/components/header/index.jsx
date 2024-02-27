import Logo from "./Logo"
import Avatar from "./Avatar"
import SearhForm from "./SearchForm"

export default function Header() {
  return (
    <>
      <header className="p-4 h-16 xl:px-6 lg:h-20
       flex items-center justify-between gap-6 bg-gray-100
        dark:bg-gray-800 md:gap-16 xl:gap-32">
        <Logo />
        <SearhForm />
        <Avatar></Avatar>
      </header>
    </>
  )
}