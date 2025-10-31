import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate in GNC TECHTHON 1.0?",
      answer: "Students from all colleges and universities are welcome! Whether you're a beginner or experienced developer, you can participate individually or in teams of up to 4 members.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, valid ID proof, and lots of enthusiasm! We'll provide food, wifi, mentorship, and a great environment to code.",
    },
    {
      question: "Are there any participation fees?",
      answer: "No! GNC TECHTHON 1.0 is completely free for all participants. We want to make innovation accessible to everyone.",
    },
    {
      question: "What are the prize categories?",
      answer: "We have prizes for overall winners, best use of AI, most sustainable solution, best presentation, and theme-specific awards. Total prize pool worth ₹2,00,000+!",
    },
    {
      question: "Will accommodation be provided?",
      answer: "The hackathon is a 36-hour event with 24/7 venue access. While we don't provide accommodation, you're welcome to stay at the venue throughout the event.",
    },
    {
      question: "Do I need prior hackathon experience?",
      answer: "Not at all! We welcome beginners and will have mentors available throughout the event to guide you. It's a great learning opportunity.",
    },
    {
      question: "Can I work on an existing project?",
      answer: "All projects must be started fresh during the hackathon. However, you can use open-source libraries, frameworks, and tools.",
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical implementation, design, impact, and presentation. Our panel includes industry experts and academics.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the hackathon
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
