import { IoMoonOutline } from "react-icons/io5";
import { PLACEHOLDER_IMAGE } from "~/constants";
import { Chat } from "~/controllers/Chat";
import { IconButton } from "../IconButton";

export const Navbar = () => {
  return (
    <nav className="z- fixed top-0 z-50 flex h-14 w-full items-center justify-end space-x-2 bg-level1 px-4 shadow-sm">
      <IconButton>
        <IoMoonOutline />
      </IconButton>
      <Chat />
      <div className="flex h-10 w-10 items-center justify-center">
        <img
          className="h-8 w-8 rounded-full"
          alt="avatar"
          src={`${PLACEHOLDER_IMAGE}`}
        />
      </div>
    </nav>
  );
};
