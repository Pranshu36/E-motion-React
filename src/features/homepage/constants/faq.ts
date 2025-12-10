export interface FaqType {
  question: string;
  answer: string;
}

export const FAQS: Array<FaqType> = [
  {
    question: 'What is e-waste management?',
    answer:
      'E-waste management refers to the proper handling, disposal, and recycling of electronic waste.',
  },
  {
    question: 'Why is e-waste management important?',
    answer:
      'E-waste management is important to prevent environmental pollution and health hazards caused by improper disposal of electronic waste.',
  },
  {
    question: 'How can I contribute to e-waste management?',
    answer:
      'You can contribute to e-waste management by recycling your electronic devices at designated pickup points or recycling centers.',
  },
  {
    question: 'What types of electronic waste can be recycled?',
    answer:
      'Common electronic waste that can be recycled includes computers, laptops, mobile phones, televisions, printers, and other electronic devices.',
  },
  {
    question: 'What happens to recycled e-waste?',
    answer:
      'Recycled e-waste goes through a process called dismantling, where valuable components are extracted for reuse. Hazardous materials are safely disposed of, and the remaining materials are recycled or properly disposed of according to environmental regulations.',
  },
];
