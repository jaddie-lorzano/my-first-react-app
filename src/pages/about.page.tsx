import { Card } from "../components/ui";
import style from "../components/meetups/meetup-item.module.scss";

export function AboutPage() {
  return (
    <>
      <section>
        <h1>About Me</h1>
        <Card>
          <div className={style.image}>
            <img
              src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/32912047_2144413658926290_4403959323860926464_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEyEt1QDE9pswGvgUfwXqbPdBTcCbtpYLF0FNwJu2lgsS21Imfafej4VzewnA-SpNisraq2wW_-DGqVYj_RBNIw&_nc_ohc=7PdKoZphNuwAX8_wRmK&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCWupfosIw4LZJyDGU-SykQTbpKsGc83hAcjgV2U8T0YA&oe=651D2F83"
              alt="Jaddie's Profile"
            />
          </div>

          <div className={style.content}>
            <p>
              I'm a seasoned Angular developer who ventured into the Solana
              ecosystem through a bootcamp. To meet certification requirements,
              I had to build a decentralized app (dApp). Despite my Angular
              background, I quickly adapted by learning React and TypeScript.
              Following a JavaScript React tutorial, I embraced the vite starter
              kit for efficiency. Now, I'm focused on mastering Next.js and
              integrating my Solana program into the app, bridging blockchain
              with user-friendly interfaces. Each step fuels my growth in web
              and blockchain development.
            </p>
          </div>
        </Card>
      </section>
    </>
  );
}

export default AboutPage;
