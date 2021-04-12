import { Button, TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { useHistory } from "react-router-dom"
import { auth, AuthParams } from "../../../service/auth"
import * as yup from "yup"

const validationSchema: yup.SchemaOf<AuthParams> = yup.object().shape({
  password: yup.string().required("Password is required")
})

function LoginForm() {
  const history = useHistory()
  const formContext = useFormik<AuthParams>({
    initialValues: {
      password: ""
    },
    validationSchema,
    onSubmit: async (params) => {
      try {
        await auth(params)
        history.push("/log-viewer")
      } catch (error) {
        console.error(error)
      }
    }
  })
  return (
    <form onSubmit={formContext.handleSubmit}>
      <TextField id="password" type="password" name="password" value={formContext.values.password} onChange={formContext.handleChange} helperText={formContext.errors.password} error={!!formContext.errors.password}></TextField>
      <Button type="submit" >Login</Button>
    </form>
  )
}

export default LoginForm