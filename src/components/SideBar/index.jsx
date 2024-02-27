import WriteButton from "./WriteButton";
import { FiEdit3 } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiAlertOctagon } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

import Button from "./button";

const inline = "inline mr-1 mb-1"

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md flex-col items-start gap-2 grow-0 basis-48 shrink-1">
      <WriteButton>
        <FiEdit3 className={inline} />Escrever
      </WriteButton>
      <Button active>
        <FiInbox className={inline} /> Caixa de Entrada
      </Button>
      <Button>
        <FiSend className={inline} /> Enviados
      </Button>
      <Button>
        <FiFileText className={inline} />  Rascunhos
      </Button>
      <Button>
        <FiFileText className={inline} />   Arquivados
      </Button>
      <Button>
        <FiArchive className={inline} />   Spam
      </Button>
      <Button>
        <FiTrash2 className={inline} />    Lixeira
      </Button>

    </aside>
  )
}