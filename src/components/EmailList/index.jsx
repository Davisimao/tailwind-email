import email from "../../email.json"
import EmailListItem from "./EmailListItem"


export default function EmailList({ setOpenEmail }) {

  return (


    <>
      <div className="relative overflow-y-scroll grow">
        {email.map(email =>
        (
          <EmailListItem
            key={email.id}
            onClick={() => setOpenEmail(email)}
            email={email}
          />

        ))}
      </div>
    </>
  )

}