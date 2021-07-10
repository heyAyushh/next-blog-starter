import ThemeSwitch from './ThemeSwitcher'

const Intro = () => {
  return (
    <section className="flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <div className="text-center md:text-left text-lg mt-5 md:pl-8">
        <ThemeSwitch />
      </div>
    </section>
  )
}

export default Intro
