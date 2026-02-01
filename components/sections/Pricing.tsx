'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '@/lib/constants'
import { Button, Badge } from '@/components/ui'

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Plans for teams of all sizes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Scale your QA efforts from solo projects to global enterprise operations.
            <br />
            Choose the tier that fits your workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border ${
                plan.highlighted
                  ? 'border-primary-500 shadow-xl shadow-primary-500/10'
                  : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800 p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}

              <div>
                <p className={`text-sm font-medium ${
                  plan.highlighted
                    ? 'text-primary-600'
                    : plan.name === 'Enterprise'
                      ? 'text-gray-500 dark:text-gray-400'
                      : 'text-gray-500 dark:text-gray-400'
                } uppercase tracking-wider`}>
                  {plan.name}
                </p>

                <div className="mt-4">
                  {plan.price !== null ? (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                  ) : (
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      Custom
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>

                <Button
                  className="w-full mt-6"
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  href={
                    plan.price === null
                      ? '/contact/'
                      : 'https://app.glitchsnap.studio/signup'
                  }
                >
                  {plan.cta}
                </Button>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.highlighted
                        ? 'text-primary-500'
                        : 'text-green-500'
                    }`} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
