import Link from "next/link"

const AlertBar = () => {
  return (
    <section className="w-full bg-[#000045] p-3">
      <div className="text-center">
        <h4 className="text-white text-md sm:text-lg">
          On <strong>JULY 9TH</strong>, I&apos;ll be running the{' '}
          <strong>ASICS LONDON 10K</strong> for Parkinson&apos;s UK.{' '}
          <Link
            className="underline trannsition-color duration-200 hover:text-slate-300 focus:text-slate-300"
            href="https://www.justgiving.com/fundraising/ianluong"
            target="_blank"
          >
            DONATE HERE.
          </Link>
        </h4>
      </div>
    </section>
  )
}

export default AlertBar
