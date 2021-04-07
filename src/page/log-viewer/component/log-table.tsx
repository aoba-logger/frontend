import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import { Log } from "../../../service/log"

interface Props {
  logs: Log[];
  onLogClick: (log: Log) => void;
  onDelete?: (id: number) => Promise<void>
}

function LogTable({ logs, onLogClick }: Props) {
  return (
    <div className="h-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Message</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map(log => (
            <TableRow key={log.id} onClick={() => onLogClick(log)} className="cursor-pointer">
              <TableCell>{log.level}</TableCell>
              <TableCell>{log.created.format('YY/MM/DD HH:mm')}</TableCell>
              <TableCell>{log.message}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LogTable