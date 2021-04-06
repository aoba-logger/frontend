import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { Log } from "../../../service/log"

interface Props {
  logs: Log[];
  onLogClick: (log: Log) => void;
}

function LogTable({ logs, onLogClick }: Props) {
  return (
    <div className="h-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map(log => (
            <TableRow key={log.id} onClick={() => onLogClick(log)}>
              <TableCell>{log.level}</TableCell>
              <TableCell>{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LogTable