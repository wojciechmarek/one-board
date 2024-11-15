import { BookmarkIcon, ChartBarIcon, CloudIcon, FaceSmileIcon, HeartIcon, StarIcon } from '@heroicons/react/24/solid';

export const AboutSection = () => {
  const features = [
    {
      icon: <ChartBarIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
    {
      icon: <BookmarkIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
    {
      icon: <CloudIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
    {
      icon: <FaceSmileIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
    {
      icon: <HeartIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
    {
      icon: <StarIcon />,
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl">
      <h2 className="mx-auto mb-6 mt-40 max-w-3xl text-center text-3xl font-bold">
        Packaged with cutting-edge features
      </h2>
      <h3 className="mx-auto max-w-3xl text-center text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ullam quibusdam repudiandae earum.
      </h3>
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="h-48 w-72 rounded-lg bg-gray-900 p-4">
            <div className="inline-block h-10 w-8 rounded-xl bg-gray-800 p-2">{feature.icon}</div>
            <h4 className="mt-2 text-xl font-bold">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
