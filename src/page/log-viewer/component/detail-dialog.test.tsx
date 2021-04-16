import { render, screen } from "@testing-library/react"
import { Log, LogLevel } from "../../../service/log"
import DetailDialog from "./detail-dialog"

describe('detail dialog', () => {
  const log: Log = new Log({
    ID: 1,
    CreatedAt: '',
    level: LogLevel.LOG,
    message: 'abc'
  })

  render(<DetailDialog onClose={() => {}} log={log}></DetailDialog>)
  it('should show level', () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  })
})