'use client'

import { ChartNoAxesColumnIncreasing, Headset, Link, UserPen, Users } from "lucide-react";

const Steps = () => {

  const steps = [
  {
    title: 'Initial Consultation',
    text: "Identify your business needs and goals, and assess which processes can be outsourced for maximum benefit.",
    svg: (
      <Users className="text-myYellow" size='40' />
    ),
  },
  {
    title: 'Customized Solutions',
    text: 'Create a customized solution tailored to your business based on your potential challenges.',
    svg: (
      <UserPen className="text-myYellow" size='40' />
    ),
  },
  {
    title: 'Onboarding',
    text: 'Start your onboarding process while providing training and support to ensure a smooth transition.',
    svg: (
      <Link className="text-myYellow" size='40' />
    ),
  },
  {
    title: 'Ongoing support',
    text: 'We ensure that your processes are running smoothly through regular reviews and assessments to meet your evolving business needs.',
    svg: (
      <Headset className="text-myYellow" size='40' />
    ),
  },
  {
    title: 'Continuous monitoring and improvement',
    text: 'Providing live updates and reports help us remain transparency to achieve client satisfaction.',
    svg: (
      <ChartNoAxesColumnIncreasing className="text-myYellow" size='40' />
    ),
  },
];

  return (
    <div className="py-12">
      <div className="px-4 sm:px-6 lg:px-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our 5-Step Project Flow
        </h2>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex flex-col items-center text-center p-6 bg-white shadow-xl border border-gray-400 rounded-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* SVG Container with Animation */}
              <div
                className={`
                  p-4 rounded-full bg-opacity-20 mb-4 
                  // Tailwind Class for the Custom Animation (Assumes Config is done)
                  animate-float-bounce 
                  // Custom delay for a staggered effect
                  delay-${index * 500}
                  // Apply background color based on index (just for visual distinction)
                  ${
                    index === 0 ? 'bg-indigo-100' :
                    index === 1 ? 'bg-pink-100' :
                    index === 2 ? 'bg-green-100' :
                    index === 3 ? 'bg-yellow-100' :
                    'bg-red-100'
                  }
                `}
              >
                {step.svg}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition duration-150">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps