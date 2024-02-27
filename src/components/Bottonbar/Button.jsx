export default function Button({ active, onClick, children }) {
  return (
    <button
      className={`
    flex-1 p-2 rounded-lg shadow mb-0.5
    text-gray-900 dark:text-gray-50
    ${active ?
          "bg-primary-300 dark:bg-primary-600" : "bg-gray-200 dark:bg-gray-900"}`}
      onClick={onClick}>
      {children}
    </ button >
  )
}