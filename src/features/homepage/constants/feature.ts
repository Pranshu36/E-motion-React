import feature1 from '../../../assets/features/best-price.png';
import feature2 from '../../../assets/features/education.png';
import feature3 from '../../../assets/features/prices_comp.png';
import feature4 from '../../../assets/features/Reward.png';

export interface FeatureType {
  lable: string;
  description: string;
  imgUrl: string;
}

export const FEATURES: Array<FeatureType> = [
  {
    lable: 'Best Price',
    description: `Determine the value of your e-waste items effortlessly using our "Best Price" feature. By inputting item details, such as make and condition, you'll receive an accurate estimate before recycling. We take pride in offering competitive rates, ensuring you get the highest return for your electronics`,
    imgUrl: feature1,
  },
  {
    lable: 'Blog',
    description: `Explore our extensive "Blog" section to gain insights into
                responsible e-waste disposal. We provide comprehensive
                resources, including articles and guides, to help you understand
                the environmental impact of e-waste and the importance of
                recycling.`,
    imgUrl: feature2,
  },
  {
    lable: 'Price Comparison Tool',
    description: `Make well-informed recycling decisions with our "Price
                Comparison Tool." Easily compare our competitive recycling rates
                with local competitors to ensure transparency and select the
                most financially advantageous recycling option.`,
    imgUrl: feature3,
  },
  {
    lable: 'Rewards',
    description: `Participate in our "Rewards" program and earn points, bonuses,
                and rewards with every recycling effort. These rewards can be
                redeemed for valuable items, discounts, or gift cards, offering
                tangible benefits for your eco-friendly actions.`,
    imgUrl: feature4,
  },
];
