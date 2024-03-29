import { useState } from "react"
import Header from "./components/header"
import Container from "./components/Container"
import Sidebar from "./components/SideBar"
import ButtonBar from "./components/Bottonbar"
import EmailList from "./components/EmailList"
import EmailContent from "./components/EmailContent"


function App() {
  const [openEmail, setOpenEmail] = useState(null)


  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && <EmailContent email={openEmail} setOpenEmail={setOpenEmail} />}
          <ButtonBar />
        </div>
      </Container >
    </>
  )
}

export default App