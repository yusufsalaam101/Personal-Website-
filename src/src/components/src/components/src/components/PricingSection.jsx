import { Check } from 'lucide-react';

const plans = [
  { name: 'Foundation', price: '$849', features: ['Custom Website', 'Mobile Responsive', 'SEO Setup'] },
  { name: 'Growth', price: '$600', sub: '+ $149/mo', features: ['Unlimited Edits', 'Hosting Included', 'Maintenance'] },
  { name: 'Authority', price: '$450', sub: '+ $249/mo', features: ['AI Chatbot', 'Booking System', 'Advanced SEO'] },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-white text-4xl mb-4">Investment Matrix</h2>
        <p className="text-zinc-400">Choose the plan that matches your studio's ambition.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="border border-blueprint-blue/20 p-8 bg-white/5 backdrop-blur-md rounded-lg">
            <h3 className="text-blueprint-blue text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-white mb-6">{plan.price} <span className="text-sm text-blueprint-blue">{plan.sub || ''}</span></div>
            <ul className="text-zinc-300 space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex gap-2 items-center text-sm"><Check size={14} className="text-blueprint-blue" /> {f}</li>
              ))}
            </ul>
            <button className="w-full py-3 border border-blueprint-blue/40 text-blueprint-blue uppercase text-xs font-bold hover:bg-blueprint-blue hover:text-obsidian transition-all">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}
