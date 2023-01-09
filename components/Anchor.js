import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Anchor({ href, children, className }) {
  const router = useRouter();
  let active;

  if (router.route == href) {
    active = "active";
  }

  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        router.push(href);
      }}
      href={href}
      className={className + " " + styles[active]}
    >
      {children}
    </a>
  );
}
