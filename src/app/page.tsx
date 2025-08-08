import { EmailLink } from "@/components/Email";

export default function Home() {
  return (
    <div className="font-mono min-h-screen p-8 sm:p-20 flex-col gap-20 flex max-w-[40rem] mx-auto">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <h1 className="w-full flex justify-between text-6xl sm:text-7xl">
          <span>Danny</span> <span>Wilson</span>
        </h1>
        <h2 className="w-full flex justify-between text-[1.65rem] sm:text-[2rem]">
          Senior <em>Full</em> <em>Stack</em> Developer
        </h2>

        <div className="flex justify-around w-full text-xl leading-5">
          <ul className="flex gap-3">
            <li className="pe-3 border-e-2">
              <a href="https://github.com/postpostscript">GitHub</a>
            </li>
            <li className="pe-3 border-e-2">
              <a href="https://www.linkedin.com/in/drwxr-xr-x/">LinkedIn</a>
            </li>
            <li>
              <EmailLink />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
