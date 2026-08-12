import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-amber-500' : 'text-white group-hover:text-amber-400'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1.question'), a: t('faq.q1.answer') },
    { q: t('faq.q2.question'), a: t('faq.q2.answer') },
    { q: t('faq.q3.question'), a: t('faq.q3.answer') },
    { q: t('faq.q4.question'), a: t('faq.q4.answer') },
  ];

  return (
    <section id="faq" className="py-20 bg-black/50" aria-label={t('faq.subtitle')}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            {t('faq.title')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            {t('faq.subtitle')}
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;