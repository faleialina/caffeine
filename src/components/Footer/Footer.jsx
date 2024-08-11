import style from './footer.module.scss';
import img1 from './assets/facebook.png';
import img2 from './assets/inst.png';
import img3 from './assets/youtube.png';
import img4 from './assets/twitter.png';

function Footer() {
  return (
    <>
      <div className={style.bcgr}>.</div>
      <div className={style.bcgrFooter}>
        <div className={style.wrapper}>
          <div className={style.item}>
            <h2>Caffeine</h2>
            <p>
              Caffeine is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className={style.icons}>
              <img src={img1} alt="facebook" />
              <img src={img2} alt="inst" />
              <img src={img3} alt="youtube" />
              <img src={img4} alt="twitter" />
            </div>
          </div>
          <div className={style.item}>
            <h3>About</h3>
            <p>Menu</p>
            <p>Features</p>
            <p>News & Blogs</p>
            <p>Help & Supports</p>
          </div>
          <div className={style.item}>
            <h3>Company</h3>
            <p>How we work</p>
            <p>Terms of service</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>
          <div className={style.item}>
            <h3>Contact Us</h3>
            <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            <p>+1 202-918-2132</p>
            <p>beanscene@mail.com</p>
            <p>www.beanscene.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
