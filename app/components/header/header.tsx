export default function Header() {
  return (
    <div className="w-100 p-5">
      <div className="flex gap-2 justify-between px-5">
        <div className="flex gap-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#DCFF7E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail-check"
          >
            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="m16 19 2 2 4-4" />
          </svg>
          vnbharti56@gmail.com
        </div>
        <div className="flex gap-x-5">
          <a>Home</a>
          <a>Work</a>
          <a>Skills</a>
          <a>About</a>
        </div>
      </div>
    </div>
  );
}
