import Link from "@components/link"

export default function Footer() {
  return (
    <footer className="">
      <div className="container pb-8">
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex items-center justify-center w-full py-2 md:flex-row">
            ©{"\u00A0"}
            <Link
              href="/"
              className="inline-block hover:text-primary-500"
            >
            <a
              href="https://goright.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:no-underline "
            >
              GoRight
            </a>
            </Link>
            {"\u00A0"}2021
          </div>
        </div>
      </div>
    </footer>
  )
}
