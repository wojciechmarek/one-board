import facebook from 'src/src/assets/logos/facebook.svg';
import google from 'src/src/assets/logos/google-cloud.svg';
import microsoft from 'src/src/assets/logos/microsoft.svg';

export const HomeSection = () => {
  return (
    <section id="home" className="mx-auto max-w-7xl">
      <h2 className="mx-auto mb-6 mt-10 max-w-3xl text-center text-5xl font-bold">
        Next generation backend service
        <br />
        <span className="bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text text-transparent">
          for modern developers
        </span>
      </h2>
      <h3 className="mx-auto max-w-3xl text-center text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ullam quibusdam repudiandae earum.
      </h3>
      <div className="mt-8 flex flex-row justify-center gap-12">
        <a className="rounded-full bg-gradient-to-r from-red-500 to-blue-900 px-9 py-4 font-bold" href="/sign-up">
          Get started
        </a>
        <a className="rounded-full bg-gray-900 px-7 py-4 font-bold" href="#features">
          Browse features
        </a>
      </div>
      <div className="mx-auto mt-16 h-56 w-96 bg-red-400">image</div>
      <div className="mx-auto mt-16 flex flex-row justify-center gap-24">
        <img src={facebook} alt="" className="h-8" />
        <img src={google} alt="" className="h-8" />
        <img src={microsoft} alt="" className="h-8" />
      </div>
    </section>
  );
};
