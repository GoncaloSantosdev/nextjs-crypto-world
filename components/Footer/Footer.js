import Link from "next/link";
import { FooterContent, FooterStyles } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyles>
        <div className="container">
            <FooterContent>
                <Link href='https://github.com/GoncaloSantosdev' target='_blank'>Github</Link>
                <Link href='https://www.linkedin.com/in/goncalo-santos-developer/' target='_blank'>Linkend</Link>
                <Link href='mailto: goncalosantosprofissional@gmail.com'>Email</Link>
            </FooterContent>
        </div>
    </FooterStyles>
  )
}

export default Footer