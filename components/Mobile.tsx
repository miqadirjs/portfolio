import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-indigo-800 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://picsum.photos/1600/600?grayscale"
            alt="Office background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            We are a team of passionate individuals dedicated to creating the best digital experiences for our customers.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Our Mission
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                To empower businesses with technology that is scalable, secure, and easy to use. We believe in transparency, innovation, and customer success.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Target className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Focus on Impact</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We prioritize work that delivers real value to our clients and their customers.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Built with Love</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our products are crafted with care and attention to detail.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
               <img
                  className="relative mx-auto rounded-lg shadow-lg"
                  width={490}
                  src="https://picsum.photos/600/400?random=2"
                  alt="Mission illustration"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The talented people behind the magic.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <li key={member} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full object-cover"
                    src={`https://picsum.photos/200/200?random=${member + 10}`}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">Team Member {member}</h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">Senior Engineer</dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;