import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Ongeldige e-mail of wachtwoord")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Welkom terug</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        Log in voor een verbeterde winkelervaring.
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            {...register("email", { required: "Email is verplicht" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Wachtwoord"
            {...register("password", { required: "Wachtwoord is verplicht" })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Deze gegevens komen niet overeen met onze gegevens.
            </span>
          </div>
        )}
        <Button className="mt-6">Inloggen</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Nog geen account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Registeren
        </button>
        .
      </span>
    </div>
  )
}

export default Login
