import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { IState } from "../redux/interfaces";

const Error: NextPage = () => {
  const app = useSelector<IState, IState["app"]>(state => state.app);
  return (
    <>
      <p>
        This is an error page, it also has access to store: <code>{app}</code>
      </p>
      <nav>
        <Link href="/">
          <a>Navigate to index</a>
        </Link>
      </nav>
    </>
  );
};

export default Error;
