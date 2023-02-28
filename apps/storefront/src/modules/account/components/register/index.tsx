import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">Word een member</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Maak uw Member profiel aan, en krijg toegang tot een verbeterde shopping ervaring.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Voornaam"
            {...register("first_name", { required: "Voornaam is verplicht" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Achternaam"
            {...register("last_name", { required: "Achternaam is verplicht" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email is verplicht" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Telefoonnummer"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Wachtwoord"
            {...register("password", {
              required: "Wachtwoord is verplicht",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              These credentials do not match our records
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Door een account aan te maken, gaat u akkoord met de &apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Privacy Policy</a>
          </Link>{" "}
          en{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Terms of Use</a>
          </Link>
          .
        </span>
        <Button className="mt-6">Registeren</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Al een account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Inloggen
        </button>
        .
      </span>
    </div>
  )
}

export default Register
