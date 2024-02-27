import { FiSearch } from "react-icons/fi"


export default function SearhForm() {
  return (
    <form
      className="min-w-0 flex-grow flex"
      onSubmit={(ev) => { ev.preventDefault() }}>
      <input type="text" placeholder="Pesquisar"

        className="min-w-o w-full p-2 rounded-l-lg border-[1px] border-transparent bg-gray-200 dark:bg-gray-700
        text-gray-900 dark:text-gray-50 focus:outline-none focus:border-primary-400 transition-colors" />
      <button
        className="
        min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
        bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50
        focus:outline-none focus:border-primary-400 focus:text-primary-400
        hover:border-primary-400 hover:text-primary-400 transition-colors">
        <FiSearch />
      </button>
    </form>
  )
}