import { HeroContent, HeroContentCta, HeroStyles } from "./Hero.styles"

const Hero = () => {
  return (
    <HeroStyles>
        <div className='container'>
          <HeroContent>
            <h1>The World’s Fastest Growing Crypto Community</h1>
            <HeroContentCta>
                <input type="text" placeholder='Your email address'/>
                <button className='btn--secondary'>Join our community</button>
            </HeroContentCta>
          </HeroContent>
        </div>
    </HeroStyles>
  )
}

export default Hero