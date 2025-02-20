import { Code, Globe, Server, RefreshCw, BarChart, Palette } from "lucide-react"
import { AnimatedSearchBox } from "./AnimatedSearchBox"

// Array of service objects, each containing icon, title, description, and bullet points
const services = [
  {
    icon: Code,
    title: "Development",
    description: "Crafting modern websites with innovative technologies",
    bullets: ["💻 Responsive design", "🎨 Intuitive UI/UX"],
  },
  {
    icon: Globe,
    title: "Domain & Deployment",
    description: "Streamlining your online presence from start to finish",
    bullets: ["🌐 Domain management", "🚀 Efficient deployment"],
  },
  {
    icon: Server,
    title: "Hosting",
    description: "Providing robust and scalable hosting solutions",
    bullets: ["☁️ Cloud infrastructure", "⛨ Security measures"],
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Updates",
    description: "Keeping your website current and optimized",
    bullets: ["🔄 Regular updates", "⚡ Performance tuning"],
  },
  {
    icon: BarChart,
    title: "Analytical Insight",
    description: "Leveraging data to enhance online performance",
    bullets: ["📊 User behavior analysis", "🎯 Conversion optimization"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting unique and engaging visual identities",
    bullets: ["🎨 Brand development", "✨ Custom illustrations"],
  },
]

export function ServicesSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Section title and description */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Launching Your Web Presence 💡
        </h2>
        <p className="text-xl text-center text-gray-900 dark:text-white mb-6 max-w-3xl mx-auto">
          Elevate your online presence with my tailored web solutions.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ease-out" />
            <div className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <div className="flex items-center mb-2">
                <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-900 dark:text-white mb-3">{service.description}</p>
              <ul className="space-y-1">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-900 dark:text-white">
                    <span className="mr-2 text-base flex-shrink-0 w-6">{bullet.slice(0, 2)}</span>
                    <span className="flex-1">{bullet.slice(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Animated search box */}
      <div className="mb-8 relative">
        <AnimatedSearchBox />
      </div>

      {/* Call-to-action button */}
      <div className="text-center mt-8">
        <a
          href="mailto:leo.gardberg@gmail.com"
          className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg overflow-hidden border border-current/20 transition-all duration-300 ease-in-out hover:scale-105 font-mono text-base tracking-normal relative"
        >
          <span className="relative z-10">Get in Touch</span>
          <div className="absolute inset-0 bg-white dark:bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  )
}

