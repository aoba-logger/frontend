import { Button, MenuItem, Select } from "@material-ui/core"
import { useFormik } from "formik"
import { LogLevel, LogQueryParams } from "../../../service/log"

const levelMap: Record<LogLevel, string> = {
  0: "Info",
  1: "Warn",
  2: "Error",
}

interface Props {
  onQuery(params: LogQueryParams): void
}

function Filter ({ onQuery }: Props) {
  const formik = useFormik<LogQueryParams>({
    initialValues: {
      level: []
    },
    onSubmit: onQuery
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Select id="level" name="level" label="Log Level" value={formik.values.level} onChange={formik.handleChange} multiple>
          {Object.entries(levelMap).map((level, i) => (
            <MenuItem key={i} value={level[0]}>{level[1]}</MenuItem>
          ))}
        </Select>
        <Button color="primary" type="submit" variant="contained">Query</Button>
      </form>
    </div>
  )
}

export default Filter