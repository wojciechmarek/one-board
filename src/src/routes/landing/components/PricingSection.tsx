export const PricingSection = () => {
  const plans = [1, 2, 3].map(() => ({
    title: 'Free',
    description: 'For personal purposes',
    features: ['Unlimited power', 'Unlimited power', 'Unlimited power', 'Unlimited power'],
  }));

  return (
    <section id="pricing" className="mx-auto max-w-7xl">
      <h2 className="mx-auto mb-6 mt-40 max-w-3xl text-center text-3xl font-bold">Easy plans</h2>
      <h3 className="mx-auto max-w-3xl text-center text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ullam quibusdam repudiandae earum.
      </h3>
      <div className="mt-8 flex justify-center gap-4">
        {plans.map((plan) => (
          <div className="flex h-96 flex-col justify-center rounded-xl bg-gray-900 p-8" key={plan.title}>
            <h4 className="text-2xl font-bold">{plan.title}</h4>
            <p>{plan.description}</p>
            <ul className="ml-4 mt-8 list-disc">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className="mt-12 rounded-full bg-gradient-to-r from-[#F72585] to-[#4895EF] px-9 py-4 font-bold"
              href="/sign-in"
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
