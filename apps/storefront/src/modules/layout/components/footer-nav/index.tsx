import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Demo webshop</a>
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collection</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Over ons</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                >
                  Onze webshop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                >
                  Verzending en retourneren
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright {new Date().getFullYear()} Aaron van den Berg
        </span>
      </div>
    </div>
  )
}

export default FooterNav
