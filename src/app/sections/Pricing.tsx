"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: number // Only one price now
  description: string
  features: Feature[]
  icon: React.ReactNode
}

export default function Pricing({ className }: { className?: string }) {
  const tiers: PricingTier[] = [
    {
      name: "Website",
      price: 300, // Fixed price
      description: "Custom websites that represent your brand.",
      features: [
        { name: "Responsive", description: "Optimized for all devices", included: true },
        { name: "SEO", description: "Improved visibility", included: true },
        { name: "Custom", description: "Tailored to your needs", included: true },
      ],
      icon: <CheckIcon className="w-6 h-6" />,
    },
    {
      name: "Mobile app",
      price: 800, // Fixed price
      description: "Native mobile apps for iOS and Android.",
      features: [
        { name: "Native Performance", description: "Smooth user experience", included: true },
        { name: "App Store", description: "Available for download", included: true },
        { name: "Notifications", description: "Engage users", included: true },
      ],
      icon: <CheckIcon className="w-6 h-6" />,
    },
    {
      name: "Enterprise Pack",
      price: 1100, 
      description: "Complete solution for both web and mobile development.",
      features: [
        { name: "Web Dev", description: "Custom websites", included: true },
        { name: "Mobile Apps", description: "Native apps for iOS and Android", included: true },
        { name: "Custom", description: "Tailored to your business' needs", included: true },
   
      ],
      icon: <CheckIcon className="w-6 h-6" />,
    },
  ]

  const buttonStyles = {
    default: cn(
      "h-12 bg-white dark:bg-zinc-900",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800",
      "text-zinc-900 dark:text-zinc-100",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium",
    ),
  }

  const badgeStyles = cn(
    "px-4 py-1.5 text-sm font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg",
  )

  return (
    <section id="Price"
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className,
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
        <div className="justify-content-center items-center">
        <Badge>Prices</Badge>
      </div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            What we charge!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-2xl transition-all duration-300",
                "flex flex-col",
                "bg-white dark:bg-zinc-800/50",
                "border",
                "border-zinc-200 dark:border-zinc-700 shadow-md",
                "hover:translate-y-0 hover:shadow-lg",
              )}
            >
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                     $  {tier.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-4">
                      <div
                        className={cn(
                          "mt-1 p-0.5 rounded-full transition-colors duration-200",
                          feature.included
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-zinc-400 dark:text-zinc-600",
                        )}
                      >
                        <CheckIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {feature.name}
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button
                  className={cn(
                    "w-full relative transition-all duration-300",
                    buttonStyles.default,
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get started
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
