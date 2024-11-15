import { BoltIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import feature1 from 'src/src/assets/images/feature-1.png';

export const FeaturesSection = () => {
  const features = [1, 2, 3].map((item) => ({
    title: 'Real-time notifications quick as bolt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quisquam!',
    image: feature1,
    isReversedFlow: item % 2 === 0,
    functionalities: [
      {
        title: 'No delays',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        icon: <BoltIcon />,
      },
      {
        title: 'Easy payment',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        icon: <CreditCardIcon />,
      },
    ],
  }));

  return (
    <section id="features" className="mx-auto mt-40 flex max-w-7xl flex-col gap-24">
      {features.map((feature) => (
        <div
          key={feature.title}
          className={`mx-auto flex flex-row items-center justify-center gap-12 ${clsx(feature.isReversedFlow ? 'flex-row-reverse' : 'flex-row')}`}
        >
          <div className="w-96">
            <h2 className="mb-3 text-3xl font-bold">{feature.title}</h2>
            <h3 className="text-md font-medium text-gray-600">{feature.description}</h3>
            <div className="mt-8 flex flex-col gap-4">
              {feature.functionalities.map((functionality) => (
                <div key={functionality.title}>
                  <div className="flex flex-row gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gray-800 p-2">{functionality.icon}</div>
                    <div className="">
                      <h4 className="font-bold">{functionality.title}</h4>
                      <p className="text-sm text-gray-600">{functionality.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-96">
            <img src={feature.image} alt="application dashboard features" className="" />
          </div>
        </div>
      ))}
    </section>
  );
};
