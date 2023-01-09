import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Name.module.css";
import { Collapse } from "@nextui-org/react";
import WaveformPlayer from "../../components/WaveformPlayer";

export default function band({ data }) {
  const src = data.band.logo;
  const srcCredit = data.band.logoCredits;
  const router = useRouter();
  const audioUrl = "https://soundcloud.com/owkeymusic/laads-flyder/s-3220SziKxUO";

  return (
    <>
      <Head>
        <title>{data.band.name}</title>
      </Head>
      <div className={styles.main}>
        <a className={styles.back} onClick={() => router.back()}>
          Go back ↩
        </a>
        <h1 className={styles.headline}>{data.band.name}</h1>
        <div className={styles.grid}>
          <div className={styles.image}>
            {src.startsWith("http") ? (
              <Image src={src} alt="Artist picture" className={styles.theImage} width={500} height={500} />
            ) : (
              <Image src={"https://greenmark.fly.dev/logos/" + src} alt={srcCredit} className={styles.theImage} width={500} height={500} />
            )}
            {!srcCredit ? null : <p className={styles.credits}>{srcCredit}</p>}
          </div>
          <Collapse.Group bordered className={styles.collapsegroup + " collapsegroup"}>
            <Collapse title="BIO" expanded>
              <div className={styles.bio}>
                <p className={styles.text}>{data.band.bio}</p>
              </div>
            </Collapse>
            <Collapse title="MEMBERS">
              <div className={styles.members}>
                {data.band.members.map((members, i) => (
                  <p className={styles.member}>{members}</p>
                ))}
              </div>
            </Collapse>
            <Collapse title="GENRE">
              <div className={styles.members}>
                <div className={styles.member}>{data.band.genre}</div>
              </div>
            </Collapse>
            <Collapse title="PREVIEW PLAYER">
              {/* SOCIAL MEDIA TAB SO WE CAN REMOVE PICTURES AND PUT ILLUSTRATION */}
              <div className={styles.members}>
                <WaveformPlayer audioUrl={audioUrl} />
              </div>
            </Collapse>
            <Collapse title="SOCIAL MEDIA">
              {/* SOCIAL MEDIA TAB SO WE CAN REMOVE PICTURES AND PUT ILLUSTRATION */}
              <div className={styles.members}>
                <Link href="www.facebook.com" className={styles.member}>
                  <p> FACEBOOK</p>
                </Link>
                <Link href="www.twitter.com" className={styles.member}>
                  <p> TWITTER</p>
                </Link>
                <Link href="www.instagram.com" className={styles.member}>
                  <p> INSTAGRAM</p>
                </Link>
                <Link href="www.spotify.com" className={styles.member}>
                  <p> SPOTIFY</p>
                </Link>
              </div>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const name = context.params.name;
  const res = await fetch("https://greenmark.fly.dev/bands/" + name);

  // If no succes, return a 404 redirect
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://greenmark.fly.dev/bands/");
  const data = await res.json();

  const paths = data.map((obj) => {
    return { params: { name: obj.name.toLowerCase().split(" ").join("_") } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
