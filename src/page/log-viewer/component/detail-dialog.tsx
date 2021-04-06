import { Dialog, DialogTitle } from "@material-ui/core"
import { Log } from "../../../service/log"

interface Props {
  log?: Log,
  onClose(): void
}

function DetailDialog ({log, onClose}: Props) {
  return (
    <Dialog open={!!log} onClose={onClose} >
      <DialogTitle>Log Detail</DialogTitle>
      <h4>{log?.message}</h4>
    </Dialog>
  )
}

export default DetailDialog