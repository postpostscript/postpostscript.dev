import { EmailLink } from "@/components/Email";

export default function Home() {
  return (
    <div className="font-mono min-h-screen p-8 sm:p-20 flex-col gap-20 flex max-w-[40rem] mx-auto">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <h1 className="sm:w-full flex sm:justify-between text-[2.75rem] sm:text-7xl">
          <span>Danny</span>&nbsp;<span>Wilson</span>
        </h1>
        <h2 className="sm:w-full flex sm:justify-between text-xl sm:text-[2rem]">
          <span>Senior&nbsp;</span>
          <em>Full&nbsp;</em>
          <em>Stack&nbsp;</em>Developer
        </h2>

        <div className="flex justify-around w-full text-xl leading-5">
          <ul className="flex gap-4">
            <li className="pe-4 border-e-2">
              <a href="https://github.com/postpostscript">GitHub</a>
            </li>
            <li className="pe-4 border-e-2">
              <a href="https://www.linkedin.com/in/drwxr-xr-x/">LinkedIn</a>
            </li>
            <li className="pe-4 border-e-2">
              <a href="https://postpostscript-blog.web.val.run/">Val Town</a>
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
