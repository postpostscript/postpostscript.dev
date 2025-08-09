import { EmailLink } from "@/components/Email";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[40rem] flex-col justify-center gap-20 p-8 font-mono sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-6 sm:items-start">
        <h1 className="flex text-[2.75rem] sm:w-full sm:justify-between sm:text-7xl">
          <span>Danny</span>&nbsp;<span>Wilson</span>
        </h1>
        <h2 className="flex text-xl sm:w-full sm:justify-between sm:text-[2rem]">
          <span>Senior&nbsp;</span>
          <em>Full&nbsp;</em>
          <em>Stack&nbsp;</em>Developer
        </h2>

        <div className="flex w-full justify-around text-xl sm:leading-5">
          <ul className="flex flex-col gap-4 sm:flex-row">
            <li className="border-foreground block text-center max-sm:border-b-2 max-sm:pb-4 sm:border-r-2 sm:pr-4">
              <a href="https://github.com/postpostscript">GitHub</a>
            </li>
            <li className="border-foreground block text-center max-sm:border-b-2 max-sm:pb-4 sm:border-r-2 sm:pr-4">
              <a href="https://www.linkedin.com/in/drwxr-xr-x/">LinkedIn</a>
            </li>
            <li className="border-foreground block text-center max-sm:border-b-2 max-sm:pb-4 sm:border-r-2 sm:pr-4">
              <a href="https://postpostscript-blog.web.val.run/">Val Town</a>
            </li>
            <li className="text-center">
              <EmailLink />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
