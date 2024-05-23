import { useState } from "react"; //navbar상태관리
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //navbar상태관리, 열려있는지 여부관리
  return (
    <>
      <div className="navbar">
        <Link className="navbar_logo">nextmap</Link>
        <div className="navbar_list">
          <Link href="/stores" className="navbar_list--item">
            맛집 목록
          </Link>
          <Link href="/stores" className="navbar_list--item">
            맛집 목록
          </Link>
          <Link href="/new" className="navbar_list--item">
            맛집 등록
          </Link>
          <Link href="/likes" className="navbar_list--item">
            찜한 가게
          </Link>
          <Link href="/login" className="navbar_list--item">
            로그인
          </Link>
        </div>
        {/* mobile button*/}
        <div
          role="presentation"
          className="navbar_button"
          onClick={() => setIsOpen((val) => !val)} //열려있으면 닫고, 닫히면 열고
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}{" "}
          {/*열리면 닫힌거보여주고 */}
        </div>
      </div>
      {/*mobile navbar*/};
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar_list--mobile">
            <Link href="/stores" className="navbar_list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/stores" className="navbar_list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/new" className="navbar_list--item--mobile">
              맛집 등록
            </Link>
            <Link href="/likes" className="navbar_list--item--mobile">
              찜한 가게
            </Link>
            <Link href="/login" className="navbar_list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}{" "}
      {/*열려있을때만 보이게*/}
    </>
  );
}
