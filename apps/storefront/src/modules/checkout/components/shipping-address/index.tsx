import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="E-mail"
              {...register("email", {
                required: "E-mail is vereist",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Voornaam"
                {...register("shipping_address.first_name", {
                  required: "Voornaam is verplicht",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Achternaam"
                {...register("shipping_address.last_name", {
                  required: "Achternaam is verplicht",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label="Bedrijfsnaam"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Adres + huisnummer"
              {...register("shipping_address.address_1", {
                required: "Adres + huisnummer is verplicht",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Appartementen, suite, etc."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[122px_1fr] gap-x-2">
              <Input
                label="Postcode"
                {...register("shipping_address.postal_code", {
                  required: "Postcode is verplicht",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Plaats"
                {...register("shipping_address.city", {
                  required: "Plaats is verplicht",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: "Land is verplicht",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Provincie"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Telefoonnummer"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
