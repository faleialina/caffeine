import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './landing.module.scss';
import coffee from './assets/coffee.svg';
import coffeeMenu1 from './assets/coffeeMenu1.png';
import coffeeMenu2 from './assets/coffeeMenu2.png';
import coffeeMenu3 from './assets/coffeeMenu3.png';
import coffeeMenu4 from './assets/coffeeMenu4.png';
import coffeeAbout1 from './assets/coffeeAbout1.png';
import coffeeAbout2 from './assets/coffeeAbout2.png';
import coffeeAbout3 from './assets/coffeeAbout3.png';
import coffeeAbout4 from './assets/coffeeAbout4.png';
import cup from './assets/cup.png';
import CoffeeItem from './CoffeeItem';
import AboutItem from './AboutItem';
import Slider from '../../components/Slider/Slider';

const coffies = [
  { id: 1, title: 'Cappuccino', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu1 },
  { id: 2, title: 'Chai Latte', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu2 },
  { id: 3, title: 'Macchiato', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu3 },
  { id: 4, title: 'Expresso', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu4 },
];
const about = [
  { id: 1, title: 'Supreme Beans', description: 'Beans that provides great taste', img: coffeeAbout1 },
  { id: 2, title: 'High Quality', description: 'We provide the highest quality', img: coffeeAbout2 },
  { id: 3, title: 'Extraordinary ', description: 'Coffee like you have never tasted', img: coffeeAbout3 },
  { id: 4, title: 'Affordable Price', description: 'Our Coffee prices are easy to afford', img: coffeeAbout4 },
];

function Landing() {
  return (
    <>
      <div className={style.landingBgr}>
        <Header />

        <div className={style.landing}>
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className={style.button}>Order Now</button>
        </div>
      </div>

      <div className={style.coffeeDiscovery}>
        <div className={style.content}>
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
            have ever tasted.
          </p>
          <button className={style.button}>Order Now</button>
        </div>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </div>

      <div className={style.menu}>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        <div className={style.content}>
          {coffies.map(el => (
            <CoffeeItem key={el.id} coffee={el} />
          ))}
        </div>
      </div>

      <div className={style.about}>
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className={style.content}>
          {about.map(el => (
            <AboutItem key={el.id} coffee={el} />
          ))}
        </div>
        <p>Great ideas start with great coffee, Lets help you achieve that</p>
        <h3>Get started today.</h3>
      </div>

      <div className={style.coffeeBgr}>
        <div className={style.coffee}>
          <div className={style.content}>
            <h2>Get a chance to have an Amazing morning</h2>
            <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
            <button className={style.button}>Order Now</button>
          </div>

          <img src={cup} alt="cup" />
        </div>
      </div>

      <div className={style.slider}>
        <h2>Our coffee perfection feedback</h2>
        <p>Our customers has amazing things to say about us</p>
        <Slider />
      </div>

      <Footer />
    </>
  );
}

export default Landing;
