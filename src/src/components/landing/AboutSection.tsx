import listIcon from 'src/src/assets/icons/clipboard-list-svgrepo-com.svg';

export const AboutSection = () => {
  const features = [1, 2, 3, 4, 5, 6].map((item) => ({
    icon: listIcon,
    title: 'Title ' + item,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, rerum?',
  }));

  return (
    <section id="about" className="mx-auto max-w-7xl">
      <h2 className="mx-auto mb-6 mt-10 max-w-3xl text-center text-3xl font-bold">
        Packaged with cutting-edge features
      </h2>
      <h3 className="mx-auto max-w-3xl text-center text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ullam quibusdam repudiandae earum.
      </h3>
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="h-48 w-72 rounded-lg bg-gray-900 p-4">
            <div className="inline-block rounded-xl bg-gray-800 p-2">
              <img src={feature.icon} alt="" className="h-8 stroke-gray-200" />
            </div>
            <h6 className="mt-2 text-xl font-bold">{feature.title}</h6>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
