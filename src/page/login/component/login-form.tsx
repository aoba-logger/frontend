import { Button, TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { auth, AuthParams } from "../../../service/auth"
import * as yup from "yup"
import { useAuth } from "../../../utils/hooks/auth"

const validationSchema: yup.SchemaOf<AuthParams> = yup.object().shape({
  password: yup.string().required("Password is required")
})

function LoginForm() {
  const { login } = useAuth()
  const formContext = useFormik<AuthParams>({
    initialValues: {
      password: ""
    },
    validationSchema,
    onSubmit: async (params) => {
      try {
        await auth(params)
        login()
      } catch (error) {
        console.error(error)
      }
    }
  })
  return (
    <form onSubmit={formContext.handleSubmit}>
      <TextField data-test-id="password-field" type="password" name="password" value={formContext.values.password} onChange={formContext.handleChange} helperText={formContext.errors.password} error={!!formContext.errors.password}></TextField>
      <Button data-test-id="login-button" type="submit" >Login</Button>
    </form>
  )
}

export default LoginForm