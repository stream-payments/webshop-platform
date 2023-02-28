import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { useMemo } from "react"

type ProductTabsProps = {
  product: Product
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Product informatie",
        component: <ProductInfoTab product={product} />,
      },
      {
        label: "Verzending en retourneren",
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "border-b border-gray-900": selected,
                    },
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Materiaal</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Herkomst</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Gewicht</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Afmetingen</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Snelle levering</span>
            <p className="max-w-sm">
              Uw pakket komt binnen 3-5 werkdagen aan op uw afhaallocatie locatie of in het comfort van uw huis.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Eenvoudige ruilingen</span>
            <p className="max-w-sm">
              Is de pasvorm niet helemaal goed? Geen zorgen - we ruilen uw product om voor een nieuw exemplaar.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Gemakkelijk terugsturen</span>
            <p className="max-w-sm">
              Stuur uw product gewoon terug en wij betalen u uw geld terug. Zonder vragen te stellen - we doen ons best
              om ervoor te zorgen dat uw retourzending probleemloos verloopt.
            </p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
