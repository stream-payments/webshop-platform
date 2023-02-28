import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div
        className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          De zomercollectie is binnen!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Dit jaar zal onze nieuwe
          zomercollectie je beschermen tegen de harde elementen van een wereld die er niet om geeft of je leeft of
          sterft.
        </p>
        <UnderlineLink href="/store">Bekijk producten</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
