import Latte from "../assets/Latte.svg";
("use client");


export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2">
        <a href="/" className="grid col-span-4 justify-center items-center">
          <img
            src={Latte}
            alt="Secrets Cafe"
            className="grid items-center justify-center row-start-1 w-40 h-24"
          />
          <span className="grid items-center content-center text-5xl font-amatic font-medium">
            secrets.cafe
          </span>
        </a>
        <a
          href="/discover"
          className="grid row-start-2 items-center justify-center"
        >
          Discover
        </a>
        <a
          href="/donate"
          className="grid row-start-2 items-center justify-center"
        >
          Donate
        </a>
        <a
          href="/develop"
          className="grid row-start-2 items-center justify-center"
        >
          Develop
        </a>
        <a
          href="/contribute"
          className="grid row-start-2 items-center justify-center"
        >
          Contribute
        </a>
      </div>
    </>
  );
}